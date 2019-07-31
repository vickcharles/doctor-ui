import * as React from 'react';

import {
  TextField,
	Typography,
	Button
} from '@material-ui/core';

export const Login = () => {
  return (
    <div className="section-wide background-color-white box-shadow">
      <Typography className="text-align-center" color="primary">
        ACCEDER
      </Typography>
      <TextField
        fullWidth={true}
        placeholder="correo electrónico"
        margin="normal"
      />
      <TextField
        fullWidth={true}
        placeholder="contraseña"
				margin="normal"
				type="password"
      />
      <Button variant="contained" className="margin-top-small full-width" color="primary">
        ACCEDER
      </Button>
    </div>
  );
};
