((solution) => {
  const input = [];
  require("readline")
    .createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    .on("line", (line) => {
      input.push(line);
    })
    .on("close", () => {
      solution(input);
      process.exit();
    });
})((input) => {
  const [a, b] = input[0].split(" ").map(BigInt);
  const res = a + b;
  console.log(res.toString());
});
