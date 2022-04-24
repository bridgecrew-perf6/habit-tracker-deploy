import React, { useEffect } from 'react';
import './app/scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Main from './app/layouts/main';
import Login from './app/layouts/login';
import ColorModeProvider from './app/hooks/useColorMode';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './app/components/common/protectedRoute';
import AppLoader from './app/components/ui/hoc/appLoader';

function App() {
  return (
    <>
      <ColorModeProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
          <AppLoader>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <ProtectedRoute path="/">
                <Main />
              </ProtectedRoute>
            </Switch>
          </AppLoader>
        </Box>
      </ColorModeProvider>

      <ToastContainer />
    </>
  );
}

export default App;
