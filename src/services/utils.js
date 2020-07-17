function isAuth(){
  let isLogged = localStorage.getItem('isAuth');
  
  return isLogged;

}

export default isAuth;