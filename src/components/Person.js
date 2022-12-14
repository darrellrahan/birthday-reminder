import React from "react";

const Person = (prop) => {
  return (
    <div className="person-container">
      <img src={prop.img} />
      <div>
        <h3>{prop.name}</h3>
        <p>{prop.age} years</p>
      </div>
    </div>
  );
};

export default Person;
