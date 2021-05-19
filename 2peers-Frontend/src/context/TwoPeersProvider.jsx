import { React, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import TwoPeersContext from './TwoPeersContext';

function TwoPeersProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/').then((res) => res.json())
      .then((fetchData) => setData(fetchData.passedData));
  }, []);

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [checkbox, setCheck] = useState('');
  const [valid, setValid] = useState(false);

  // const history = useHistory();

  function SignUp() {
    Axios.post('/signup', {
      name: userName,
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    });
  }

  function SignIn(e) {
    e.preventDefault();
    const credentials = {
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
      valid,
    };
    Axios.post('/signin', credentials).then((response) => {
      console.log(response.data);
    });
  }

  const values = {
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
    valid,
    setValid,
  };

  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
