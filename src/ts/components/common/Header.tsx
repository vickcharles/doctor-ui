import * as React from 'react';

import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="justify-content-space-between display-flex padding-top-xsmall padding-bottom-xsmall">
			  <Link to="/">
          <Typography color="primary">
            DOCTORS-UI
          </Typography>
			  </Link>
				<Link to="/crear-cuenta">
					<Button variant="outlined" color="primary">
            CREAR CUENTA
          </Button>
			  </Link>
      </div>
	  </div>
  );
};

export default Header;
