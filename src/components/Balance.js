
import './Balance.css'

const Balance = ({ balance}) => {
  



    
  return (
    <div className="container">
        
        <h4>Your balance</h4>
        <h1>${isNaN(balance)? '0' : balance}</h1>
        
    </div>
        
   
  )
}

export default Balance