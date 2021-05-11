function counterAdd() {
  return {
    type: "INCREMENT",
  };
}

//action creaters  emmits ===> actions
function counterSubstract() {
  //Action Objects
  return {
    type: "DECREMENT",
  };
}

module.exports = {
  counterAdd,
  counterSubstract,
};
