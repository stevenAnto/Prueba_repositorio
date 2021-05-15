import React from 'react'

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
import SaveIcon from '@material-ui/icons/Save';
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import MenuIcon from '@material-ui/icons/Menu';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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
      width: "inherit", backgroundColor: "#5b5b5c" },
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





const Proyecto = (props) => {



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
        <div>
            <Container>
              <div style={{ marginTop: 80 }} className={classes.root}>
                <Typography variant="h4" gutterBottom>
                  DATOS DE PROYECTO
                </Typography>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    id="standard-basics"
                    label="Codigo Único"
                    style={{ margin: 8,backgroundColor:"white" }}
                    placeholder="ingrese codigo"
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

                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Proyecto"
                    id="outlined-margin-none"
                    placeholder="ingrese nombre de proyecto"
                    className={classes.textField}
                    style={{ margin: 8,backgroundColor:"white" }}
                    variant="outlined"
                   
                  />
             
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Unidad Ejecutora"
                    id="outlined-margin-none"
                    placeholder="ingrese unidad ejecutora"
                    style={{ margin: 8,backgroundColor:"white" }}
                    className={classes.textField}
                    variant="outlined"
                  />
                </div>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Sector"
                    id="outlined-margin-none"
                    className={classes.textField}
                    style={{ margin: 8,backgroundColor:"white" }}
                    variant="outlined"
                   
                  />
                </div>
                <Typography variant="h4" gutterBottom>
                  Meta
                </Typography>
                <div style={{ margin: 8, flexDirection: "column" }}>
                  <TextField
                    label="Teléfono"
                    id="outlined-margin-none"
                    className={classes.textField}
                    style={{ margin: 8,backgroundColor:"white" }}
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
                    style={{ margin: 8,backgroundColor:"white" }}
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
                    style={{ margin: 8,backgroundColor:"white" }}
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
                <div>
                  <button style={{ marginLeft:15,width:100, backgroundColor:"#3146ff" }}>
                    <SaveIcon></SaveIcon>  
                   
                  </button>

                </div>
                 
               
              </div>

              <Typography variant="body1" gutterBottom></Typography>
            </Container>
        </div>
    )
}

export default Proyecto
