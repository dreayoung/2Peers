import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import TwoPeersContext from './TwoPeersContext';

function TwoPeersProvider({ children }) {
  console.log(children);
  const [toggleModal, displaySwitch] = useState(null);
  const [data, setData] = useState({});
  const [files, setFile] = useState([]);

  useEffect(() => {
    Axios.get('/api')
      .then((fetchData) => setData(fetchData.data.passedData));
  }, []);

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [checkbox, setCheck] = useState(false);
  const [loginErr, setErrMessage] = useState('');

  const history = useHistory();

  function SignUp(e) {
    e.preventDefault();
    const credentials = {
      name: userName,
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    };
    Axios.post('/signup', credentials);
    history.push('/login');
  }

  function SignIn(e) {
    e.preventDefault();
    const credentials = {
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    };
    Axios.post('/signin', credentials)
      .then((userSession) => {
        setData(userSession.data);
        if (userSession.data.checkbox === true) {
          localStorage.setItem('session-id', userSession.data.session);
          history.push(`/teachers/${userSession.data.user.id}`);
        } else {
          localStorage.setItem('session-id', userSession.data.session);
          history.push(`/student/${userSession.data.user.id}`);
        }
      }).catch((err) => {
        setErrMessage(err.response.data);
      });
  }

  function Logout() {
    Axios.get('/logout')
      .then((userSession) => {
        localStorage.clear();
        setData(userSession.data);
        history.push('/login');
      });
  }

  const values = {
    toggleModal,
    displaySwitch,
    data,
    setData,
    userName,
    setName,
    userEmail,
    setEmail,
    userPassword,
    setPassword,
    checkbox,
    setCheck,
    SignUp,
    SignIn,
    Logout,
    loginErr,
    setErrMessage,
    files,
    setFile,
  };
  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
