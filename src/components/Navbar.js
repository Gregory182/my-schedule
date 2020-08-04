import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './Auth';
import { auth } from '../services/firebase';

const Nav = styled.nav`
  height: 70px;
  border-bottom: 2px solid #666;
  width: 100%;
  margin-bottom: 2rem;

  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 0px 50px;
    
    .left{
      flex:2;
    }
    .right{
      flex:1;
    }

    .link {
      text-decoration: none;
      padding: 0.5rem 1.2rem;
      color: black;
      /* border: 1px solid #666; */
      border-radius: 5px;
      box-shadow: -3px 6px 13px 0px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
      cursor: pointer;

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
  console.log(testUser);
  return (
    <Nav>
      <div className='nav-container'>
        <div className="left">
        {testUser && testUser.roles.creator === true && (
          <>
              <Link to='/create-schedule' className='link'>
                Tworzenie grafiku
              </Link>
          </>
        )}
        </div>
        <div className="right">
          {testUser && (
            <div className='link' onClick={() => logout()}>
              Wyloguj {testUser.firstName}
            </div>)}
        </div>



      </div>
    </Nav>
  );
};

export default Navbar;
