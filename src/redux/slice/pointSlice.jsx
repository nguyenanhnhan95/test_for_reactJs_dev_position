import { createSlice } from "@reduxjs/toolkit"

export const pointSlice = createSlice({
    name: 'counter',
    initialState: {
        points: [],
        pointSelected: null,
        statusGame: null,
        start: null
    },
    reducers: {
        initialPoints: (state, action) => {
            state.points = action.payload,
            state.pointSelected = null
        },
        changeStart: (state, action) => {
            state.start = action.payload
        },
        changeStatusGame: (state, action) => {
            state.statusGame = action.payload
        },
        removePoint: (state, action) => {
            const temp = state.points.filter(each => each.index !== action.payload.index);
            if (Array.isArray(temp) && temp.length === 0) {
                state.statusGame = true;
            }
            state.points = temp;
        },
        addPointSelected: (state, action) => {
            if (Array.isArray(state.pointSelected)) {
                state.pointSelected = [...state.pointSelected, action.payload]
            } else {
                state.pointSelected = [action.payload]
            }
        },
        hanldeAnimationPoint:(state,action)=>{
            if(Array.isArray(state.points) && state.statusGame!==false){
                let temp=[]
                for(const point of state.points){
                    if(point.index===action.payload){
                        let tempPoint={...point,animation:true}
                        temp.push(tempPoint);
                        continue;
                    }
                    temp.push(point)
                }
                state.points=temp;
            }
            
        }
    },
})
export const { initialPoints, changeStart, changeStatusGame, removePoint, addPointSelected,hanldeAnimationPoint } = pointSlice.actions