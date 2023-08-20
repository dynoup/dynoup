// DOM root init
const CreateDOMRoot = (): HTMLElement | null => {
  const root: HTMLElement | null = document.getElementById('root') ?? null;
  return root;
};

export default CreateDOMRoot;
