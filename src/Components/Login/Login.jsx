import React, { Component } from 'react';
import  {auth} from '../../common/ConnFirebase';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            asAutenticado:false,
            asLogado:false,
            erro:false
        };

        this.email=null;
        this.senha=null;
        this.autenticar = this.autenticar.bind(this);
    }

    autenticar = () => {
        this.setState({asAutenticado:true, erro:false});
        const signIn = auth.signInWithEmailAndPassword(this.email.value,
            this.senha.value).then(res => {
                console.log('usuario logado', res);
                this.setState({asLogado:true});
            }).catch(err => {
                console.log('erro ', err);
                this.setState({erro:true, asAutenticado:false});
            })
    }

    render() {
        if(this.state.asLogado){
            return <Redirect to='/admin' />
        }

        return (
            <div style={{padding:'30px'}}>
                <h1>login</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='email' ref={(ref) => this.email = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='senha' ref={(ref) => this.senha = ref } />
                    </div>
                    <div>
                    {this.state.erro && <small id="emailHelp" className="form-text text-muted">Usuário ou senha inválido</small>}

                    </div>
                    <button type="button" disabled={this.state.asAutenticado===true} className="btn btn-primary" onClick={this.autenticar}>Acessar</button>
            </div>
        )
    }

}

export default Login;
