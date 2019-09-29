export const isPageScrollable = () => {
  const currentScrollPos = window.pageYOffset;
  return currentScrollPos > 410;
};

export const isPageBottom = () => {
  const element = document.documentElement;
  return element.scrollHeight - element.scrollTop === element.clientHeight;
};
