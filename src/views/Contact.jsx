import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Contact = () => {
    return (
        <>
            < h1 className="mt-5 text-center  "> Cuentanos, ¿en que te podemos ayudar?</h1 >
            <Form className=" text-center col-11 col-md-8 m-auto "  >
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label className="fw-normal">Correo:</Form.Label>
                    <Form.Control autoFocus type="text" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label className="fw-normal">Descripción</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Button className="mb-5" variant="danger" type="submit" size="lg" >
                    Enviar
                </Button>
            </Form>
        </>
    )
}

export default Contact