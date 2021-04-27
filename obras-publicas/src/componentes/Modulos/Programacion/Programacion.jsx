import React from 'react'
import "./Programacion.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));





const Programacion = () => {


  const classes = useStyles();

  const history = useHistory();






    return (
      <form className={classes.container} noValidate>

             <Button variant="contained" color="primary" onClick={()=> history.push("/TablaCostoDirecto")}>
              enviar
             </Button>

      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
       

    )
}

export default Programacion
