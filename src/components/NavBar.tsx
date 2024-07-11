'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import CodeIcon from '@mui/icons-material/DeveloperMode';
import { useRouter } from 'next/navigation';


const devName = 'Humberto';

interface Props {
    children: React.ReactNode;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Resume',
        path: '/resume'
    }, 
    // TODO add the first article
    // {
    //     label: 'Articles',
    //     path: '/articles'
    // },
    // TODO create porfolio page
    // {
    //     label: 'Portfolio',
    //     path: '/portfolio'
    // },
];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleRedirect = (path: string) => {
    router.push(path);
  };
  const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        {devName} 
        <Typography
            component="span"
            variant="h6"
            sx={{ color: 'primary.light', ml: 1}}
        >
        Dev
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleRedirect(item.path)}>
                    <ListItemText primary={item.label} color='primary' />
                </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <>
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/> 
            <Typography
                variant="h5"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            {devName}
            <Typography
                component="span"
                variant="h6"
                sx={{ color: 'primary.light', ml: 1}}
            >
            Developer
            </Typography>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Link key={item.label} href={item.path}>
                        <Button>
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </nav>
        </Box>
        <Box component="main">
            <Toolbar />
            {props.children}
        </Box>
      </>
  );
}
