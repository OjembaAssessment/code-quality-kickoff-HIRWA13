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

  if (!password || password === "" || password == "null") return 0;

  
  const duplicateNums = password.match(/(\d)\1+/);
  const duplicateLetters = password.match(/(\w)\1+/);

  let repeats = duplicateNums ? duplicateNums[0].length : 0;
  repeats += duplicateLetters ? duplicateLetters[0].length : 0;

  return repeats === 0 ? 0 : repeats <= 2 ? 1 : 2;
}
