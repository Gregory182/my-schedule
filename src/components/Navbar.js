import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from './Auth';
import { auth } from '../services/firebase';

const Nav = styled.nav`
  height: 70px;
  border-bottom: 2px solid #666;
  width: 100%;
  margin-bottom: 2rem;

  .container {
    width: 95%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;

    .link {
      text-decoration: none;
      padding: 0.5rem 1.2rem;
      color: black;
      border: 1px solid #666;
      border-radius: 5px;
      box-shadow: -1px 2px 13px 0px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
      cursor:pointer;

      :hover {
        background-color: #666;
        color: #fff;
        border-color: #fff;
      }
    }
  }
`;

const Navbar = () => {
  const logout = () => {
    auth().signOut();
    localStorage.setItem('isAuth', false);
  };


  const { testUser } = useContext(AuthContext);
  console.log(testUser)
  return (
    <Nav>
      <div className="container">
        {/* <Link to="/" className="link">
           {loggedUser}: Prośby
        </Link> */}

        {!!testUser ? (
          <div className="link" onClick={() => logout()}>
            Wyloguj {testUser.firstName}
          </div>
        ) : (
          ''
        )}


      </div>
    </Nav>
  );
};

export default Navbar;
