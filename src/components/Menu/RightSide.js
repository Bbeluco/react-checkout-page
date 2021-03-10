import React from 'react';
import './RightSide.css'
import { Container, Col, Row,} from 'reactstrap';

function RightSide() {
    return(
        <div className="rightSide">
            <div className="header">
                <Container>
                    <Row className="produto">
                        <Col md={2}>
                            <img src="https://lh3.googleusercontent.com/zZpCsH2uswobVSd2L2OplA4ad59L2arVxYtsFpJSEc3hqYB5DeyhfosH8VO4hgOUxi9oJHsRNHFsUQEV98au4w" class="productImg"/>
                        </Col>
                        <Col md={7} className="teste">
                            <h4>Capacete de dima <p class="description">Te preotege dos perigos</p></h4>
                        </Col>
                        <Col md={1} className="teste">
                            <h4 class="price">$25.00</h4>
                        </Col>
                    </Row> 
                </Container>
            </div>  
        </div>
    )
}


export default RightSide;