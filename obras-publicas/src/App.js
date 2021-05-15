
import * as React from "react";
import Programacion from "./componentes/Modulos/Programacion/Programacion"
import Usuario from "./componentes/Modulos/Usuario/Usuario"

import Proyecto from "./componentes/Modulos/Proyecto/Proyecto"
import Registro from "./componentes/Registro/Registro"

import Acerca from "./componentes/Modulos/Acerca/Acerca"


import Imagen from "./componentes/Imagen/Imagen"
import NavBar from "./componentes/NavBar/NavBar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./componentes/Login/Login"



const App = () => {
  return (

   
     <Router>
       <NavBar/>

       
       <div className="example-container">
           <Switch>
            <Route path="/Acerca">
             <Acerca/>
            </Route>
         
            <Route  path="/PROGRAMACION">
           <Programacion/>
           

           </Route>





         
         
       
        


          




         <Route path="/Login">
            <Login/>
        </Route>
        <Route path="/Registro">
            <Registro/>
        </Route>



        <Route  path="/USUARIO">
           <Usuario/>
         </Route>
         <Route  path="/PROYECTO">
           <Proyecto/>
         </Route>
        
         
          <Route  path="/">
           <Imagen/>
         </Route>

         
         
         

        </Switch>

 </div>
    </Router>
    
  )
}

export default App
