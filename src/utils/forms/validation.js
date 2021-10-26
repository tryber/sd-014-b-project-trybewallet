// Adapted from this Stack Overflow answer: https://stackoverflow.com/a/9204568
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(String(email).toLowerCase());
}

export function isValidPassword(password) {
  const minimumPasswordLength = 6;

  return password.length >= minimumPasswordLength;
}
