import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import RegisterForm from '../components/ui/registerForm';
import LoginForm from '../components/ui/loginForm';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="#">
        Dan Tkachuk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === 'register' ? type : 'login'
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    );
  };
  return (
    <>
      <Container maxWidth="sm" fixed>
        {formType === 'register' ? (
          <>
            <RegisterForm />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={toggleFormType} sx={{ cursor: 'pointer' }}>
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <LoginForm />
            <Grid container>
              <Grid item xs>
                <Link href="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link onClick={toggleFormType} sx={{ cursor: 'pointer' }}>
                  Don&apos;t have an account? Register
                </Link>
              </Grid>
            </Grid>
          </>
        )}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
};

export default Login;
