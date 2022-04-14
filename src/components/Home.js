import axios from "axios";
import React from "react";


function Home(props) {

  return (
    <div>
      <img src={props.image} alt={props.character}></img>
      <p>{props.quote}</p>
      <h3>{props.character}</h3>
    </div>
  );
}

export default Home;
// import axios from "axios";
// import React from "react";

// function Home() {
//   const [quote, setQuote] = React.useState({});

//   useEffect(() => {
//     axios
//       .get("https://simpsons-quotes-api.herokuapp.com/quotes")
//       .then((response) => response.data[0])
//       .then(function (singleQuoteObj) {
//         setQuote(singleQuoteObj);
//       });
//   }, []);
//   return (
//     <div>
//       <img src={quote.image} alt={quote.character}></img>
//       <p>{quote.quote}</p>
//       <h3>{quote.character}</h3>
//     </div>
//   );
// }

// export default Home;
