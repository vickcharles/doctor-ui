import * as React from 'react';

import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  withRouter
} from 'react-router-dom';

/**
 * Main header
 */
const Header = (props: any) => {
  const logout = () => {
    localStorage.setItem('token', '');
  }

  return (
    <div className="container">
      <div className="justify-content-space-between display-flex padding-top-xsmall padding-bottom-xsmall">
			  <Link to="/">
          <Typography color="primary">
            DOCTORS-UI
          </Typography>
			  </Link>
				<Link to="/crear-cuenta">
            {props.location.pathname === '/dashboard' &&
              <div className="hide-on-mobile" id="header-social-menu">
                <Button variant="contained" onClick={logout} color="default">
                  SALIR
                </Button>
              </div>
            }
            {props.location.pathname === '/' &&
              <div className="hide-on-mobile" id="header-social-menu">
                <Button variant="outlined" color="primary">
                  CREAR CUENTA
                </Button>
              </div>
            }
			  </Link>
      </div>
	  </div>
  );
};

export default withRouter(Header);
