import React,{useState,useContext} from 'react'
import { GlobalContext } from './GlobalContext'

// }
const AddTransaction = () => {
    const [desc,setdesc]=useState("")
    const [amount,setamount]=useState("")
    const {add}=useContext(GlobalContext)
const submit=(e: React.FormEvent)=>{
e.preventDefault()
if(desc===""||amount===""){
  alert("please enter a Description and amount")}
  else{
    const newData={
      id:new Date().getTime(),
      desc:desc,
      amount:+amount
    }
      add(newData)
      setamount('')
      setdesc('')
  }

}

  return (
    <div className='addtransaction'>
   <span>AddTransaction</span>
   <hr />
   <form onSubmit={submit}>
      <label htmlFor="desc">Description</label>
      <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter Description here"/>
      <label htmlFor="desc">Amount</label>
      <input type="number" value={amount}  onChange={(e)=>{setamount(e.target.value)}}  
      placeholder="Expence must be contain{-}sign"/>
       <button>Submit</button>
   </form>
  </div>
  )
}

export default AddTransaction