
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from "./titleData";

import {Box,Container,Grid, Typography} from '@material-ui/core'
import { motion } from "framer-motion"


import fondo from "../Acerca/Acerca.css"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
     
    },
    gridList: {
      width: 500,
      height: 450,
      
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    
    obras:{
      color:"white",
      textAlign:"center"
    },
    nosotros:{
      borderRadius:5,
      background:'rgba(255, 255, 255, 0.54)',
      fontWeight:"bold",
    
     margin:100,
    }

  }));







const Acerca = () => {

    const classes = useStyles();


    return (
        
        <Grid container >
              
             
            <Grid item xs={6} className="fondo1">

            <Typography className={classes.nosotros}>
              
              
              <div>
            Somos una empresa sólida y comprometida, dedicada a brindar soluciones para sus proyectos inmobiliarios, obras civiles, servicios generales y  remodelaciones en general.
            Trabajamos 24X7 para poder ofrecerle el mejor servicio en cualquier momento que lo necesite.
               </div>
               <br></br>
               <div>
            MISION:
            Brindar un servicio eficiente y de calidad, de acuerdo a las especificaciones del requerimiento en el tiempo establecido para cumplir con las expectativas de nuestro cliente, promoviendo las buenas prácticas de trabajo, salud y seguridad de nuestros colaboradores.
               </div>
               <br></br>
             <div>
            VISION:

            Ser la empresa líder en servicios de mantenimiento e ingeniería a nivel nacional.
            </div>
            
            </Typography>

            </Grid>
            
            <Grid item xs={6} className="fondo2">
            <div  className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.obras}>OBRAS EN DISTINTOS DEPARTAMENTOS</ListSubheader>

          </GridListTile>

          {tileData.map((tile) => (




            <GridListTile key={tile.img}>
<motion.div
whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
>

              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={



                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />

            </motion.div>  
            </GridListTile>


          ))}
        </GridList>
      </div>
      </Grid>


        </Grid>
        
       



    )
}

export default Acerca
