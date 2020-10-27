"use strict";
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var state = useState();
// state.setState("123");
// console.log(state.getState());
state.setState(123);
console.log(state.getState());
