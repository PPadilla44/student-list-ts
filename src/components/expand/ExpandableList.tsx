import React from "react";

interface Props {
    grades: Array<string>;
    isExpanded: boolean;
}

export const ExpandableList: React.FC<Props> = ({ grades, isExpanded }) => {


    return (
        //Shows list of grades if ExpandBtn is clicked (isExpanded is true)
        <div className={`expanded ${isExpanded && "slideDown"}`} >


            {grades.map((grade, i) => {
                return (
                    <p key={i}>{`Test ${i + 1}:`} &emsp; {`${grade}%`}</p>
                )
            })
            }
        </div>
    )
}