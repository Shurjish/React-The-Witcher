import React,{ useState, useEffect, createContext} from "react";


export const Context = createContext();

const BASEURL = "https://api-the-witcher.vercel.app";

export const ContextProvider =({ children }) => {

    const [characters, setCharacters] = useState([]);
    
  useEffect(() => {
    
    const getCharacters = async () => {
        const charactersAPI = await fetch(`${BASEURL}/characters`);
        const charactersJSON = await charactersAPI.json();
        setCharacters(charactersJSON);
        
        
    };
    getCharacters();
  }, []);



  return (
    <Context.Provider value={{ characters }}>
      {children}
    </Context.Provider>
  );    
}