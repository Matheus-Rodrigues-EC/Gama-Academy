import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Cursos = require("../../Data/database");

function VerCursos() {
  const [search, setSearch] = useState(true);

  //let form = document.getElementById('formulario');
  //let idCurso = document.getElementById('#busca');

  //const Curso = Cursos.filter((curso) => {curso.id} )

  function CursosList(props) {
    const Cursos = props.Cursos;
    const listItems = Cursos.map((curso) =>
      <li>{curso}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const listCursos = Cursos.map((curso) =>
  <li>{curso}</li>
  );

  return (
    <Container>
      {search ? (
        <form id="formulario">
          <h1>Ver Cursos</h1>
          <hr />
          <input
            type="text"
            id="busca"
            name="busca"
            placeholder="Digite o ID do curso"
          ></input>
          <input
            type="submit"
            value="enviar"
            onClick={() => {setSearch(!search)}}
          />
          <Link to="/consulta">Voltar</Link>
        </form>
      ) : (
        <form>
          <h1>Ver Cursos</h1>
          <hr />

          <button onClick={() => setSearch(!search)}>Voltar</button>
        </form>
      )}
    </Container>
  );
}

export default VerCursos;
