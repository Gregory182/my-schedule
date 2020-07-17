import styled from 'styled-components';

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 250px;
  padding: 30px 0 30px 0;
  border: 2px solid black;
  border-radius: 5px;
  margin: 100px 0 20px 0;
  box-shadow: -7px 3px 23px 0px rgba(0, 0, 0, 0.28);

  Button {
    margin-top: 20px;
  }

  .redirect {
    margin-top: 20px;
    color: #333;
  }
`;

export default LoginForm;
