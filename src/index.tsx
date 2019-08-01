import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from '../src/ts/app/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiBadge: {
      colorPrimary: {
        color: '#ffffff',
        backgroundColor: '#f44336'
      }
    },
    MuiIconButton: {
        root: {
          '&:hover': {
            background: '#8CC5CC !important'
          },
          color: '#06c3e1',
          borderRadius: '3px',
          height: '30px',
          width: '30px',
          padding: '0px'
        },
        colorPrimary: {
          color: '#fff !important',
          borderRadius: '50%',
          height: '30px',
          width: '30px',
          background: '#8CC5CC !important',
          '&:hover': {
            background: '#8CC5CC !important'
          },
        },
        colorSecondary: {
          color: '#fff !important',
          borderRadius: '50%',
          height: '30px',
          width: '30px',
          background: '#b6bac3',
          '&:hover': {
            background: 'rgba(113,122,138, 0.75) !important'
          },
        }
      },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#8CC5CC',
        '&:hover': {
            background: '#8CC5CC !important'
          },
       },
      outlinedPrimary: {
        color: '#8CC5CC',
        border: '1px solid #8CC5CC',
        '&:hover': {
          background: '#fff !important',
          border: '1px solid #8CC5CC'
        },
      },
    },
    MuiTypography: {
        root: {
            fontFamily: '\'Montserrat\', sans-serif !important',
            color: '#717a8a !important',
            '&$colorPrimary': {
              color: '#8CC5CC !important'
            },
            '&$colorError': {
              color: '#f44336 !important'
            },
        },
    },
    MuiInput: {
        fullWidth: {
          width: 'auto'
        },
        input : {
          '&::placeholder': {
            color: '#717a8a !important'
          },
          background: '#f3f6f9',
          borderRadius: '5px',
          color: '#717a8a !important',
          padding: '13px 18px',
          '$&focused': {
            background: '#fff !important'
          },
        },
        root: {
          border: '2px solid #ebeef1 !important',
          borderRadius: '5px',
          '$&focused': {
            border: '2px solid #06c3e1 !important',
            borderRadius: '5px',
            background: '#fff !important'
          },
        },
        underline: {
          '&:after': {
            display: 'none'
          },
          '&:before': {
            display: 'none'
          },
          backgroundColor: '#f3f6f9 !important'
        },
        error: {
          borderColor: '#f44336 !important'
        }
      },
      MuiInputBase: {
        root: {
          fontFamily: '\'Montserrat\', sans-serif !important',
        },
        error: {
          borderColor: '#f44336 !important'
        }
      },
      MuiDivider: {
        root: {
          backgroundColor: '#ebeef1',
          height: '2px'
        }
      },
    MuiFormLabel: {
        root: {
          fontSize: '14px',
          width: '100%',
          fontWeight: 500,
          fontFamily: '\'Montserrat\', sans-serif !important',
          '&$focused': {
            color: '#8CC5CC !important',
            marginTop: '0px !important'
          }
        },
      },
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
