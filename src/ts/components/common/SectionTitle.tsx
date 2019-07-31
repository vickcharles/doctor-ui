import * as React from 'react';
import {
  Divider,
  Typography
} from '@material-ui/core';

interface Props {
  text: string;
}

/**
 * Section Title
 */
const SectionTitle: React.StatelessComponent<Props> = props => {
  return (
    <div>
      <Typography color="primary" className="nabi-text-mediumbold nabi-text-uppercase nabi-margin-bottom-xsmall">
        {props.text}
      </Typography>
      <Divider className="nabi-margin-bottom-xsmall" />
    </div>
  );
};

export default SectionTitle;