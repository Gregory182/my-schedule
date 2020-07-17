import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../services/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [testUser, setTestUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    if(!!currentUser){
      getUser();
    } else{
      setTestUser(null)
    }
  }, [currentUser]);

  const checkAuth = async () => {
    await auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  };
  const getUser = async () => {
    const temp = await firestore
      .collection('users')
      .where('id', '==', currentUser.uid)
      .get();
    setTestUser(temp.docs[0].data())
  };

  if (isLoading) {
    return <> Loading..... </>;
  }

  return (
    <AuthContext.Provider value={{ testUser, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
