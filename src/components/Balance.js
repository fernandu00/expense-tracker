
import './Balance.css'

const Balance = ({income, expense, balance, setBalance}) => {
   
  
    
  return (
    <div className="container">
        <h2>{balance}</h2>
        <h4>Your balance</h4>
        <h1>${isNaN(balance)? '0' : balance}</h1>
        
    </div>
        
   
  )
}

export default Balance