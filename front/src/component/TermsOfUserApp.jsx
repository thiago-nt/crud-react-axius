import React, { Component } from 'react';
import TermsOfUserComponent from './TermsOfUserComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TermsComponent from './TermsComponent';

/**
 * Thiago.Tavares
 * Crud com react e Axius
 */
class TermsOfUserApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={TermsOfUserComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default TermsOfUserApp