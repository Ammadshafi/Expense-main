import React,{useContext} from 'react'
import {GlobalContext} from './GlobalContext';
import {transictionType } from "../types/TransictionTypes";

const Balance = () => {
const {transiction} = useContext(GlobalContext)
const transictionAmount=transiction.map((transic:transictionType)=>transic.amount)
const Income=transictionAmount.filter((transic:Number)=>transic>0).reduce((acc:any ,transic:any)=>(acc+=transic),0).toFixed(0)
const Expence=transictionAmount.filter((transic:Number)=>transic<0).reduce((acc:any ,transic:any)=>(acc+=transic),0).toFixed(0)

  return (
    <div className='balance'>
        <div className="income">
            <h3>Income</h3>
            <span >{Income}</span>
        </div>
        <div className="expence">
            <h3>Expence</h3>
            <span>{Expence}</span>
        </div>
    </div>
  )
}

export default Balance