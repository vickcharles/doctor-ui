import * as React from 'react';

import {
  TextField,
	Typography,
	Button
} from '@material-ui/core';

import { Redirect } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import Axios from '../../utils/axios';

/**
 * Login Form
 */
export const Login = () => {
  const state = {
    email: '',
    password: ''
  }
  const { values, handleChange, handleSubmit } = useForm(login, state);
  const [ redirect, setRedirect ] = React.useState(false);

  async function login() {
    if(values.email && values.password) {
      try {
        let userData = await Axios.post("/authenticate", values);
        localStorage.setItem('token', userData.data.token);
        setRedirect(true);
      } catch (err) {
        alert('hubo un error en la autenticación: ' + err);
      }
    }
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/dashboard' />
    }
  };

  return (
    <div className="section-wide background-color-white box-shadow">
      <Typography className="text-align-center" color="primary">
        ACCEDER
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth={true}
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="correo electrónico"
          margin="normal"
        />
        <TextField
          fullWidth={true}
          placeholder="contraseña"
          margin="normal"
          onChange={handleChange}
          value={values.password}
          id="password"
          name="password"
				  type="password"
        />
        <Button variant="contained" type="submit" className="margin-top-small full-width" color="primary">
          ACCEDER
        </Button>
      </form>
      {renderRedirect()}
    </div>
  );
};
