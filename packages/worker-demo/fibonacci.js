self.onmessage = (e) => {
  const userNum = Number(e.data);
  fibonacci(userNum);
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  while (num >= 0) {
    [a, b] = [a + b, a];
    num--;
  }

  self.postMessage(b);
}
