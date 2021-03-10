import React from 'react';
import './LeftSide.css'
import { Col, Row, Button,  Form, FormGroup, Label, Input, Alert} from 'reactstrap';

function LeftSide() {
    function check(){
        const email = document.querySelector('#exampleEmail');
        const nome = document.querySelector('#exampleNome');
        const sobrenome = document.querySelector('#exampleSobrenome');
        const endereço = document.querySelector('#exampleAddress');
        const cidade = document.querySelector('#exampleCity');
        const estado = document.querySelector('#exampleState');
        const CEP = document.querySelector('#exampleZip');

        const emailVazio = document.querySelector('#emailError');
        console.log(emailVazio)

        
    }
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
                        <Alert color="danger" id="emailError">
                            Este campo não pode ser vazio
                        </Alert>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="exampleNome">Nome</Label>
                            <Input type="text" name="nome" id="exampleNome" placeholder="Ex: Carlos" />
                            <Alert color="danger">
                                Este campo não pode ser vazio
                            </Alert>
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSobrenome">Sobrenome</Label>
                            <Input type="text" name="sobrenome" id="exampleSobrenome" placeholder="Ex: Silva"/>
                            <Alert color="danger">
                                Este campo não pode ser vazio
                            </Alert>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">Endereço</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Ex: Rua aaaaaa, 123456 - Bairro bbbbbbbbb"/>
                    <Alert color="danger">
                        Este campo não pode ser vazio
                    </Alert>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">Cidade</Label>
                        <Input type="text" name="city" id="exampleCity" placeholder="Ex: São Paulo"/>
                        <Alert color="danger">
                            Este campo não pode ser vazio
                        </Alert>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="exampleState">UF</Label>
                        <Input type="select" name="select" id="exampleState">
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
                        <Alert color="danger">
                            Este campo não pode ser vazio
                        </Alert>
                    </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Button color="success" onClick={check}>Seguir para método de pagamento</Button>
                </FormGroup>
                </div>
            </Form>
        </div>
    )
}

export default LeftSide;