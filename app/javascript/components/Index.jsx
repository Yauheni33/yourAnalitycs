import React from "react";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '../components/Container'

class Index extends React.Component {
    render() {
        return(
            <Router>
                <Header />
                <Container />
                <Footer />
            </Router>
        );
    }
}

export default Index;