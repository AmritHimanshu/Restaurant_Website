import React from 'react';

const Card = ({ name, designation, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Card;
