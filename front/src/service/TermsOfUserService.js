import axios from 'axios'
import { stringify } from 'querystring';

const query = 'sua_query'
const URL = 'http://localhost:8080'
const API_URL = `${URL}/link/${query}`

class TermsOfUserService {

    retrieveAll(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/terms`);
    }

    retrieve(name, id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/terms/${id}`);
    }

    delete(name, id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/terms/${id}`);
    }

    update(name, id, course) {
        //console.log('executed service')
        return axios.put(`${API_URL}/terms/${id}`, course);
    }

    create(termoUso, resumoTermo, versaoTermo) {
        console.log('executed service: '+termoUso+" - "+resumoTermo+" - "+versaoTermo)
        let terms = {
            description : termoUso,
            resume: resumoTermo,
            version: versaoTermo
        } 
        console.log('executed service json: '+JSON.stringify(terms))
        return axios.post(`${API_URL}/terms`, terms);
    }
}

export default new TermsOfUserService()