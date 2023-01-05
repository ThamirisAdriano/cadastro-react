import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div className="container_header">
        <form>
          <a href="/create" className="container_header">Cadastro</a>
          <a href="/update" className="container_header">Edição</a>
        </form>
    </div>
  );
};

export default Header;
