import React from "react";
import { flexbox } from "@material-ui/system";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TextField from "@material-ui/core/TextField";
import SchoolIcon from "@material-ui/icons/School";
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

const tipousuario = [
  {
    label: "Gerencia",
    value: "Gerencia",
  },
  {
    label: "Analista",
    value: "Analista",
  },
  {
    label: "Supervisor",
    value: "Supervisor",
  },
  {
    label: "Residente",
    value: "Residente",
  },
];
const drawerWidth = "inherit";
const useStyles = makeStyles((theme) => ({
  
  drawerPaper: { 
    width: "inherit", backgroundColor: "#92a8d1" },
  appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App(props) {
  const classes = useStyles();
  const [usuarios, setTipousuario] = React.useState("Gerencia");
  const handleChange = (e) => {
    setTipousuario(e.target.value);
  };
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Router>
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="GESTION DE PROYECTOS"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GESTION DE PROYECTOS
          </Typography>
        </Toolbar>
      </AppBar>
     
      </div>
      <div
        style={{
          display:
            "flex" 
        }}
      >
         <nav className={classes.drawer} aria-label="mailbox folders"></nav>
         <Hidden smUp implementation="css">
        <Drawer
         container={container}
         variant="temporary"
         anchor={theme.direction === 'rtl' ? 'right' : 'left'}
         open={mobileOpen}
         onClose={handleDrawerToggle}
         classes={{
           paper: classes.drawerPaper,
         }}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Proyectos"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Presupuesto"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Programación"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        </Hidden>
        <Switch>
          <Route exact path="/">
            <Container>
              <div style={{ marginTop: 80 }} className={classes.root}>
                <Typography variant="h4" gutterBottom>
                  DATOS DE USUARIO
                </Typography>
                <div>
                  <TextField
                    id="standard-basics"
                    label="DNI"
                    style={{ margin: 8 }}
                    placeholder="ingrese DNI"
                    //margin="normal"
                    InputLabelProps={
                      {
                        //shrink: true,
                      }
                    }
                  />
                  <button style={{ margin: 20 }}>
                    <SearchIcon></SearchIcon>
                  </button>
                </div>

                <div style={{ margin: 8 }}>
                  <TextField
                    label="Nombres"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon></PersonIcon>{" "}
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Apellido Paterno"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                  />
                  <TextField
                    label="Apellido Materno"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="e-mail"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Colegiatura"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolIcon></SchoolIcon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Teléfono"
                    id="outlined-margin-none"
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon></PhoneIcon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Fotografía"
                    id="outlined-size-small"
                    type="File"
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhotoLibraryIcon></PhotoLibraryIcon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    id="outlined-size-small"
                    select
                    label="Tipo de Usuario"
                    value={tipousuario}
                    onChange={handleChange}
                    helperText="Elija su tipo de usuario"
                  >
                    {tipousuario.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    id="outlined-size-small"
                    select
                    label="Tipo de Usuario"
                    value={tipousuario}
                    onChange={handleChange}
                    helperText="Elija su tipo de usuario"
                  >
                    {tipousuario.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>

              <Typography variant="body1" gutterBottom></Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
