import searchRepository from '../repository/serachRepository';

const DynoRender = (key: string, parent: string, dynode: HTMLElement) => {
  const parentNode = document.querySelector(parent);
  searchRepository();
  // root -> page를 할 때
  // parentNode == root -> if root.innerHTML에 page가 없으면, replacechildren
  // 있으면 리렌더임 -> cloneNode = diff(cloneNode,dynoData)-> dyno.replaceWith(clonNode)
  parentNode?.replaceChildren(dynode);
  // 추후엔 diff 알고리즘을 사용해, dirty체크를 하며 필요한 렌더를 인색한다.
  // innerHTML작업만 해주면 된다.

  return 'Render!';
};

export default DynoRender;
