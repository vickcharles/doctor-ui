import * as React from 'react';

import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <div className="container">
      <div className="justify-content-space-between display-flex padding-top-xsmall padding-bottom-xsmall">
        <Typography color="primary">
          DOCTORS-UI
        </Typography>
        <Typography color="primary">
          REGISTRARME
        </Typography>
      </div>
	  </div>
  );
};

export default Header;
