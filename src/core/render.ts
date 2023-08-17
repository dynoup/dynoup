interface Registry {
  viewFunction: () => string;
  children?: RegistryItem[];
}
interface RegistryItem extends Registry {
  selector: string;
}

const createDOM = ($target: Element, registry: Registry): Element => {
  const $virtualNode = $target.cloneNode(true) as Element;

  $virtualNode.innerHTML = registry.viewFunction(); 

  registry.children?.forEach(childRegistry => {
    const $originChild = $virtualNode.querySelector(`[data-component="${childRegistry.selector}"]`);

    if (!$originChild) {
      throw new Error(`${$originChild}]는 존재하지 않는 요소입니다.`)
    }

    const $virtualChild = createDOM($originChild, childRegistry);
    $originChild.replaceWith($virtualChild);
  })

  return $virtualNode;
}

export const createRoot = ($rootElement: HTMLElement) => {
  if (!$rootElement) {
    throw new Error(`${$rootElement}]는 존재하지 않는 요소입니다.`)
  }

  return {
    render(registry: Registry) {
      const $virtualRoot = createDOM($rootElement, registry);

      // TODO: 여기에서 diff
      $rootElement.replaceWith($virtualRoot);
    }
  }
}