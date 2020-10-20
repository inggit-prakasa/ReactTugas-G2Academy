import React, { Component } from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos : null
        }
    }

    fetchPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos/?albumId='+ this.props.album)
            .then(response => response.json())
            .then(result => this.setPhotos(result));
    }

    setPhotos(result) {
        this.setState({ photos : result });
    }

    componentDidMount() {
        this.fetchPhotos()
    }

    render() {
        if (this.state.photos === null) {
            return <h2>Loading photos...</h2>;
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
                                    <th>Thumbnail</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.photos.map((photo,idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>{++idx}</td>
                                                <td>
                                                    <a href={photo.url}>
                                                        {photo.title}
                                                    </a>
                                                </td>
                                                <td>
                                                    <img src={photo.thumbnailUrl} alt={photo.title}/>
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

export default Photos;