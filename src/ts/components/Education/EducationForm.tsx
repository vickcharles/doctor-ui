import * as React from 'react';

import {
  Button,
  FormControl,
  Grid,
  Icon,
  Input,
  Select,
  TextField
} from '@material-ui/core';

import { EducationType } from './model';

interface Props extends EducationType {
  handleChange: any;
  handleSave: any;
  handleCancel: () => void;
  isEditing: boolean;
}

export const YearsList = (extraYears?: number) => {
    const currentYear = (new Date()).getFullYear();
    const startYear = 1940;
    let years = [];
    let actualYears = extraYears ? extraYears + currentYear : currentYear;

    for (var i = actualYears; i >= startYear; i--) {
      years.push(i);
    }
    return years;
};

const EducationForm: React.StatelessComponent<Props> = props => {
  let years = YearsList(5);
  const yearsItems = years.map((year) =>
    <option key={year.toString()} value={year}>{year}</option>
  );

  const editSubmitButton: JSX.Element = (
    <Button
      color="primary"
      variant="contained"
      className="margin-top-small"
      onClick={props.handleSave}
      type="submit"
    >
      <Icon className="margin-right-xsmall">save</Icon>
      <span className="margin-left-xsmall">GUARDAR</span>
    </Button>
  );

  const addSubmitButton: JSX.Element = (
    <Button
      color="primary"
      variant="contained"
      className="margin-top-small text-uppercase"
      onClick={props.handleSave}
      type="submit"
    >
      <Icon className="margin-right-xsmall">add</Icon>
      <span className="margin-left-xsmall">GUARDAR</span>
    </Button>
  );

  return (
    <Grid container={true}>
      <Grid item={true} md={8} xs={12} sm={10}>
        <form>
          <TextField
            onChange={props.handleChange}
            fullWidth={true}
            id="schoolName"
            margin="normal"
            name="schoolName"
            placeholder="Nombre del instituto"
            required={true}
            value={props.schoolName}
          />
          <FormControl
            fullWidth={true}
          >
            <Select
              native={true}
              input={
                <Input
                  id="graduationYear"
                  name="graduationYear"
                />
              }
              value={props.graduationYear}
              onChange={props.handleChange}
            >
              <option value="" disabled={true}>
                Año de graduacion
              </option>
              {yearsItems}
            </Select>
          </FormControl>
          <TextField
            onChange={props.handleChange}
            fullWidth={true}
            id="fieldOfStudy"
            margin="normal"
            name="fieldOfStudy"
            placeholder="Campo de estudio"
            required={true}
            value={props.fieldOfStudy}
          />
          <FormControl
            fullWidth={true}
          >
            <Select
              native={true}
              input={
                <Input
                  id="degreeType"
                  name="degreeType"
                />
              }
              value={props.degreeType}
              onChange={props.handleChange}
            >
              <option value="" disabled={true}>
                Grado
              </option>
              <option value="whatever"> Whatever </option>
              <option value="whatever"> Whatever </option>
            </Select>
          </FormControl>
            <TextField
              onChange={props.handleChange}
              fullWidth={true}
              id="description"
              margin="normal"
              name="description"
              placeholder="description"
              required={true}
              value={props.description}
            />
            {props.isEditing ? editSubmitButton : addSubmitButton}
            <Button
              color="default"
              variant="contained"
              className="margin-top-small text-uppercase margin-left-xsmall"
              onClick={props.handleCancel}
            >
              <Icon className="margin-right-xsmall">close</Icon>
              <span className="margin-left-xsmall">CANCELAR</span>
            </Button>
          </form>
        </Grid>
      </Grid>
  );
};

export default EducationForm;
