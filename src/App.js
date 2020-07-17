import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

import MyDays from './pages/MyDays';

import styled from 'styled-components';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

import PrivateRoute from './components/hoc/PrivateRoute';
import { AuthProvider } from './components/Auth';

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
`;

function App() {
  return (
    <MainWrapper>
      <AuthProvider>
        <Router>
          <Navbar  />

          <PrivateRoute
            path="/schedule"
            component={MyDays}
          />
          <Route exact path="/"  component={Login} />
          <Route exact path="/register"  component={SignIn} />

        </Router>
      </AuthProvider>
    </MainWrapper>

    // <div className="App">
    //   <main className="flexbox">
    //     {/* <h1>Willkomen</h1> */}
    //     <MyDays/>

    //     {/* <Board id="board-1" className="board">
    //       <Card id="card-1" className="card" draggable="true">
    //         <p>Card One</p>
    //       </Card>
    //     </Board>
    //     <Board id="board-2" className="board">
    //       <Card id="card-2" className="card" draggable="true">
    //         <p>Card two</p>
    //       </Card>
    //       <Card id="card-3" className="card" draggable="true">
    //         <p>Card three</p>
    //       </Card>
    //     </Board> */}
    //   </main>
    // </div>
  );
}

export default App;
