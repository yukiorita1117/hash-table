const [, , firstArg] = process.argv;

if (!firstArg) {
  console.error("Please pass one argument!!");
  process.exit(1);
}

const msg = `
  Hello!! ${firstArg} san.
  I am json hard coder.
  GitHub: https://github.com/yukiorita1117
`;

console.log(msg);
