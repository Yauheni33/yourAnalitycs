import React from "react";
import Form from "../components/FormFeedback"

class Docs extends React.Component {
    render() {
        return(
            <section id="docs" className="docs section">
            <div className="container">
                <div className="docs-inner">
                <h2 className="title text-center">Опробовать демо</h2>  
                <Form />
                </div>
            </div>
        </section>
        )
    }
}

export default Docs;