import React, { Component } from 'react';
import AdminMenu from './AdminMenu/AdminMenu';
import {Route} from 'react-router-dom';
import PortifolioAdmin from './Portifolio/Portifolio';

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Area administrativa</h2>
                <Route path='/' component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={PortifolioAdmin} />
            </div>
        )
    }

}

export default Admin;