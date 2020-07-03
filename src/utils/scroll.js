export const isPageScrollable = () => window.scrollY > 100;

export const isPageBottom = () => {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
};
