import React from 'react';
import { Student } from '.';
import {Data} from "../../Interfaces"



interface Props {
    students: Array<Data>;
    handleAddTag: (tag: string, id: string) => void;
    handleRemoveTag: (index: number, id: string) => void;
}

export const StudentList: React.FC<Props> = ({ students, handleAddTag, handleRemoveTag }) => {


    if (students.length > 0) {

        return (
            <div>

                {students.map((student, i) => {
                    return (
                        <Student
                            key={i}
                            data={student}
                            handleAddTag={handleAddTag}
                            handleRemoveTag={handleRemoveTag}
                        />
                    )
                })}

            </div>

        )

    } else {
        return <h1 style={{ textAlign: "center" }}>No results found</h1>
    }
}
