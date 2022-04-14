import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, {  } from "react";
import Home from "./components/Home";



function App() {
  const [quote, setQuote] = React.useState({});
  function getNewQuote()  {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(response => response.data[0])
    .then(function (singleQuoteObj) {setQuote(singleQuoteObj)});
  }
  
  
  React.useEffect(getNewQuote,  []
  );

  return (
    <div className="App">
      <button onClick={getNewQuote}>Next Quote</button>
      <Home {...quote} setQuote={setQuote} />
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import React, { useEffect }  from 'react';
// import Home from './components/Home';

// function App() {

//   // useEffect(
//   // () => {
//   // axios
//   //   .get("https://simpsons-quotes-api.herokuapp.com/quotes")
//   //   .then(response => response.data[0])
//   //   .then(function (singleQuoteObj) {setQuote(singleQuoteObj)});
//   // },
//   // []
//   // );

//   return (
//     <div className="App">
//       <Home />
//       {/* <img src={quote.image} alt={quote.character}></img>
//       <p>{quote.quote}</p>
//       <h3>{quote.character}</h3> */}
//     </div>
//   );
// }

// export default App;
