import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
const AllPokemon = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokeData, setData] = useState([]);
    const [pokeType, setType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
            const res = await axios.get(url);
            for (let i = 0; i <= res.data.results.length; i++){

                let name = res.data.results[i].name;

                const urlAll = `https://pokeapi.co/api/v2/pokemon/${name}`;
                const resAll = await axios.get(urlAll);
                console.log("Name: " + resAll.data.name +
                    ", Height: " + Math.round(resAll.data.height * 3.9) +
                    ", Weight: " + Math.round(resAll.data.weight / 4.3))

                    // let PokemonName = resAll.data.data.results.name;
                    // let PokemonWeight = Math.round(resAll.data.results[i].weight / 4.3);
                    // let PokemonType = resAll.data.results[i].type;
                    // let PokemonIdNumber = resAll.data.results[i].id;
                    // let PokemonHeight = Math.round(resAll.data.results[i].height* 3.9);
                    // console.log(PokemonName ,PokemonWeight, PokemonHeight, PokemonType, PokemonIdNumber)
                    //     console.log(PokemonName)
                // console.log(name, resAll.data.type)

                // console.log(resAll.data)
            }
            // console.log(res)
        } catch (e) {
            console.log(e)
        }
    };
    useEffect(() => {
        getPokemon();
    }, []);
    return (
        <div className="App">
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <label>*/}
            {/*        <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name"/>*/}
            {/*    </label>*/}
            {/*</form>*/}

            {/*{pokeData.map((data) => {*/}
            {/*    return (*/}
            {/*        <div className="container">*/}
            {/*            <img src={data.sprites["front_default"]}/>*/}
            {/*            <div className="divTable">*/}
            {/*                <div className="divTableBody"></div>*/}

            {/*                <div className="divTableRow">*/}
            {/*                    <div className="divTableCell">Type</div>*/}
            {/*                    <div className="divTableCell">{pokeType.toUpperCase()}</div>*/}
            {/*                </div>*/}

            {/*                <div className="divTableRow">*/}
            {/*                    <div className="divTableCell">Height</div>*/}
            {/*                    <div className="divTableCell">{" "}{Math.round(data.height * 3.9)} "</div>*/}
            {/*                </div>*/}

            {/*                <div className="divTableRow">*/}
            {/*                    <div className="divTableCell">Weight</div>*/}
            {/*                    <div className="divTableCell">{" "}{Math.round(data.weight / 4.3)} lbs</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
};
export default AllPokemon;
