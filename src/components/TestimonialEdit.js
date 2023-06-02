import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const TestimonialEdit = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getPostById()
    }, [])

    const getPostById = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + `/api/testimonials/${id}`)
        const data = await response.data.data

        setName(data.name)
        setDescription(data.description)
    }

    const editTestimonial = async (event) => {
        event.preventDefault()

        await axios.patch(process.env.REACT_APP_API_URL + `/api/testimonials/update/${id}`, {
            name: name,
            description: description
        })
            .then(() => { navigate('/') })
            .catch((error) => { console.log(error.response.data) })
    }

    return (
        <>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col md="{12}">
                        <Card className="border-0 rounded shadow-sm">
                            {/* section getting-started*/}
                            <section id="getting-started__Section">
                                <div className="container getstarted">
                                    <div
                                        className="card text-center sewa text-white"
                                        style={{ width: "100%" }}
                                    >
                                        <div className="card-body" data-aos="fade-down">
                                            <h1 className="card-title fw-bold text-white getting-started__title">
                                                Tuliskan Pendapatmu untuk Binar Car Rental
                                            </h1>
                                            <p className="card-text text-white font-bold">
                                                Some quick example text to build on the card title and make up
                                                the bulk of the card's content.
                                            </p>
                                            <Form onSubmit={editTestimonial}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nama" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Control as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Messages" />
                                                </Form.Group>
                                                <button className="btn btn-success mt-3" type="submit">
                                                    Simpan
                                                </button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* end section getting-started*/}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TestimonialEdit