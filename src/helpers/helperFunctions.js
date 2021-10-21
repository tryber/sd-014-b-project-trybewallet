export default function firstLetterUpperCase(string) {
  const FirstLetter = string.slice(0, 1).toUpperCase();
  const stringRemnant = string.slice(1, string.lenght);
  return FirstLetter + stringRemnant;
}
