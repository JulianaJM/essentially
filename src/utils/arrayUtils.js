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

  if (list.includes("qui")) {
    list.splice(list.indexOf("qui"), 1);
  }

  if (list.includes("que")) {
    list.splice(list.indexOf("que"), 1);
  }

  if (list.includes("et")) {
    list.splice(list.indexOf("et"), 1);
  }

  if (list.includes("huiles")) {
    list.splice(list.indexOf("huiles"), 1);
  }

  if (list.includes("huile")) {
    list.splice(list.indexOf("huile"), 1);
  }

  if (list.includes("Huile")) {
    list.splice(list.indexOf("Huile"), 1);
  }

  if (list.includes("Huiles")) {
    list.splice(list.indexOf("Huiles"), 1);
  }

  if (list.includes("essentielle")) {
    list.splice(list.indexOf("essentielle"), 1);
  }

  return list;
};
