import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{
    userid: string;
    task: string;  
    completed: string; // value is T or F
}

export interface TodoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addRequest(state: TodoState, payload){
            alert('진행 2 리듀서 내부 : ' + JSON.stringify(payload)) 
            state.loading = true; 
        },
        addSuccess(state: TodoState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        addFailure(state: TodoState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})

const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer