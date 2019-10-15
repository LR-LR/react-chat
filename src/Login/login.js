import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require('firebase');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loginError: ''
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography componenet="h1" variant="h5">
            Connection
          </Typography>
          <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-email-input">
                Entres ton email
              </InputLabel>
              <Input
                autoComplete="email"
                autoFocus
                id="login-email-input"
                onChange={(e) => this.userTyping('email', e)}></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-password-input">
                Entres ton mot de passe
              </InputLabel>
              <Input
                type="password"
                autoComplete="password"
                id="login-password-input"
                onChange={(e) => this.userTyping('password', e)}></Input>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Connexion
            </Button>
          </form>
          {this.state.loginError ? (
            <Typography
              className={classes.errorText}
              component="h5"
              variant="h6">
              Informations de connection incorrectes
            </Typography>
          ) : null}
          <Typography
            component="h5"
            variant="h6"
            className={classes.noAccountHeader}>
            Tu n'as pas de compte ?!
          </Typography>
          <Link className={classes.signUpLink} to="/signup">
            Inscris-toi !
          </Link>
        </Paper>
      </main>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case 'email':
        this.setState({ email: e.target.value });
        break;

      case 'password':
        this.setState({ password: e.target.value });
        break;

      default:
        break;
    }
  };

  submitLogin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.props.history.push('/dashboard');
        },
        (err) => {
          this.setState({ loginError: 'Server error' });
          console.log(err);
        }
      );
  };
}

export default withStyles(styles)(Login);
