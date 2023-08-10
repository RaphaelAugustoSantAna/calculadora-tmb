import React, { useState } from "react";

const TbmForm = ({ gender }) => {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("1.2");

  const handleSubmit = (event) => {
    event.preventDefault();
    const tmb =
      gender === "homem"
        ? 88.36 + 13.4 * peso + 4.8 * altura - 5.7 * idade
        : 447.6 + 9.2 * peso + 3.1 * altura - 4.3 * idade;

    const taxaMetabolicaBasal = tmb * nivelAtividade;
    alert(
      `Sua Taxa Metabólica Basal é: ${taxaMetabolicaBasal.toFixed(
        2
      )} calorias/dia`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="idade">Idade:</label>
      <input
        type="number"
        id="idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <br />

      <label htmlFor="peso">Peso (em kg):</label>
      <input
        type="number"
        id="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        required
      />
      <br />

      <label htmlFor="altura">Altura (em cm):</label>
      <input
        type="number"
        id="altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        required
      />
      <br />

      <label htmlFor="nivelAtividade">Nivel de Atividade:</label>
      <select
        id="nivelAtividade"
        value={nivelAtividade}
        onChange={(e) => setNivelAtividade(e.target.value)}
        required
      >
        <option value="1.2">Sedentário (pouco ou nenhum exercício)</option>
        <option value="1.375">
          Levemente ativo (exercício leve/esporádico)
        </option>
        <option value="1.55">
          Moderadamente ativo (exercício moderado/3-4 vezes por semana)
        </option>
        <option value="1.725">
          Muito ativo (exercício pesado/6-7 vezes por semana)
        </option>
        <option value="1.9">
          Extremamente ativo (exercício muito pesado/dia inteiro)
        </option>
      </select>
      <br />
      <input type="submit" value="Calcular TMB" />
    </form>
  );
};

export default TbmForm;
