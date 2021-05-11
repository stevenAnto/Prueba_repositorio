import React from 'react'
import "./Programacion.css"
import {Box, Grid} from '@material-ui/core'
import {Link} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import useMediaQuery from '@material-ui/core/useMediaQuery';

function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
      
       
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }


const useStyles1 = makeStyles((prueba) =>({
   pop:{
    [prueba.breakpoints.up("sm")]: {
      fontSize: 10
    },
    [prueba.breakpoints.up("md")]: {
      fontSize: 30
    },
    [prueba.breakpoints.up("lg")]: {
      fontSize: 40
    }
   }

}))



const useStyles = makeStyles((theme) => ({
   paper: {
     marginTop: theme.spacing(20),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     
     
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.primary.main,
   },
   form: {
     width: '100%', 
     marginTop: theme.spacing(3),
     [theme.breakpoints.up("sm")]: {
      fontSize: 10
    },
    [theme.breakpoints.between("md")]: {
      fontSize: 30
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 40
    }



   },
  
   submit: {
     margin: theme.spacing(3, 0, 2),
     
   },
 }));
 









const Programacion = () => {

   const matches = useMediaQuery('(min-width:600px)');
  
   const classes = useStyles();

   const classes1 = useStyles1();


    return (
      
      <Container className={classes1.pop}  component="main" maxWidth="xs" style={{background: "white", borderRadius:"10%"}}>
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon  />
        </Avatar>
        <Typography className={classes1.pop} component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} >
            
            
            <Grid item xs={12} >
              <p>cesar</p>
              <TextField
                
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Contraseña"
                label="Contraseña"
                type="password"
                id="Contraseña"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
           
          >
            Iniciar
          </Button >
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/Registro" href="#" variant="body2" >
                Registrarse
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    )
}

export default Programacion
