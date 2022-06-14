import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'
import {transictionType } from "../types/TransictionTypes";

const Total = () => {
    const {transiction}=useContext(GlobalContext)
  const totalAmount= transiction.map((trans:transictionType)=>trans.amount).reduce((acc: any,trans: any)=>(acc+=trans),0)
  return (
    <div className='total'>
        <h3>Current Amount</h3>
        <h2>{totalAmount}</h2>
    </div>
  )
}

export default Total