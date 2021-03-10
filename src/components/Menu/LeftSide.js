import React from 'react';
import './LeftSide.css'
import { Col, Row, Button,  Form, FormGroup, Label, Input, Alert, Container} from 'reactstrap';

function LeftSide() {
    function check(){
        
        const email = document.querySelector('#exampleEmail');
        const nome = document.querySelector('#exampleNome');
        const sobrenome = document.querySelector('#exampleSobrenome');
        const endereco = document.querySelector('#exampleAddress');
        const cidade = document.querySelector('#exampleCity');
        const estado = document.querySelector('#exampleState');
        const cep = document.querySelector('#exampleZip');
        
        const emailVazio = document.querySelector('#emailError');
        const nomeVazio = document.querySelector('#nomeError');
        const sobrenomeVazio = document.querySelector('#sobrenomeError');
        const enderecoVazio = document.querySelector('#enderecoError');
        const cidadeVazio = document.querySelector('#cidadeError');
        const cepVazio = document.querySelector('#cepError');

        emailVazio.hidden = true;
        nomeVazio.hidden = true;
        sobrenomeVazio.hidden = true;
        enderecoVazio.hidden = true;
        cidadeVazio.hidden = true;
        cepVazio.hidden = true;

        if(!email.value) emailVazio.hidden = false;
        if(!nome.value) nomeVazio.hidden = false;
        if(!sobrenome.value) sobrenomeVazio.hidden = false;
        if(!endereco.value) enderecoVazio.hidden = false;
        if(!cidade.value) cidadeVazio.hidden = false;
        if(!cep.value) cepVazio.hidden = false;

        
    }
    return(
        
        <div className="LeftSide">

            <Form className="formzim">
                
            <div className="bordinha">
            <Container>
                <FormGroup>
                        <Label for="exampleEmail" className="titulo">Informações do usúario</Label>
                </FormGroup>
                <Row form >
                <Col md={12}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Ex: xzy@abc.com" />
                        <Alert color="danger" id="emailError" hidden>
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
                            <Alert color="danger" id="nomeError" hidden>
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
                            <Alert color="danger" id="sobrenomeError" hidden>
                                Este campo não pode ser vazio
                            </Alert>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">Endereço</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Ex: Rua aaaaaa, 123456 - Bairro bbbbbbbbb"/>
                    <Alert color="danger" id="enderecoError" hidden>
                        Este campo não pode ser vazio
                    </Alert>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">Cidade</Label>
                        <Input type="text" name="city" id="exampleCity" placeholder="Ex: São Paulo"/>
                        <Alert color="danger" id="cidadeError" hidden>
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
                        <Alert color="danger" id="cepError" hidden>
                            Este campo não pode ser vazio
                        </Alert>
                    </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Button color="success" onClick={check}>Seguir para método de pagamento</Button>
                </FormGroup>
                </Container>
                </div>
            </Form>
        </div>
    )
}

export default LeftSide;