import * as React from 'react';

import {
  Icon,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core';

import { EducationType }  from './model';
import * as EducationAddedComponent  from './constants';

interface Props extends EducationType {
  deleteEducation: (educationId: number | undefined) => void;
  editEducation: (educationId: number | undefined) => void;
  gridWidth?: boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
}

const EducationAdded: React.StatelessComponent<Props> = props => {
  return (
    <Grid
      item={true}
      md={props.gridWidth && props.gridWidth}
      xs={12}
      className="margin-top-small editable-item"
    >
      <div className="action-buttons">
        <IconButton
          color="primary"
          className="float-right margin-left-xsmall"
          aria-label="Delete"
          onClick={() => props.deleteEducation(props.id)}
        >
          <Icon>delete</Icon>
        </IconButton>

        <IconButton
          color="primary"
          className="float-right"
          aria-label="Edit"
          onClick={() => props.editEducation(props.id)}
        >
          <Icon>edit</Icon>
        </IconButton>
      </div>

      <Typography className="text-uppercase" variant="body2">
        <mark>{props.schoolName}</mark>
      </Typography>

      <Typography className="margin-top-xsmall">
        <mark>
          {EducationAddedComponent.concentration.replace(
            EducationAddedComponent.degreeTypePlaceholder,
            props.degreeType
          ).replace(
            EducationAddedComponent.fieldOfStudyPlaceholder,
            props.fieldOfStudy
          )}
        </mark>
      </Typography>

      <Typography>
        <mark>{props.graduationYear}</mark>
      </Typography>

      <Typography>
        <mark>{props.description}</mark>
      </Typography>
    </Grid>
  );
};

export default EducationAdded;
