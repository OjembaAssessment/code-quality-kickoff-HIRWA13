const calculateFibonacci = (n) => {
  const seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq.join(", ");
};
