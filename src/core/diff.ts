export const applyDiff = ($origin: Element, $virtual: Element) => {
  // 1. 태그 비교
  if ($origin.tagName !== $virtual.tagName) {
    return $virtual;
  }

  // 2. 속성 비교
  const originAttributes = [...$origin.attributes];
  const virtualAttributes = [...$virtual.attributes];

  (originAttributes.length > virtualAttributes.length ? originAttributes : virtualAttributes).forEach(attribute => {
    originAttributes
  })
  
  // 3. 노드가 leaf Node 라면? text 비교
  // 4. 자식 비교
  // return $virtual
};
