export default function getArraySum(array) {
  return array.reduce((total, element) => total + element, 0);
}
