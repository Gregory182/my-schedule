import React, { useState, useContext } from 'react';
import { useHistory, Redirect, withRouter, Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { AuthContext } from '../components/Auth';

import LoginForm  from '../components/styled/StyledLoginForm'
import Input from '../components/ui/Input';
import Button from '../components/Button';

const Login = () => {

  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth().signInWithEmailAndPassword(user.email, user.password);
      history.push('/schedule');
    } catch (error) {
      console.log(error.message);
    }
  };


  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/schedule" />;
  }

  return (
    <LoginForm>
      <h2>Zaloguj się</h2>
      <form onSubmit={(e) => signIn(e)}>
        <div className="form">
          <Input
            name="email"
            type="email"
            text="Email"
            onChange={(e) => onChangeHandler(e)}
          />

          <Input
            name="password"
            type="password"
            text="Hasło"
            onChange={(e) => onChangeHandler(e)}
          />
          <Button>Zaloguj</Button>
        </div>
      </form>
      <div className="redirect">
        Nie masz jeszcze konta? kliknij <Link to='/register' class="link">tutaj</Link>
      </div>
    </LoginForm>
  );
};

export default withRouter(Login);
