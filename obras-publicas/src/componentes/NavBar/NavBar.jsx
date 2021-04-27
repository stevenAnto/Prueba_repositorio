import React from 'react'
import logo from "../../assets/logotipo/logo2.png"
import {Link,useHistory} from "react-router-dom"


//......navbar...........
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



import { ThemeProvider } from '@material-ui/styles';

//..............pesatañas

import {fade,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//..........menu despegable
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';

//...................buscador

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



//.........Buscador...........................................
const useStyles = makeStyles((buscar)=>({
  root: {
   
    
  },
  
  search: {
    position: 'relative',
    borderRadius: buscar.shape.borderRadius,
    backgroundColor: fade(buscar.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(buscar.palette.common.white, 0.25),
    },
     
    marginLeft: 0,
    width: '100%',
    [buscar.breakpoints.up('sm')]: {
      marginLeft: buscar.spacing(1),
      width: 'auto',
    },
  },
      searchIcon: {
        padding: buscar.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: buscar.spacing(1, 1, 1, 0),
       
        paddingLeft: `calc(1em + ${buscar.spacing(4)}px)`,
        transition: buscar.transitions.create('width'),
        width: '100%',
        [buscar.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));
//..............................................................................
//.............................................................................


//...........................pestañas......................
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
        
      },
    },
  }))(MenuItem);

//..............................................................................
//.......................................................................





 //...........boton iniciar secion
   const useStyles1 = makeStyles((boton) => ({
    boot: {
      '& > *': {
        margin: boton.spacing(1.5),
      },
    },
  }));
//...................................................
//......................................................



//.............Estilos.........................................
  const useStyles2 = makeStyles({
    pestanas: {
      flexGrow:1,
      margin:10,

    },
   menu: {
      padding:4,
    margin:13,
  
    },

   obras: {
      marginLeft:110,  
      
    },

    logo: {
        
    marginRight:10,
    
  
    },
  });
  
//...................................................................
  

//.........................................
//............................................
const NavBar = () => {

 // history para cambiar de pestaña
  const history = useHistory();


  //.   varibales...buscador...............................
   const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

//...................................
//........variables de las pestañas....................
const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//...................................


     const clase1 = useStyles1();

     const clase2 = useStyles2();


   
   
    return (


      <div className={clase2.menu}>
    <AppBar position="static" style={{background: 'linear-gradient(#0063b1,white'}}>
         <Toolbar >
         <ThemeProvider >
             <img className={clase2.logo} src={logo} alt="logo" style={{width:90}}/>
             <h1 className={clase2.obras}>OBRAS PUBLICAS</h1>
            
      <Paper className={clase2.pestanas}>
      <Tabs
        value={value} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="INICIO" onClick={()=>history.push("/")} />
    
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        PROYECTOS
      </Button>


      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={()=> history.push("USUARIO")}>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="USUARIO" />
        </StyledMenuItem>


        <StyledMenuItem onClick={()=> history.push("PROYECTO")}>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="PROYECTO" />
        </StyledMenuItem>


        <StyledMenuItem onClick={()=> history.push("PRESUPUESTO")}>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="PRESUPUESTO" />
        </StyledMenuItem>


      
        <StyledMenuItem onClick={()=> history.push("/PROGRAMACION")}>

          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          
          <ListItemText primary="PROGRAMACION" />
          </StyledMenuItem>
        

        <StyledMenuItem>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="AVANCE FISICO" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="AVANCE FINANCIERO" />
        </StyledMenuItem>


      </StyledMenu>



        <Tab label="ACERCA" />
      </Tabs>
    </Paper>


             </ThemeProvider>
             <div className={classes.root} >
        
             <div className={classes.search}  >
            <div className={classes.searchIcon} >
                 <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             
              </div>
              </div>
               <div className={clase1.boot}>
              <Button variant="contained" color="primary" onClick={()=> history.push("/Login")}>
               Iniciar Sesion
             </Button>
             
              </div>
             
              
              <Button variant="outlined" style={{color:"white"}} onClick={()=> history.push("/Registro")}>Registrarse</Button>
         </Toolbar>
      </AppBar>

      </div>


    );
}

export default NavBar
