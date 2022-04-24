import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';

import Today from '../pages/today';
import Logout from '../layouts/logout';
import Habits from '../pages/habits';
import Profile from '../pages/profile';
import Sidebar from '../components/ui/sideBar';
import TopBar from '../components/ui/topBar';
import Stats from '../pages/stats';

const drawerWidth = 280;

const Main = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const topBarHeight = '4rem';
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar
        height={topBarHeight}
        drawerWidth={drawerWidth}
        onOpen={handleDrawerToggle}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        topBarHeight={topBarHeight}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
      />

      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: topBarHeight
        }}
      >
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/habits/:habitID?/:edit?" component={Habits} />
          <Route path="/stats/:id?" component={Stats} />
          <Route path="/" component={Today} />
        </Switch>
      </Box>
    </>
  );
};

export default Main;
