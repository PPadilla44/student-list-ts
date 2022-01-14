import './App.css';
import React, { useState, useEffect } from 'react';
import { Main } from './views/Main';
import { Data } from './Interfaces';

export const App: React.FC = () => {

  const [students, setStudents] = useState<Array<Data>>(JSON.parse(localStorage.getItem("Students") || "") || []);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  
  // Fetch list of students and maps them in array as objects with tags if not in localstorage
  useEffect( () => {

    if (students.length < 1) {

      fetch(`https://api.hatchways.io/assessment/students`)
        .then(res => res.json())
        .then(data => {
          setStudents(data.students.map((data: Object) => ({ student: data, tags: [] })))
          setIsLoaded(true)
        })
        .catch(err => console.log(err))

    } else {

      localStorage.setItem("Students", JSON.stringify(students))
      if (!isLoaded) {
        setIsLoaded(true)
      }

    }



  }, [students, isLoaded])


  return (
    <div className="App" >
      <Main 
        isLoaded={isLoaded}
        setStudents={setStudents}
        students={students}
      />
    </div>
  );
}