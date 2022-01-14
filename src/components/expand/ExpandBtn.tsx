import React from "react";

interface Props {
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExpandBtn: React.FC<Props> = ({isExpanded, setIsExpanded}) => {


    return (

        <button onClick={() => setIsExpanded(!isExpanded)} className="expandBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                {
                    isExpanded ?
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        :
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                }
            </svg>
        </button>

    )
}