import logo from './logo.svg';
import './App.css';

function App(){const intialPrice = 100;
  function negotiate(offer){
    if(offer<initialPrice *0.8){
      return 'Too low!Try $${initialPrice *0.9}.';

    }
    return "Deal accepted!";
  }
  return(
    <div>
      <h1>EduMarket</h1>
      <p>{negotiate(80)}</p>
    </div>
  );

}
export default App;