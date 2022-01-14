import React from "react";
import { Tag } from ".";

interface Props {
    handleRemoveTag: (index: number) => void;
    tags: Array<string>;
}

export const TagList: React.FC<Props> = ({ handleRemoveTag, tags }) => {


    return (
        <div className="tagList">

            {tags && tags.map((tag, i) => {
                return (
                    <Tag
                        key={i}
                        data={tag}
                        index={i}
                        handleRemoveTag={handleRemoveTag}
                    />
                )
            })}

        </div>

    )
}
