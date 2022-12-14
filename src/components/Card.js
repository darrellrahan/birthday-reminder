import React, { useState } from "react";
import people from "../data";
import Person from "./Person";

const Card = () => {
  const [lists, setLists] = useState(people);

  return (
    <div className="card-container">
      <h1 className="title">{lists.length} Birthdays Today</h1>
      {lists.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          img={person.img}
          age={person.age}
        />
      ))}
      <button onClick={() => setLists(lists.length !== 0 ? [] : people)}>
        {lists.length !== 0 ? "Clear All" : "Refresh"}
      </button>
    </div>
  );
};

export default Card;
