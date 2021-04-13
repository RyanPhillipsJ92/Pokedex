import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
const SearchPokemon = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokeData, setData] = useState([]);
    const [pokeType, setType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setType(res.data.types[0].type.name)
            setData(toArray)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name"/>
                </label>
            </form>

            {pokeData.map((data) => {
                return (
                    <div className="container">
                        <img src={data.sprites["front_default"]}/>
                        <div className="divTable">
                            <div className="divTableBody"></div>

                            <div className="divTableRow">
                                <div className="divTableCell">Type</div>
                                <div className="divTableCell">{pokeType.toUpperCase()}</div>
                            </div>

                            <div className="divTableRow">
                                <div className="divTableCell">Height</div>
                                <div className="divTableCell">{" "}{Math.round(data.height * 3.9)} "</div>
                            </div>

                            <div className="divTableRow">
                                <div className="divTableCell">Weight</div>
                                <div className="divTableCell">{" "}{Math.round(data.weight / 4.3)} lbs</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default SearchPokemon;
