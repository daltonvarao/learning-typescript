function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const state = useState<number>();

// state.setState("123");
// console.log(state.getState());

state.setState(123);
console.log(state.getState());
