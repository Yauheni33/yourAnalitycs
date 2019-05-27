import React from 'react'
import Table from 'react-bootstrap/Table'


class AdminFeedback extends React.Component {
    createTable() {
        return(
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Name Channel</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.records.map((element) => {
                        element = JSON.parse(JSON.stringify(element));
                        return( 
                        <tr key={element['id']}>
                            <td>{element['id']}</td>
                            <td>{element['name']}</td>
                            <td>{element['surname']}</td>
                            <td>{element['name_channel']}</td>
                            <td>{element['email']}</td>
                        </tr>
                        )}
                    )}
                </tbody>
            </Table>
        );
    }

    render() {
        const table = this.createTable()
        return(
            table
        );
    }
}

export default AdminFeedback;