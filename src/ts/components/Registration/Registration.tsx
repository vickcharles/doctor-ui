import * as React from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';


/**
 * Registration Form
 */
const Registration = () => {
  return (
    <Grid container={true} className="margin-top-small">
      <Grid xs={10} md={6} className="margin-auto">
        <div className="section-wide background-color-white box-shadow">
          <Typography className="text-align-center" color="primary">
					  CREA TU CUENTA
          </Typography>
          <TextField
            fullWidth={true}
            placeholder="correo electronico"
            margin="normal"
          />
          <TextField
            fullWidth={true}
            placeholder="contraseña"
						margin="normal"
						type="password"
          />
					<TextField
            fullWidth={true}
            placeholder="verificar contraseña"
						margin="normal"
						type="password"
          />
          <Button variant="contained" className="margin-top-small full-width" color="primary">
            CONTINUAR
          </Button>
        </div>
      </Grid>
    </Grid>
  )
};

export default Registration;
