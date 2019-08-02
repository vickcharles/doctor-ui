import * as React from 'react';

import AvatarUploader from '../AvatarUploader/AvatarUploader';
import { Grid, TextField, Typography } from '@material-ui/core';
import SectionTitle from '../common/SectionTitle';
import EducationAdded from '../Education/EducationAdded';
import { EducationType }  from '../Education/model';
import EducationForm  from '../Education/EducationForm';
import Axios from '../../utils/axios';
import { Redirect } from 'react-router-dom';

import {
  Button,
  Icon
} from '@material-ui/core';

interface Props {}

interface State extends EducationType {
  bio: string;
  avatar: string;
	educations: EducationType[];
  showEducationForm: boolean;
  isEditing: boolean;
  redirect: boolean;
}

/**
 * Profile Builder
 */
export class ProfileBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
    this.state = {
      avatar: '',
      bio: '',
			id: 0,
			schoolName: '',
			graduationYear: '',
			degreeType: '',
			fieldOfStudy: '',
			description: '',
      educations: [],
      redirect: false,
		  showEducationForm: false,
		  isEditing: false
    };
	}


	public deleteEducation(educationId: number): void {
    this.setState({
      educations: this.state.educations.filter(education =>
        education.id !== educationId
      )
    });
	};

	public editEducation(educationId: number): void {
    const editEducation = this.state.educations.filter(education =>
      education.id === educationId
    );

    this.setState({
      isEditing: true,
			id: editEducation[0].id,
      schoolName: editEducation[0].schoolName,
      graduationYear: editEducation[0].graduationYear,
      description: editEducation[0].description,
      degreeType: editEducation[0].degreeType,
      fieldOfStudy: editEducation[0].fieldOfStudy,
    }, () => {
      this.setState ({ showEducationForm: true });
    });
	};

	public handleChange = (event: any): void => {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public componentDidMount(): void {
    this.fetchUser();
  };

  fetchUser = async () => {
			const token = localStorage.getItem('token');
			try {
        let response = await Axios.get("/doctors/getById", { headers: {"Authorization" : `Bearer ${token}`} })
        console.log(response.data)
        if(response.data.doctor[0]) {
          this.setState({
            bio: response.data.doctor[0].bio,
            educations: response.data.doctor[0].education,
            avatar: response.data.doctor[0].avatar
          });
        }
       
			} catch (err) {
				alert('hubo un error ' + err);
			}
	};

	public renderEducationForm = (): JSX.Element => (
    <div>
      <Typography className="margin-top-xsmall" color="primary">
        AÑADIR EDUCACION
      </Typography>
      <EducationForm
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        schoolName={this.state.schoolName}
        description={this.state.description}
        graduationYear={this.state.graduationYear}
				degreeType={this.state.degreeType}
        fieldOfStudy={this.state.fieldOfStudy}
        handleCancel={this.handleCancel}
        isEditing={this.state.isEditing}
      />
    </div>
  );

  public resetState(): void {
    this.setState({
      id: undefined,
      schoolName: '',
      graduationYear: '',
      degreeType: '',
      fieldOfStudy: '',
      description: '',
      isEditing: false
    });
  }

  public updateProfile = async () => {
    const valuesToSave = {
      avatar: this.state.avatar,
      bio: this.state.bio,
      education: this.state.educations
    };

    try {
      console.log(valuesToSave);
      const token = localStorage.getItem('token');
      let response = await Axios.post("/doctors/create", valuesToSave, { headers: {"Authorization" : `Bearer ${token}`}});
      this.setState({
        redirect: true
      })
      console.log(response.data);
    } catch (e) {
      console.log(alert(e));
    };
  };

  public toggleEducationForm = () => this.setState(prevState => ({
    showEducationForm: !prevState.showEducationForm
  }));

  public handleCancel = (): void => {
    this.resetState();
    this.toggleEducationForm();
  }

	public handleSave = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    if (event) {
      event.preventDefault();
    }

    const education: EducationType = {
      schoolName: this.state.schoolName,
      graduationYear: this.state.graduationYear,
      degreeType: this.state.degreeType,
      fieldOfStudy: this.state.fieldOfStudy,
      description: this.state.description
		};

    // handle save when editing an exisitng education
    if (this.state.isEditing) {
      education.id = this.state.id;

      const index = this.state.educations.findIndex(item => item.id === education.id);
      const educationCopy = [...this.state.educations];

      educationCopy.splice(index, 1, education);

      this.setState({educations: educationCopy}, () => {
        this.resetState();
        this.toggleEducationForm();
      });

    } else {
      education.id = this.state.educations.length;

      if (this.state.educations.find(t => t === education)) {
        return;
      } else if (education.degreeType && education.graduationYear &&
        education.fieldOfStudy && education.description && education.schoolName) {
        this.setState({ educations: [...this.state.educations, education] }, () => {
          this.resetState();
          this.toggleEducationForm();
        });
      }
    }
  };

  public changeImage(img: any) {
    this.setState({
      avatar: img
    });
  };

  public render() {
		const educationAdded = this.state.educations.map((education: any, i: any) => (
			<li className="list" key={i}>
				<EducationAdded
					id={education.id}
					gridWidth={6}
					schoolName={education.schoolName}
					graduationYear={education.graduationYear}
					description={education.description}
					degreeType={education.degreeType}
					fieldOfStudy={education.fieldOfStudy}
					deleteEducation={() => this.deleteEducation(education.id)}
					editEducation={() => this.editEducation(education.id)}
				/>
			</li>
		));

    return (
			<Grid container={true} className="margin-top-small">
				<Grid xs={10} md={8} className="margin-auto">
					<Typography color="primary" variant="h5" className="text-align-center margin-bottom-small">
						TU PERFIL
					</Typography>
					<div className="section-wide background-color-white box-shadow">
						<div className="text-align-center">
							<AvatarUploader originalImage={this.state.avatar} imageChanged={(img: any) => this.changeImage(img) } />
						</div>
						<Grid container={true}>
							<Grid xs={12}>
								<SectionTitle text="Acerca de ti" />
							</Grid>
							<Grid xs={12} md={6}>
								<TextField
									fullWidth={true}
                  multiline={true}
                  name="bio"
                  onChange={this.handleChange}
									placeholder="1000 Characteres max."
                  margin="normal"
                  value={this.state.bio}
								/>
							</Grid>
						</Grid>
						<Grid container={true}>
							<Grid xs={12} className="margin-top-small">
                {!this.state.showEducationForm ?
                <div>
                  <SectionTitle text="Educacion" />
                  <ul>
                    {educationAdded}
                  </ul>
                  <div className="margin-top-medium">
                    <Button color="primary" variant="contained" onClick={this.toggleEducationForm}>
                      <Icon className="margin-right-xsmall">add</Icon>
                      Añadir educación
                    </Button>
                  </div>
                </div>
                : this.renderEducationForm()}
							</Grid>
              <Grid xs={12} className="align-right">
                <Button
                  type="submit"
                  onClick={this.updateProfile}
                  variant="contained"
                  className="margin-top-small"
                  color="primary"
                >
                  CONTINUAR
                </Button>
              </Grid>
						</Grid>
            {this.state.redirect && <Redirect to='/dashboard' />}
					</div>
				</Grid>
			</Grid>
		);
	}
};

export default ProfileBuilder;
