export const isPageScrollable = () => {
  const currentScrollPos = window.pageYOffset;
  return currentScrollPos > 450;
};

export const isPageBottom = () => {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
};
