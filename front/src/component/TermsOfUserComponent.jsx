import React, { Component } from 'react'
import TermsOfUserService from '../service/TermsOfUserService';

const INSTRUCTOR = 'termo'

class TermsOfUserComponent extends Component {
    //props passado para o componente como parâmetros de funções.
    constructor(props) {
        super(props)

        //state gerenciavel dentro do componente(como variáveis declaradas dentro de uma função)
        this.state = {
            message: '',
            termoUso: '',
            resumoTermo: '',
            versaoTermo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateClicked = this.updateClicked.bind(this)
        this.addTermsOfUserClicked = this.addTermsOfUserClicked.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    handleChange(event) {
        this.setState({
            termoUso: event.target.form.termoUso.value,
            resumoTermo: event.target.form.resumoTermo.value,
            versaoTermo: event.target.form.versaoTermo.value});
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        TermsOfUserService.retrieve(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ termosOfUser: response.data })
                }
            )
    }

    deleteClicked(id) {
        TermsOfUserService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refresh()
                }
            )

    }

    addTermsOfUserClicked() {
        console.log('addTermsOfUserClicked: ' + this.state.termoUso +' - '+ this.state.resumoTermo  +' - '+ this.state.versaoTermo)
        TermsOfUserService.create(this.state.termoUso, this.state.resumoTermo, this.state.versaoTermo)
        .then(
            response => {
                this.setState({ message: `Criado com sucesso` })
                this.refresh()
            }
        )
        this.props.history.push(`/terms/${this.state}`)
    }

    updateClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/terms/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Gliese Termo de Uso</h3>
                <div className="container">
                    <form>
                        <div class="form-group">
                            <label for="termoUso">Termo de uso</label>
                            <textarea class="form-control" id="termoUso" value={this.state.termoUso} onChange={this.handleChange} rows="3" placeholder="Termo de uso"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="resumoTermo">Resumo</label>
                            <textarea class="form-control" id="resumoTermo" value={this.state.resumoTermo} onChange={this.handleChange} rows="2" placeholder="Resumo do termo"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="versaoTermo">Versão</label>
                            <input type="text" class="form-control" id="versaoTermo" value={this.state.versaoTermo} onChange={this.handleChange} placeholder="V0.0"></input>
                        </div>
                    </form>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTermsOfUserClicked}>Inserir novo termo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TermsOfUserComponent