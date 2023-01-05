import "./App.css";
import Create from "./components/Create/create";
import Read from "./components/Read/read";
import Update from "./components/Update/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header/header";

function App() {
  return (
    
    <body style={{
      backgroundImage: `url(https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundSize:'cover',
      
      width: '100vw',
      height: '100vh'
    }}>
      <Container>
      <Header></Header>
    
    <Router>
      
      <Routes>
      
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
    </Container>
    </body>
  );
}

export default App;
