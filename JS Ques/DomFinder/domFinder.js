const getPathFromChildToParent = (parent, child) => {
  let currentNode = child;
  let pathArray = [];
  while (currentNode !== parent) {
    const parentElement = currentNode.parentElement;
    const childernArray = Array.from(parentElement.children);
    pathArray.push(childernArray.indexOf(currentNode));
    currentNode = parentElement;
  }
  return pathArray;
};

const getTextFromPath = (path, parent) => {
  let currentNode = parent;
  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }
  return currentNode.innerText;
};
const findDom = () => {
  const nodeA = document.getElementById("nodeA");
  const rootA = document.getElementById("rootA");
  const rootB = document.getElementById("rootB");
  const path = getPathFromChildToParent(rootA, nodeA);
  return getTextFromPath(path, rootB);
};
console.log(findDom());
