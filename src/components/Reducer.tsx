import {transictionType } from "../types/TransictionTypes";

export const AppReducer=(state:any,action:any)=>{
    switch (action.type) {
      case 'Delete':
            return{
                ...state,
                transiction:state.transiction
                .filter((cur:transictionType)=>cur.id !== action.payload)
}
            case 'Add':
                return{
                    ...state,
                    transiction:[action.payload,...state.transiction]
                    }
    }
}
