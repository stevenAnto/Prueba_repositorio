import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {Link} from "react-router-dom";


import { motion } from "framer-motion"




  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
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
      marginTop: theme.spacing(2),
     
      },


    },
   
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"#263238",
    },

    large: {
   
      [theme.breakpoints.up("xs")]: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      
        
        },
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
      
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    
      
      
      },
      [theme.breakpoints.up("lg")]: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    
       
       
      },
      [theme.breakpoints.up("xl")]: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    
      
      },
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
     texto: {
      backgroundColor :"white",
      opacity:.7,
     borderRadius:15,
      
    },
    registro: {
      color:"white",
       
      },

  }));


const Registro = () => {

    const classes = useStyles();




    return (


      <motion.div
      animate={{
        transition: { duration: 1.5 },
        scale: [1, 2, 2, 1, 1],
        
      }}
      
      >


         <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar 
        
        alt="cesar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QFhHYj4jk9srUBn_NkMtjHFL2AzLPcux-Q&usqp=CAU"
       className={classes.large}
        
        
        
        >

             


          <CloudDownloadIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.iniciar}>
          Registro
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}  className={classes.texto}>


            <Grid item xs={12} sm={6}   >

              <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >

              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombres"
                autoFocus
              />

             </motion.div>

            </Grid>
            <Grid item xs={12} sm={6}>


            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Apellidos"
                autoFocus
              />

              </motion.div>
            </Grid>


            <Grid item xs={12} sm={6}>

            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                type="Number"
                label="DNI"
                autoFocus
              />


              </motion.div>
            </Grid>


            <Grid item xs={12} sm={6}>

            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Telefono"
                type="Number"
                name="lastName"
                autoComplete="lname"
              />

              </motion.div>
            </Grid>


            <Grid item xs={12}>

            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <TextField
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


            <Grid item xs={12}>
            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              </motion.div>
            </Grid>


            <Grid item xs={12}>

            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            
              >
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero recibir promociones y noticias sobre obras por correo electronico"
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
          >
            Registrar
          </Button>
           
            </motion.div>

          <Grid container justify="flex-end">
            <Grid item >
              <Link to="/Login" href="#" variant="body2"className={classes.registro}>
                Volver incio de Sesion
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

export default Registro
