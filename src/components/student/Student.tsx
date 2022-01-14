import React, { useState } from 'react';
import { Input } from '../UI';
import { Data } from "../../Interfaces"
import { ExpandBtn, ExpandableList } from '../expand';
import { TagList } from "../tags";

interface Props {
    data: Data;
    handleAddTag: (tag: string, id: string) => void;
    handleRemoveTag: (index: number, id: string) => void;
}

export const Student: React.FC<Props> = ({ data, handleAddTag, handleRemoveTag }) => {

    const { student, tags } = data;

    const [tagInput, setTagInput] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const calcAverage = (grades: Array<string>) => {

        let total: number = 0;

        for (let numStr of grades) {
            let num = parseInt(numStr)
            total += num / 1;
        }
        return total / grades.length

    }

    const handleSubmitTag = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (tagInput.trim().length > 0) {

            handleAddTag(tagInput, student.id)
            setTagInput("")

        }

    }
    const handleDeleteTag = (index: number) => {
        handleRemoveTag(index, student.id)
    }

    return (

        <div className="student">
            <div className="studentImg">
                <img src={student.pic} alt="Student" />
            </div>
            <div className="studentData">
                <div className="title">
                    <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>

                    <ExpandBtn
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}
                    />

                </div>
                <div className="studentDetails">
                    <p>Email: {student.email}</p>
                    <p>Company: {student.company}</p>
                    <p>Skill: {student.skill}</p>
                    <p>Average: {calcAverage(student.grades)}%</p>

                    <ExpandableList
                        isExpanded={isExpanded}
                        grades={student.grades}
                    />

                    <TagList
                        handleRemoveTag={handleDeleteTag}
                        tags={tags}
                    />

                    <form onSubmit={(e) => handleSubmitTag(e)}>

                        <Input
                            placeHolder="Add a tag"
                            searchValue={tagInput}
                            setSearchValue={setTagInput}
                        />

                    </form>


                </div>
            </div>
        </div>

    )
}
