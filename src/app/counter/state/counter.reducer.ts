import { Action, createReducer, on } from "@ngrx/store";
import { CounterState, initialState } from "./counter.state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { state } from "@angular/animations";

const _counterReducer = createReducer(initialState,on(increment,(state)=>{
    return {
        ...state,
        counter:state.counter + 1
    }
}),on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter-1
    }
}),on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
}),on(customIncrement,(state,action)=>{
    return{
        ...state,
        counter:state.counter + action.value
    }
}),
on(changeChannelName,state=>{
    return{
        ...state,
        channelName:'Modified Hello Everyone'
    }
})
)
export function counterReducer(state: CounterState | undefined, action: Action<string>){
    return  _counterReducer(state,action);
}