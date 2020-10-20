import React, { Component } from 'react';
import  {Row,Col,Card,Table,Container} from "react-bootstrap";

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums : null,
        }
        this.props.user.id = 1
    }

    fetchAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums/?userId='+ this.props.user.id)
            .then(response => response.json())
            .then(result => this.setAlbums(result));
    }

    setAlbums(result) {
        this.setState({ albums : result });
    }

    componentDidMount() {
        this.fetchAlbums()
    }

    render() {
        if (this.state.albums === null) {
            return <h2>Loading albums...</h2>;
        } else
        return (
            <Container >
                <Card>
                    <Card.Header>
                        <Row>
                            <Col sm={10}>Album</Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.albums.map((album,idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{++idx}</td>
                                            <td>
                                                <a href="#" onClick={() => this.props.goToPage("PHOTOS",album.id)}>
                                                    {album.title}
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Album;