import * as React from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

import { Redirect } from 'react-router-dom'

import Axios from '../../utils/axios';
import { useForm } from '../../hooks/useForm';

/**
 * Registration Form
 */
const Registration = () => {
  const state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: ''
  };

  const { values, handleChange, handleSubmit } = useForm(Submit, state);
  const [redirect, setRedirect] = React.useState(false);

  async function Submit() {
    const userToRegister = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    };

    try {
      let userData = await Axios.post("/register", userToRegister);
      localStorage.setItem('token', userData.data.token);
      setRedirect(true);
    } catch (e) {
      alert('ya usted posee una cuenta');
    }
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/profile-builder' />
    }
  };

  return (
    <Grid container={true} className="margin-top-small">
      <Grid xs={10} md={6} className="margin-auto">
        <div className="section-wide background-color-white box-shadow">
          <Typography className="text-align-center" color="primary">
					  CREA TU CUENTA
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth={true}
              placeholder="nombre"
              margin="normal"
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              fullWidth={true}
              placeholder="apellido"
              margin="normal"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            <TextField
              fullWidth={true}
              placeholder="correo electronico"
              margin="normal"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              fullWidth={true}
              placeholder="contraseña"
						  margin="normal"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
					  <TextField
              fullWidth={true}
              placeholder="verificar contraseña"
						  margin="normal"
              type="password"
              name="verifyPassword"
              onChange={handleChange}
              value={values.verifyPassword}
            />
            <Button
              type="submit"
              variant="contained"
              className="margin-top-small full-width"
              color="primary"
            >
              CONTINUAR
            </Button>
          </form>
          {renderRedirect()}
        </div>
      </Grid>
    </Grid>
  )
};

export default Registration;
