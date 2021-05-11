import React from 'react'
import logo from "../../assets/logotipo/logo2.png"
import {Link,useHistory} from "react-router-dom"
import "./NavBar.css"

//......navbar...........
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box,Container,Grid, Typography} from '@material-ui/core'


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


import { motion } from "framer-motion"

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





 //...........RESPONSIVE.......................................
 //......................................................

   const useStyles = makeStyles((Responsive) => ({

    offf: Responsive.mixins.toolbar,


//...........LOGO.....................

    logo:{
      [Responsive.breakpoints.up("xs")]: {
        width: 43,
        position:"relative",
        margin: Responsive.spacing(-2),
        marginBottom:-6,
        
       },
     [Responsive.breakpoints.up("sm")]: {
      width: 60,
      position:"relative",
      margin: Responsive.spacing(-3),
      fontSize: 15,
       margin:5,
     },
     
     [Responsive.breakpoints.up("md")]: {
      width: 70,
      position:"relative",
      fontSize: 20,
      margin:5,
      
     },
     [Responsive.breakpoints.up("lg")]: {
       width: 90,
       position:"relative",
       fontSize: 30,
       margin:5,
     },

     
  },

//...........OBRAS PUBLICAS................

  obras:{
    [Responsive.breakpoints.up("xs")]: {
      fontSize: 9,
      width:90,
      margin: Responsive.spacing(1),
    
     },
   [Responsive.breakpoints.up("sm")]: {
   
   
    
    fontSize: 12,
    width:120,
    margin: Responsive.spacing(2),
    
   },
   
   [Responsive.breakpoints.up("md")]: {
    
    
    fontSize: 20,
    width:160,
    margin: Responsive.spacing(3),
    
   },
   [Responsive.breakpoints.up("lg")]: {
     
     
     fontSize: 43,
     width: 400,
     
    
     },

   },



//...........PESTAÑAS ...............




tabs:{

  [Responsive.breakpoints.up("xs")]: {
    width: 125,
    height:30,
    
   },
 [Responsive.breakpoints.up("sm")]: {
  width: 250,
  fontSize: 11,
  
 },
 
 [Responsive.breakpoints.up("md")]: {
  width: 350,
  
  
 },
 [Responsive.breakpoints.up("lg")]: {
   width: 490,
   height:50,
  
 },

},





//............INICIO..................

inicio:{

  [Responsive.breakpoints.up("xs")]: {
    
    marginRight:-20,
    marginTop:-6,
   
    fontSize: 7,
   },
 [Responsive.breakpoints.up("sm")]: {
  width: 60,
  fontSize: 11,
  
  
  
 },
 
 [Responsive.breakpoints.up("md")]: {
  width: 70,
  
  
 },
 [Responsive.breakpoints.up("lg")]: {
   width: 90,
   fontSize: 17,
  
  
 },
 [Responsive.breakpoints.up("xl")]: {
  width: 90,
  fontSize: 17,
  
 
 
},

},



//.....BOTON MODULOS......................

busqueda:{

  [Responsive.breakpoints.up("xs")]: {
    fontSize: 7,
    width:20,
    height:30,
   },
 [Responsive.breakpoints.up("sm")]: {
   
   fontSize: 8.5,
 
   
  
 },
 
 [Responsive.breakpoints.up("md")]: {
  width:100,
  
  
 },
 [Responsive.breakpoints.up("lg")]: {
  width:150,
  height:48,
  fontSize: 14,
  
 },

},




//......... ACERCA................

acerca:{

  [Responsive.breakpoints.up("xs")]: {
    width: 30,
    marginLeft:-20,
    marginTop:-6,
    fontSize: 7,
   },
 [Responsive.breakpoints.up("sm")]: {
  width: 60,
  fontSize: 11,
  
  
  
 },
 
 [Responsive.breakpoints.up("md")]: {
  width: 70,
  
  
 },
 [Responsive.breakpoints.up("lg")]: {
   width: 80,
   fontSize: 17,
  
  
 },
 [Responsive.breakpoints.up("xl")]: {
  width: 90,
  fontSize: 17,
  
 
 
},

},






//...........BOTON INICIAR SECION.......
iniciarSecion: {
  [Responsive.breakpoints.up("xs")]: {
  width: 10,
  height:25,
  fontSize: 7,
  marginLeft:2,
  marginBottom:1,

  
  },
[Responsive.breakpoints.up("sm")]: {
width: 100,


fontSize: 8,
marginLeft:15,
marginBottom:1,
},

[Responsive.breakpoints.up("md")]: {
width: 130,
marginLeft:30,
fontSize: 12,


},
[Responsive.breakpoints.up("lg")]: {
 width: 180,
height:45,
 fontSize: 17,
 marginLeft:45,
 
 
},
[Responsive.breakpoints.up("xl")]: {
width: 300,

fontSize: 20,
marginLeft:140,

},
},




//..........REGISTRAR........................

registrar:{

  [Responsive.breakpoints.up("xs")]: {
    fontSize: 6.5,
    width:5,
    marginLeft:8,
   },
 [Responsive.breakpoints.up("sm")]: {
  width:70,
   fontSize: 8.5,
 
   
  
 },
 
 [Responsive.breakpoints.up("md")]: {
  width:100,
  fontSize: 12,
  
 },
 [Responsive.breakpoints.up("lg")]: {
  width: 180,
  marginLeft:10,
  fontSize: 17,
  
  margin: Responsive.spacing(4),
 },

},



}));

  

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


    
  

   






    return (



  <motion.div
  
  animate={{
    transition: { duration: 1.5 },
    scale: [1, 2, 2, 1, 1],
    
  }}
  
  
  >

     <Grid container >
    <AppBar  style={{background: 'linear-gradient(#0063b1,white'}}>
         <Toolbar  className={classes.offf}>


         <Grid item xs={1}>
         <Box >
           
          
             <img className={classes.logo}    src={logo} alt="logo"/>
            
            </Box>
           </Grid>
            <div  >
           <Grid item xs={3} >
             <Box   >
             <Typography className={classes.obras}>
                    OBRAS PUBLICAS
             </Typography>
            </Box>
             </Grid>
           </div>
             <Grid item xs={4}>    
      <Paper className={classes.tabs}>
      <Tabs
      
        value={value} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.inicio} label="INICIO" onClick={()=>history.push("/")} />
    
        <Button
        className={classes.busqueda}
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



        <Tab className={classes.acerca} label="ACERCA" />
      </Tabs>
    </Paper>

    </Grid>
           

              <Grid item xs={2} >  
               <motion.div
               whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
               
               >

               <Box >
              <Button className={classes.iniciarSecion} variant="contained" color="primary" onClick={()=> history.push("/Login")}>
               Iniciar Sesion
             </Button>
             </Box>
              </motion.div>
              </Grid>

              <Grid item xs={2}>  
              <motion.div
               whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
               
               >
              <Box>
              <Button className={classes.registrar} variant="outlined" style={{color:"white" }} onClick={()=> history.push("/Registro")}>Registrarse</Button>
              </Box>

              </motion.div>
              </Grid>
            
         </Toolbar>
      </AppBar>
   
 </Grid>
   <div className={classes.offf}></div>
</motion.div>

    );
}

export default NavBar
