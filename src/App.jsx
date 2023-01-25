import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: " ",
  });
  // SETANDO E CRIANDO UM NOVO OBJETO
  const handleChange = (event) => {
    console.log(event);
    //DISMENBRANDO EVENT
    const { name, value } = event.target;

    setData((prev) => {
      // ATULIZANDO O OBJETO
      const newData = { ...prev, [name]: value };

      return newData;
      //RENDERIZANDO O OBJETO ATUALIZADO
    });
  };
  // CALCULO DE VALIDAÇÃO DO FORMULARIO + BARRA DE PROGRESSO
  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        value += amountToAdd;
      }
      value += amountToAdd;
    }

    if (data.email) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(data.email)) {
        value += amountToAdd;
      }
    }

    if (data.maritalStatus) {
      value += amountToAdd;
    }

    if (data.genre) {
      value += amountToAdd;
    }

    return value;
  };
  calculateProgress();

  // FUNÇÃO DO BOTÃO SUBMIT
  const handleClick = () => {
    alert("formulario enviado com sucesso");
    setData({
      fullName: "",
      email: "",
      maritalStatus: "",
      genre: "",
    });
  };

  // HTML
  return (
    <div className="App">
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div
            className="bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input name={"email"} value={data.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value="masculino"
                onChange={handleChange}
                checked={data.genre === "masculino"}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value="feminino"
                onChange={handleChange}
                checked={data.genre === "feminino"}
              />{" "}
              Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== 125}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
