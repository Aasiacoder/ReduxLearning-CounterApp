import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store";
import { decrement } from "./store";

function App() {

  const count = useSelector(function(state){//parameter-state and inside state have a reducer
    return state.counter.count;//state has a reducer and counter have variable
  })

  //useDispatch() for actions
  const dispatch = useDispatch();//inga erunthu action aha call panum

  function incrementFunction(){
    //dispatch({type:"INC"}) //dispatch({parameter is type:"INC"})
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
