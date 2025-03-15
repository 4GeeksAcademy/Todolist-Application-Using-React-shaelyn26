import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [choresArray, setChoresArray] = useState([
    "Walk my dogs",
    "Do my homework",
    "Wash the dishes",
    "Clean the house",
    "Wash the car",
  ]);

  const deleteToDo = (itemToDelete) => {
    const result = choresArray.filter((item) => item != itemToDelete);
    setChoresArray(result);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>To-Do List</h1>
      </div>
      <ul>
        {choresArray.map((item) => {
          return (
            <div className="list d-flex mx-auto">
              {item}
              <span className="delete-btn mx-2" onClick={() => deleteToDo(item)} onMouseOver={(e) => e.target.choresArray = "hover"}>
                x
              </span>
            </div>
          );
        })}
      </ul>
      <input className="text d-flex mx-auto"
      type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
          const newChoreArray = [...choresArray,e.target.value]
            setChoresArray(newChoreArray)
          }
        }}
      />
    </div>
  );
};

export default Home;
