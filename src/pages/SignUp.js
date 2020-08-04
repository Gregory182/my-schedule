import React, { useState, useContext } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/Button';
import LoginForm  from '../components/styled/StyledLoginForm'
import { useHistory, Redirect, withRouter, Link } from 'react-router-dom';
import { auth, firestore } from '../services/firebase';
import { AuthContext } from '../components/Auth';


const SignUp = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const newUser = await auth().createUserWithEmailAndPassword(user.email, user.password);
      const userData ={
        id: newUser.user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roles:  {user : true, creator:false, admin:false}
      }
      console.log(newUser.user.uid)
      await firestore.collection('users').add(userData)
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
      <h2>Zarejestruj się</h2>
      <form onSubmit={(e) => signUp(e)}>
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
           <Input
            name="firstName"
            type="text"
            text="Imię"
            onChange={(e) => onChangeHandler(e)}
          />
           <Input
            name="lastName"
            type="text"
            text="Nazwisko"
            onChange={(e) => onChangeHandler(e)}
          />
          <Button>Załóż konto</Button>
        </div>
      </form>
      <div className="redirect">
        Masz już konto? Zaloguj się <Link to='/'>tutaj</Link>
      </div>
    </LoginForm>
  );
};

export default withRouter(SignUp);
