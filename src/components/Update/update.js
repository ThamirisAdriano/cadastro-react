import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Update() {
  let navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [id, setID] = useState(null);
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNickname(localStorage.getItem("Name"));
    setBirthday(localStorage.getItem("Birthday"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://apibirthday.onrender.com/user/`, {
        nickname,
        birthday,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <Form className="form-style">
        <Form.Field>
          <label>Nome</label>
          <input
            placeholder="Nome"
            onChange={(e) => setNickname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Data de Nascimento</label>
          <input
            placeholder="Data de Nascimento"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          
        </Form.Field>
        <Button
          type="submit"
          style={{
            margin: "12px 12rem",
            padding: "10px",
            color: "#fff",
            width: "12rem",
            backgroundColor: "#1A1A1A",
            boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
          }}
        >
            Update
        </Button>
      </Form>
    </div>
  );
}
