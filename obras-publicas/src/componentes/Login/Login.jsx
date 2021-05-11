import React from 'react'
import {Link} from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { motion } from "framer-motion"











const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  large: {
   
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    
      
      },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
  
    
    
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
  
     
     
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
  
    
    },
  },


}));




  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
      
    },
   
    form: {
     

      [theme.breakpoints.up("xs")]: {
        
        width: 150, 
      },
    [theme.breakpoints.up("sm")]: {
    
      width: 200, 
      
    },
    
    [theme.breakpoints.up("md")]: {
     
      width: 300, 
     
    },
    [theme.breakpoints.up("lg")]: {
      
      width: '100%', 
      marginTop: theme.spacing(3),
      
     
      },



      
    },
   
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"#263238",
      
    },
    texto: {
     
       backgroundColor :"white",
        opacity:.7,
        borderRadius:15,
        margin:10,
     



    },

    fondo: {
      padding:20,
     

     
    },

    iniciar: {
    
     
     [theme.breakpoints.up("xs")]: {
      color:"white",
      fontSize:10,
     
    },
    [theme.breakpoints.up("sm")]: {
  
    color:"white",
    fontSize:15,
    
  },
  
  [theme.breakpoints.up("md")]: {
   
    color:"white",
     fontSize:25,
   
  },
  [theme.breakpoints.up("lg")]: {
   
    color:"white",
     fontSize:35,
   
    },





    },

    registro: {
     color:"white",
      
     },
  }));
  










const Login = () => {

    const classes = useStyles();
    const clases1 = useStyles1();


    return (

      <motion.div
      animate={{
        transition: { duration: 1.5 },
        scale: [1, 2, 2, 1, 1],
        
      }}
      
      >
        <Container component="main" maxWidth="xs" className={classes.fondo}>
      <CssBaseline />
      <div className={classes.paper}>




      <motion.div
         whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
         >
        <Avatar
         
         alt="cesar"
         src="https://as.com/meristation/imagenes/2021/01/20/noticias/1611162270_013847_1611162672_noticia_normal.jpg"
        className={clases1.large}

        >
          
        </Avatar>
     </motion.div>




        <Typography className={classes.iniciar}>
          Iniciar Sesion
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            

            <Grid item xs={12} className={classes.texto} >
            <motion.div
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
            >
            
              <TextField
               style={{color:"white"}}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
              />
            
            </motion.div>
            </Grid>

            <Grid item xs={12}className={classes.texto}>


            <motion.div
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
            >
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

              </motion.div>
            </Grid>
             
          </Grid>
         <motion.div
         whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
         >
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

         </motion.div>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/Registro" href="#" variant="body2" className={classes.registro}>
                Registrarse
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
    </motion.div>
    )
}

export default Login
