import React from 'react';
import ReactDOM from 'react-dom';
import {Header, ncards, Footer} from './components/App1/App0106'
import './components/App1/names'
import './components/App1/style.css'
import card_data from './components/App1/data'

// import names from './components/App1/names';

// const cssStyle = {
//   backgroundColor: 'red',
// }
//render('what to show', where to show)
//render(this is jsx, )
ReactDOM.render(
  <>
  {/* {names.map(allNames)} */}
  <Header />
  <div className = "card">
    {card_data.map(ncards)}
  </div>
  <Footer />
  </>,
  document.getElementById("root")
);
