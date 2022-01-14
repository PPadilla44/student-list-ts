import React from "react";

interface Props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string;
}

export const Input : React.FC<Props> = ({ searchValue, setSearchValue, placeHolder }) => {



    return(
        <input 
        type="text"
        className="search"
        placeholder={placeHolder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        />
    )
}