import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from './CarouselSVGs/Logo_pizzaboy-opti.webp';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemText primary={<Typography variant="h6">Join Now</Typography>} secondary="and save money!" />
        </ListItem>
      </List>
      <Divider sx={{ borderColor: 'gray' }} />
      <List>
        {[
          'Actions', 'Economy menus', 'Salads', 'Pizza', 'Pizza bun', 'Pasta', 'Casseroles', 'International', 'Citizens'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: 'gray' }} />
      <List>
        {['To register', 'Shop Info', 'Jobs', 'Feedback', 'Branches', 'Opening hours', 'Data protection'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: 'gray' }} />
      <List>
        <ListItem>
          <ListItemText primary={<Typography variant="h6">Pizzaboy Leverkusen-Manfort</Typography>} secondary="Manforter Str. 51373 Leverkusen" />
          <ListItemButton sx={{ color: 'red' }}>
            <ListItemText primary="CHANGE" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ bgcolor: 'red', color: 'white' }}>
            <ListItemText primary="REGISTER" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ height: '55px', backgroundColor: '#fff', color: '#e40000', boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.792), 0px 4px 5px 0px rgb(0, 0, 0), 0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, mt: -1 }}
          >
            <MenuIcon />
            <Typography variant="h6" component="div" sx={{ ml: 2, flexGrow: 1, fontSize: '16px' }}>
              Kotahena - Sri Lanka
            </Typography>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '16px', mt: -1 }}>
            <img src={logo} alt="Logo" style={{ width: '150px', height: '60px' }} />
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: 2, mt: -1, fontSize: '16px' }}
              >
                <Typography variant="h6" component="div" sx={{ mr: 1, flexGrow: 1, fontSize: '16px' }}>
                  My Account
                </Typography>
                <AccountCircle />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box sx={{ p: 2, width: 300 }}>
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleCloseMenu}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" align="center" gutterBottom>
                    Registriere dich und sammel Pluspunkte bei jeder Bestellung!
                  </Typography>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="E-mail address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, backgroundColor: '#e40000' }}>
                    Register
                  </Button>
                  <Button variant="contained" fullWidth startIcon={<img src="google_icon.png" alt="Google" />} sx={{ mt: 2 }}>
                    Sign in with Google
                  </Button>
                  <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
                    <Typography variant="body2">
                      No account? <Button onClick={() => alert("Register now")}>Register now</Button>
                    </Typography>
                    <Typography variant="body2">
                      <Button onClick={() => alert("Forgot Password?")}>Forgot Password?</Button>
                    </Typography>
                  </Box>
                </Box>
              </Popover>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <div>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}
