import { memo } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// routes
import { routes } from '@/data/routes';
import { StyledComponent } from '@emotion/styled';
import { Theme } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
const DashboardDrawer = memo(function DashboardDrawer({
  theme,
  sidebarShow,
  handleSidebarClose,
  drawerWidth,
  DrawerHeader,
}: {
  theme: Theme;
  sidebarShow: boolean;
  handleSidebarClose: () => void;
  drawerWidth: number;
  DrawerHeader: StyledComponent<
    MUIStyledCommonProps<Theme>,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    object
  >;
}) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={sidebarShow}
    >
      <DrawerHeader>
        <IconButton onClick={handleSidebarClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes.map((item) => (
          <Link to={item.address} key={item.address}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
});

export default DashboardDrawer;
