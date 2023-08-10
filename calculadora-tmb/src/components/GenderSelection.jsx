import React from "react";

const GenderSelection = ({ onSelectGender }) => {
  return (
    <div>
      <h1>Escolha o sexo</h1>
      <button onClick={() => onSelectGender("homem")}>Homem</button>
      <button onClick={() => onSelectGender("mulher")}>Mulher</button>
    </div>
  );
};

export default GenderSelection;
