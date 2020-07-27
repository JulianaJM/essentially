/* eslint-disable import/prefer-default-export */
export const removeUselessElement = list => {
  if (list.includes("de")) {
    list.splice(list.indexOf("de"), 1);
  }

  if (list.includes("a")) {
    list.splice(list.indexOf("a"), 1);
  }

  if (list.includes("à")) {
    list.splice(list.indexOf("à"), 1);
  }

  if (list.includes("le")) {
    list.splice(list.indexOf("le"), 1);
  }

  if (list.includes("la")) {
    list.splice(list.indexOf("la"), 1);
  }

  if (list.includes("les")) {
    list.splice(list.indexOf("les"), 1);
  }

  if (list.includes("des")) {
    list.splice(list.indexOf("des"), 1);
  }

  if (list.includes("sans")) {
    list.splice(list.indexOf("sans"), 1);
  }

  if (list.includes("pour")) {
    list.splice(list.indexOf("pour"), 1);
  }

  if (list.includes("d'")) {
    list.splice(list.indexOf("d'"), 1);
  }

  if (list.includes("l'")) {
    list.splice(list.indexOf("l'"), 1);
  }

  return list;
};
