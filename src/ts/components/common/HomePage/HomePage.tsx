import * as React from 'react';
import Button from '@material-ui/core/Button';
import '../../../../assets/css/homepage.css'
import {
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

const HomePage = () => {
  return (
    <div className="margin-top-xlarge">
      <Grid container={true} className="container">
        <Grid xs={12} md={6}>
          <Typography color="primary" className="banner-title">
            CONECTATE CON LA COMUNIDAD DE DOCTORES MAS GRANDE DE COLOMBIA
          </Typography>
          <div className="banner-img margin-top-small">
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid xs={12} md={8} className="margin-auto">
            <div className="section-wide background-color-white box-shadow">
              <Typography className="text-align-center" color="primary">
                ACCEDER
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
              />
              <Button variant="contained" className="margin-top-small" color="primary">
                ACCEDER
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
		</div>
  );
};

export default HomePage;
