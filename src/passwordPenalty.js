/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (password == "null") return 0;
  // find and match repeated characters in a string
  const regex = /(.)\1+/g;
  const matches = password.match(regex);

  if (matches) {
    const penalty = matches.reduce((acc, match) => {
      return acc + (match.length >= 3 ? 2 : 1);
    }, 0);
    return penalty;
  }
  return 0;
}
