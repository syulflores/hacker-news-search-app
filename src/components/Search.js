import React, {useState, useEffect} from "react";
//import { getSearch } from "../services/hnApi";
import '../App.css';
import axios from "axios";


export const getSearch = async (search) => {
    const result = await axios.get("http://hn.algolia.com/api/v1/search?query=" + search);
  
    return result.data;
  }
  

export const Search = () => {
    const [search, setSearch] = useState({});

    useEffect (() => {
        getSearch(search).then(data => setSearch(data));
    }, [])

    return (
        <div>
            <input value={search} placeholder="Search hacker news" onInput={data => setSearch(data.target.value)} type="text"></input>
            <div>{JSON.stringify(search)}</div>
        </div>
    )
};

export default Search;