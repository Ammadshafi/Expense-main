import React,{useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionHistory from './components/TransactionHistory'
import Total from './components/Total'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from"./components/GlobalContext"
import {configureMessaging} from './Firebase'


function App() {
  useEffect(() => {
    configureMessaging()
  }, [])
  
  return (
 <GlobalProvider>
<div className="container">
<Header/>
<Total/>
<Balance/>
<TransactionHistory/>
<AddTransaction/>
</div>
</GlobalProvider>
  );
}

export default App;
