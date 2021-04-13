import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPokemon from './SearchPokemon';
import reportWebVitals from './reportWebVitals';
import AllPokemon from "./AllPokemon";

ReactDOM.render(
  <React.StrictMode>
    <SearchPokemon />
  </React.StrictMode>,
  document.getElementById('SearchedPokemon')
);
ReactDOM.render(
    <React.StrictMode>
        <AllPokemon />
    </React.StrictMode>,
    document.getElementById('AllPokemon')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
