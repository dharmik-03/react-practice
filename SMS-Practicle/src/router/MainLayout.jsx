import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navbars } from "../ui/navbars"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbars />
                    <br />
                    <br />
                    <Outlet/>
                </Col>

            </Row>
     </Container >
    )
}

export default MainLayout