export const rSquare = (xInput: number[], yInput: number[]) => {
  const length = Math.min(xInput.length, yInput.length);

  const x = xInput.slice(0, length);
  const y = yInput.slice(0, length);

  const n = x.length;
  const x2 = x.map((item) => item ** 2);
  const y2 = y.map((item) => item ** 2);
  const xy = x.map((item, index) => item * (y[index] ?? 0));

  const sumX = x.reduce((acc, curr) => acc + curr, 0);
  const sumX2 = x2.reduce((acc, curr) => acc + curr, 0);
  const sumY = y.reduce((acc, curr) => acc + curr, 0);
  const sumY2 = y2.reduce((acc, curr) => acc + curr, 0);
  const sumXY = xy.reduce((acc, curr) => acc + curr, 0);

  return (
    ((n * sumXY - sumX * sumY) /
      (Math.sqrt(n * sumX2 - sumX ** 2) * Math.sqrt(n * sumY2 - sumY ** 2))) **
    2
  );
};
