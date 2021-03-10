import React from 'react';
import './LeftSide.css'
import { Col, Row, Button,  Form, FormGroup, Label, Input} from 'reactstrap';

function LeftSide() {
    return(
        <div className="LeftSide">
            <Form className="formzim">
            <div className="container">
                <FormGroup>
                        <Label for="exampleEmail" className="titulo">Informações do usúario</Label>
                </FormGroup>
                <Row form >
                <Col md={12}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Ex: xzy@abc.com" />
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="examplePassword">Nome</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Ex: Carlos" />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">Sobrenome</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Ex: Silva"/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress2">Endereço</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Ex: Rua aaaaaa, 123456 - Bairro bbbbbbbbb"/>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">Cidade</Label>
                        <Input type="text" name="city" id="exampleCity" placeholder="Ex: São Paulo"/>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="exampleState">UF</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option> </option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="exampleZip">CEP</Label>
                        <Input type="text" name="zip" id="exampleZip" placeholder="Ex: 00000-000"/>
                    </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Button color="success">Seguir para método de pagamento</Button>
                </FormGroup>
                </div>
            </Form>
        </div>
    )
}

export default LeftSide;