import React, { useState } from 'react';
import { Data } from '../Interfaces';
import { StudentList } from '../components/student';
import { Input, LoadingSpinner } from '../components/UI';

interface Props {
    students: Array<Data>;
    setStudents: React.Dispatch<React.SetStateAction<Data[]>>;
    isLoaded: boolean;
}

export const Main: React.FC<Props> = ({ isLoaded, setStudents, students }) => {

    const [searchName, setSearchName] = useState<string>("");
    const [searchTag, setSearchTag] = useState<string>("");

    const handleAddTag = (tag:string, id:string) => {
        const temp : Array<Data> = students.map((student) => id === student.student.id ? {student:student.student, tags:[...student.tags, tag]  } : student)
        setStudents(temp)
    }

    const handleRemoveTag = (index: number, id: string) => {
        let temp = students.map((student) => id === student.student.id ? { student:student.student, tags: [...student.tags.slice(0,index), ...student.tags.slice(index+1)] } : student);
        setStudents(temp)
    }

    const handleSearch = () => {

        let filtered = students;

        // Filter students if searchName is inputted
        if (searchName.length >= 1) {

            filtered = filtered.filter(
                ({ student }) => (`${student.firstName} ${student.lastName}`).toLowerCase().indexOf(searchName.trim().toLowerCase()) > -1
            )
        }

        // Filter students if searchTag is inputted
        if (searchTag.length >= 1) {

            let tagsFiltered: Array<Data> = [];

            for (const s of filtered) {
                for (const t of s.tags) {
                    if (t.toLowerCase().indexOf(searchTag.trim().toLowerCase()) > -1) {
                        if (!tagsFiltered.includes(s)) {
                            tagsFiltered.push(s)
                        }
                    }
                }
            }
            filtered = tagsFiltered;

        }

        return filtered

    }


    return (
        <div className="studentList" >
            <button onClick={() => { setSearchName(""); setSearchTag("") }} className="clearBtn" >Clear Search</button>
            <div className="students">
                <Input
                    placeHolder={'Search by name'}
                    searchValue={searchName}
                    setSearchValue={setSearchName}
                />

                <Input
                    placeHolder="Search by tag"
                    searchValue={searchTag}
                    setSearchValue={setSearchTag}
                />


                {
                    isLoaded ?

                        searchName.length > 0 || searchTag.length > 0 ?

                            // Filtered Student List
                            <StudentList
                                students={handleSearch()}
                            handleAddTag={handleAddTag}
                            handleRemoveTag={handleRemoveTag}
                            />

                            :

                            // Full Student List
                            <StudentList
                            students={students}
                            handleAddTag={handleAddTag}
                            handleRemoveTag={handleRemoveTag}
                            />
                        :
                        <LoadingSpinner asOverlay={true}/>
                }

            </div>
        </div>
    );
}