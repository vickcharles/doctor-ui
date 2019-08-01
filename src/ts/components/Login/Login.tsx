import * as React from 'react';

import {
  TextField,
	Typography,
	Button
} from '@material-ui/core';

import { useForm } from '../../hooks/useForm';

/**
 * Login Form
 */
export const Login = () => {
  const state = {
    email: '',
    password: ''
  }
  const { values, handleChange, handleSubmit } = useForm(login, state);

  function login() {
    console.log(values);
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
    </div>
  );
};
