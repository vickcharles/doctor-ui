import * as React from 'react';
import '../../../../assets/css/homepage.css';
import { Grid } from '@material-ui/core';

import { Login } from '../../Login/Login';

import { Redirect } from 'react-router-dom';

/**
 * Homepage
 */
const HomePage = () => {
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
		if(localStorage.getItem('token')) {
      setRedirect(true)
    };
  },[]);


  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/dashboard' />
    }
  };

  return (
    <div className="margin-top-xlarge">
      <Grid container={true} className="container">
        <Grid xs={12} md={6}>
          <h1 className="banner-title color-dark-blue text-align-center">
            CONECTATE CON LA <span className="color-light-blue"> COMUNIDAD </span> DE DOCTORES MAS GRANDE DE
            <span className="color-light-blue"> COLOMBIA</span>
          </h1>
          <div className="banner-img margin-top-small">
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid xs={12} md={9} className="margin-auto">
            <Login />
          </Grid>
        </Grid>
        {renderRedirect()}
      </Grid>
		</div>
  );
};

export default HomePage;
