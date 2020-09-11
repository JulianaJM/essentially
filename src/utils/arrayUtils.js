export const removeUselessWords = list => {
  const stopWords = [
    "de",
    "a",
    "à",
    "le",
    "la",
    "les",
    "des",
    "sans",
    "pour",
    "d'",
    "d",
    "l'",
    "que",
    "et",
    "huiles",
    "huile",
    "Huiles",
    "Huile",
    "essentielle",
  ];

  return list.filter(l => !stopWords.includes(l));
};

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
