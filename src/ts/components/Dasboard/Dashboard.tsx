import * as React from 'react';

import {
  Grid,
	Avatar,
  Button,
	Typography
} from '@material-ui/core';

import SectionTitle from '../common/SectionTitle';
import { Redirect } from 'react-router-dom';
import Axios from '../../utils/axios';

const Dashboard = () => {
	const [data, setData] = React.useState<any>({});
	const [redirect, setRedirect] = React.useState(false);

	const avatarDefaultStyles = {
		width: '100px',
		height: '100px'
	};

	React.useEffect(() => {
		const fetch = async () => {
			const token = localStorage.getItem('token');
			try {
				let response = await Axios.get("/doctors/getById", { headers: {"Authorization" : `Bearer ${token}`} })
				if(response.data.doctor[0]) {
          setData(response.data.doctor[0]);
				}
				console.log(response.data.doctor[0])
			} catch (err) {
				alert('hubo un error en la autenticación:' + err);
			};
		};
    fetch();
	},[]);


	const redirectProfile = () => {
    setRedirect(true);
	};

	const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/profile-builder' />
    };
	};

  return (
    <div>
			<div className="container margin-top-small">
				<Grid container={true} spacing={3}>
          <Grid item={true} xs={12} md={4} >
					  <div className="section box-shadow text-align-center">
							<Avatar
								alt="Remy Sharp"
								className="margin-auto"
								style={avatarDefaultStyles}
								src={require('../../../assets/img/doctor-image.png')}
							/>
							<Button
                variant="contained"
                className="margin-top-small"
							  color="primary"
							  onClick={redirectProfile}
              >
                ACTUALIZAR PERFIL
              </Button>
							<div className="margin-top-small">
							  <SectionTitle text="Mi info" />
							</div>
							<Typography color="primary" className="margin-top-small">
                 Dr. {data.userId && data.userId.name} {data.userId && data.userId.lastName}
							</Typography>
					  </div>
					</Grid>
					<Grid item={true} xs={12} md={8}>
					  <div className="section box-shadow">
            </div>
					</Grid>
				</Grid>
				{renderRedirect()}
			</div>
	 </div>
  );
};

export default Dashboard;
