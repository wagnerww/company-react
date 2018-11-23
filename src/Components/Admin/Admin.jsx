import React, { Component } from 'react';
import AdminMenu from './AdminMenu/AdminMenu';
import {Route, Redirect} from 'react-router-dom';
import PortifolioAdmin from './Portifolio/Portifolio';
import {auth} from '../../common/ConnFirebase';

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            asLogando:false,
            asAutenticado:false,
            user:null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            console.log('logado ', user);
            this.setState({
                asLogando:false,
                asAutenticado: true,
                user
            })
        })
    }

    render() {
        if(this.state.asLogando){
            return <p>aguarde....</p>
        }

        if(!this.state.asAutenticado){
            console.log('nao logado');
            return <Redirect to='/login' />
        }

        return (
            <div>
                <h2>Area administrativa</h2>
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={PortifolioAdmin} />
            </div>
        )
    }

}

export default Admin;