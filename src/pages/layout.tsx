import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { handleSidebarShow } from '@/store/slices/sidebar';
import DashboardAppBar from '@/components/appbar/DashboardAppBar';
import DashboardDrawer from '@/components/appbar/DashboardDrawer';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function RootLayout() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sidebarShow = useSelector(
    (state: RootState) => state.rootReducer.sidebar.show
  );

  const handleSidebarClose = () => {
    dispatch(handleSidebarShow(!sidebarShow));
  };

  return (
    <div className='flex bg-gray-50'>
      <DashboardAppBar
        sidebarShow={sidebarShow}
        handleSidebarClose={handleSidebarClose}
        drawerWidth={drawerWidth}
      />
      <DashboardDrawer
        theme={theme}
        sidebarShow={sidebarShow}
        handleSidebarClose={handleSidebarClose}
        drawerWidth={drawerWidth}
        DrawerHeader={DrawerHeader}
      />
      <Main open={sidebarShow} className='w-full'>
        <DrawerHeader />
        <div className='min-h-screen'>
          <Outlet />
        </div>
      </Main>
    </div>
  );
}
