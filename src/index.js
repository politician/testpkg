const myName = (name) => {
  if (/^\w+$/i.test(name)) return `${name}, your name is valid!`;
  else throw new Error("Your name is invalid");
};

const myAsyncName = async (name) => {
  return new Promise((resolve) => {
    if (/^\w+$/i.test(name)) resolve(`${name}, your name is valid!`);
    else throw new Error("Your name is invalid");
  });
};

export { myName, myAsyncName };
