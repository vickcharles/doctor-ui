import * as React from 'react';

import AvatarUploader from '../AvatarUploader/AvatarUploader';
import { Grid, TextField, Typography } from '@material-ui/core';
import SectionTitle from '../common/SectionTitle';

export const ProfileBuilder = () => {
  return (
    <Grid container={true} className="margin-top-small">
      <Grid xs={10} md={8} className="margin-auto">
			  <Typography color="primary" variant="h5" className="text-align-center margin-bottom-small">
			  	TU PERFIL
			  </Typography>
        <div className="section-wide background-color-white box-shadow">
          <div className="text-align-center">
            <AvatarUploader />
          </div>
          <Grid container={true}>
					  <Grid xs={12}>
					    <SectionTitle text="Acerca de ti" />
					  </Grid>
            <Grid xs={12} md={6}>
              <TextField
								fullWidth={true}
								multiline={true}
                placeholder="1000 Characteres max."
                margin="normal"
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
