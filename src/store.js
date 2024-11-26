import { configureStore } from "@reduxjs/toolkit";//store ah imoprt pana use this line
import { createSlice } from "@reduxjs/toolkit";


//it act like reducer for manage state
const initialState = {//here i initial the count state variable
    count:0
}

const counterSlice = createSlice(
    {
        name:"counter",//slice name
        initialState,//i mention initial state
        reducers:{
            increment:function(state){//state have initialState actions function
                state.count = state.count+1
            },
            decrement:function(state){
                state.count = state.count-1
            }
        }
    }
)
//configureStore({}) have a object{}
const store = configureStore({
    reducer:{//configureStore have reducer, reducer can take a object has a input and inside the object you have to give a variable
        counter: counterSlice.reducer
    }
})

//old method for to manage state

// const store = configureStore({
//     reducer:{//configureStore have reducer, reducer can take a function has a input and inside the function you have to give a variable
//         counter: function(count=10,actions){//2 variables takes 1st state varialbe ans 2nd variable is actions,this state and actions ah combine panrathu tha reducer 
            
//             if(actions.type === "INC"){
//                 count = count+1
//             }if(actions.type === "DEC"){
//                 count = count-1
//             }

//             return count
//         }
//     }
// })

const {increment} = counterSlice.actions//here i destructure the increment actions
const {decrement} = counterSlice.actions

export default store

export {increment}
export {decrement}
 