import React, { Component } from 'react';
import ConfigFirebase, { storage } from '../../../common/ConnFirebase';

class PortifolioAdmin extends Component {
    constructor(props) {
        super(props)

        this.gravarRepositorio = this.gravarRepositorio.bind(this);
    }

    gravarRepositorio = (e) => {
        console.log('gravarRepositorio ', this.imagem.value);

        const arquivo = this.imagem.files[0];
        console.log('arquivo ', arquivo)
        const { name, size, type } = arquivo;

        let portifolioDB = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: ''
        }

        const fb = ConfigFirebase;

        const ref = storage.ref(name);
        ref.put(arquivo).then(res => {
            res.ref.getDownloadURL().then(url => {
                portifolioDB.imagem = url;
                fb.push('portifolio', { data: portifolioDB });
            });
        });


        e.preventDefault();

    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h2>Portifolio administrativo</h2>
                <form onSubmit={this.gravarRepositorio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulos</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="titulo" ref={(ref) => this.titulo = ref} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='descricao' ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" name='imagem' ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }

}

export default PortifolioAdmin;
