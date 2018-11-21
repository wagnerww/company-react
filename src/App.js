import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Site from './pagina';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Inicio from './Components/Inicio/Inicio';
import Servicos from './Components/Servicos/Servicos';
import Portifolio from './Components/Portifolio/Portifolio';
import Precos from './Components/Precos/Precos';
import Contatos from './Components/Contatos/Contatos';
import Rodape from './Components/Rodape/Rodape';

import Admin from './Components/Admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/portifolio' component={Portifolio} />
          <Route path='/precos' component={Precos} />
          <Route path='/contato' component={Contatos} />
          <Route path='/admin'component={Admin} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
