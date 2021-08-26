/* eslint-disable no-undef */
import { useState } from 'react';
import user from '../mocks/user.json';

const useSession = () => {
  const [sessionUser, setSessionUser] = useState(() => {
    const item = window.localStorage.getItem('username');
    return item ? JSON.parse(item) : null;
  });

  const setUser = (username, password, setOpenModal) => {
    if (username === user.username && password === user.password) {
      setSessionUser(username);
      window.localStorage.setItem('username', JSON.stringify(username));
      // console.log(sessionUser)
      // console.log(window.localStorage.getItem('username'))
      // if(sessionUser){
      //   setOpenModal(false);
      // }
    }
  };

  const unsetUser = () => {
    setSessionUser(null);
    window.localStorage.removeItem('username');
  };

  return [sessionUser, setUser, unsetUser];
};

export default useSession;
