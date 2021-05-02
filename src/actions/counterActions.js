function counterAdd() {
  return {
    type: "INCREMENT",
  };
}

function counterSubstract() {
  return {
    type: "DECREMENT",
  };
}

module.exports = {
  counterAdd,
  counterSubstract,
};
