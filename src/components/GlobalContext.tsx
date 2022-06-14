import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Reducer";
import { initalStateType } from "../types/TransictionTypes";
import {transictionType } from "../types/TransictionTypes";
import { ReactNode } from "react";

const initailstate:initalStateType|any={ transiction: [] };

export const GlobalContext = createContext(initailstate);
type Props={
  children:ReactNode
}
export const GlobalProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(AppReducer, initailstate);
  function del(id:Number):void {
    dispatch({ type: "Delete", payload: id });
  }
  function add(transition:transictionType):void {
    dispatch({ type: "Add", payload: transition });
  }
  return (
    <GlobalContext.Provider
      value={{
        transiction: state.transiction,
        add,
        del,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
