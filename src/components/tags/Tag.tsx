import React from "react";

interface Props {
    data: string;
    handleRemoveTag: (index: number) => void;
    index: number;
}

export const Tag : React.FC<Props> = ({ data: tag, handleRemoveTag, index}) => {



    return (

        <div className="tag">
            <p className="closeBtn" onClick={() => handleRemoveTag(index)}>x</p>
            <h4>{tag}</h4>
        </div>

    )
}