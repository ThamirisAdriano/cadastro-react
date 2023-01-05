import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://apibirthday.onrender.com/user`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let { id, nickname, birthday } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nickname", nickname);
    localStorage.setItem("Birthday", birthday);
  };

  const getData = () => {
    axios.get(`https://apibirthday.onrender.com/user`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://apibirthday.onrender.com/user/${id}`).then(() => {
      // Swal.fire("Paciente deletado", "", "success");
      getData();
    });
  };

  return (
    <div className="form-style">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Aniversário</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.nickname}</Table.Cell>
                <Table.Cell>{data.birthday}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button
                    style={{
                      color: "#fff",
                      width: "12rem",
                      backgroundColor: "red",
                      boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
                    }}
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
