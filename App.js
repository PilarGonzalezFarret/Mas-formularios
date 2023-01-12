import React, {useState} from 'react';
import Formulario from './componentes/Formulario';
import Resultados from './componentes/Resultados';
/* import logo from './logo.svg'; */
import './App.css'; 

function App() {
  const [ state, setState ] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    comfirmpassword: ''
  });
  return (
    <div className="App">
      <Formulario input={state} setInput={setState}/>
      <Resultados data={state}/>
    </div>
  );
}

export default App;