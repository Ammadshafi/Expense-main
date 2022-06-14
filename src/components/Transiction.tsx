import React,{useContext} from 'react'
import {GlobalContext}from './GlobalContext';
import {transictionType } from "../types/TransictionTypes";
type props={
transic:transictionType,
// key:Number
}
const Transiction = ({transic}:props) => {
    const {del} = useContext(GlobalContext)
    const classtype:string=transic.amount>0 ? 'inc' : 'exp';
    const amount:string=(transic.amount).toString()
  return (

    <li className={classtype}><span>{transic.desc}</span>
    <span>{amount}</span>
    <button onClick={()=>del(transic.id)}>Delete</button>
    </li>
  )
}

export default Transiction