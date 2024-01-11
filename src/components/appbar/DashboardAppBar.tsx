import { memo } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashboardAppBar = memo(function DashboardAppBar({
  sidebarShow,
  handleSidebarClose,
  drawerWidth,
}: {
  sidebarShow: boolean;
  handleSidebarClose: () => void;
  drawerWidth: number;
}) {
  return (
    <AppBar position='fixed' open={sidebarShow} drawerwidth={drawerWidth}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleSidebarClose}
          edge='start'
          sx={{ mr: 2, ...(sidebarShow && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          <Link to='/' className=' text-white no-underline'>
            Ecommerce Admin
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

export default DashboardAppBar;
