import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store";
import { decrement } from "./store";

function App() {

  const count = useSelector(function(state){//parameter-state, state means reducer
    return state.counter.count;//inside state have counter object have count variable
  })

  //useDispatch() for actions
  const dispatch = useDispatch();//useDispatch can call the actions

  function incrementFunction(){
    //dispatch({type:"INC"}) //dispatch({parameter is type:"INC"}) older method
      dispatch(increment()); //here directly call a inrement function
  }

  function decrementFunction(){
    //dispatch({type:"DEC"})
    dispatch(decrement());
  }

  return (
    <div id="container">
      <h1>Count: {count}</h1>
      <button onClick={incrementFunction}>Increment</button>
      <button onClick={decrementFunction}>Decrement</button>
    </div>
  );
}

export default App;
