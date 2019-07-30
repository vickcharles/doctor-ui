import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Grid } from '@material-ui/core';

const HomePage = () => {
  return (
    <div>
      <Grid container={true}>
        <Grid xs={12} md={6}>
          <img src={require('../../../../assets/img/banner-img.png')} alt="banner-img" />
          <Button variant="contained" color="primary">
            Hola Mundo!
          </Button>
        </Grid>
        <Grid xs={12} md={6}>
        </Grid>
      </Grid>
		</div>
  )
}

export default HomePage;
