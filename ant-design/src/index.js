import React from 'react';
import {render} from 'react-dom';
import { useState } from 'react'

import axios from 'axios';

import { ClockCircleOutlined, Html5Outlined,  CheckSquareOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';
import {PageHeader, Button, Input, Space, List, Dropdown, Menu, Checkbox, Radio, DatePicker, Progress, Slider, Card, Row, Col, Timeline} from 'antd'

function TesteIcone() {
    
    return <div style={{padding: "30px"}}><Html5Outlined /><ClockCircleOutlined/><CheckSquareOutlined /></div>

}

function TesteHeader() {

    const [nome, setNome] = useState("")

    const [alunos, setAlunos] = useState(['Joao'])

    const [ativo, setAtivo] = useState(false)

    const [despertador, setDespertador] = useState(1)

    const [percentual, setPercentual] = useState(10)

    const [nota, setNota] = useState(5)

    const [atividadeDigitada, setAtividadeDigitada] = useState("")

    const [atividades, setAtividades] = useState([])

    const routes = [ {path: 'nivel_um', breadcrumbName: 'Menu'},
    {path: 'nivel_dois', breadcrumbName: 'Cadastro' },
    {path: 'nivel_tres', breadcrumbName: 'Aluno'}];

    const botaoClick = () => {
        alert(`Boa noite ${nome}`)
    }

    const selecionado = (v) => {
        console.log(v.target.id)
    }

    const adicionar = () => {
        let atual = [...alunos]
        atual.push(nome)
        setAlunos(atual)
        setNome("")
    }

    const sel = (e) => {
        console.log(e.key)
    }

    const ativar = (e) => {
        console.log(e.target.checked)
        setAtivo(e.target.checked)
    }

    const itensDropDown = ( <Menu>
        <Menu.Item key="0" onClick={sel}><Html5Outlined/>HTML 5</Menu.Item>
        <Menu.Item key="1" onClick={sel}><ClockCircleOutlined />Despertar</Menu.Item>
        <Menu.Divider key="2"/>
        <Menu.Item key="3" onClick={sel}>Sair</Menu.Item>
        </Menu> )

    const acordar = (e) => {
        setDespertador(e.target.value)
        if (e.target.value == 1) {
            setAtivo(false)
        }
    }

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    }

    const aumenta = () => {
        setPercentual(percentual + 10)
    }

    const diminui = () => {
        setPercentual(percentual - 10)
    }

    const adicionarAtividade = () => {
        let tmp = [...atividades]
        tmp.push(atividadeDigitada)
        setAtividades(tmp)
        console.log(tmp)

    }

    // obtem a lista de trabalhos cadastrados
    const obterTrabalhos = () => {

        axios.get("https://trabalho-react.glitch.me/trabalho").then((resposta) => {
            console.log(resposta.data)
            let tmp = [...atividades]
            for (let i = 0; i < resposta.data.length; i++) {
                tmp.push(resposta.data[i].titulo)
            }
            setAtividades(tmp)
            console.log(tmp)
        })

    }

    // cria um novo usuario para o aluno
    const criarUsuario = () => {
        const dados = {username: nome}
        axios.post("https://trabalho-react.glitch.me/aluno", dados).then((res) => {
            if (res.status == 200) {
             console.log(res.data)
            }
            }).catch ((err) => {
             console.log('ERRO: ', err);
            })
    }

return <>
            <PageHeader title="Cadastro"
            subTitle="Cadastrar notas"
            breadcrumb = {{routes}}
            style={{border: "1px solid rgb(235, 237, 240)"}}
            onBack={() => {alert('Voltar')}}/>
            <Space direction="vertical">
                <Input addonBefore="Nome do aluno:" placeholder="Informe aqui o nome completo do aluno" 
                        value={nome} 
                        onChange={(e) => {
                            console.log(e.target.value)
                            setNome(e.target.value)}}/>
                <Space>
                    <Button type="primary" onClick={botaoClick} icon={<CheckSquareOutlined />}>Mensagem</Button>
                    <Button type="primary" onClick={adicionar} icon={<ClockCircleOutlined />}>Adicionar</Button>

                    <Button type="primary" onClick={criarUsuario} icon={<ClockCircleOutlined />}>Criar Usuario</Button>


                    <Checkbox onChange={ativar} checked={ativo} disabled={despertador == 0 ? false : true}>Ativar planejamento</Checkbox>
                    <Radio.Group value={despertador} onChange={acordar}>
                        <Radio key="0" value={0}>Acordar</Radio>
                        <Radio key="1" value={1}>Dormir</Radio>
                    </Radio.Group>
                </Space>
                <List bordered header={<div>Lista de Alunos</div>} 
                      dataSource={alunos}
                      renderItem={item => (<List.Item id={item} onClick={selecionado}>{<CheckSquareOutlined />} {item}</List.Item>)
                      } />
                <Dropdown trigger={['click']} overlay={itensDropDown}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Clique aqui para selecionar<DownOutlined /></a>
                </Dropdown>
                <DatePicker onChange={onChangeDate} />
                <Progress percent={percentual}/>
                <Progress percent={percentual} type="circle"/>
                <Button.Group>
                    <Button onClick={aumenta}><CaretUpOutlined /></Button>
                    <Button onClick={diminui}><CaretDownOutlined /></Button>
                </Button.Group>

                <Slider min={0} max={10} value={nota} onChange={(val) => setNota(val)}/>
                <Button disabled={nota < 6 ? true : false}>Enviar nota {nota}</Button>

                <Card color="green" bordered={true} title="Atividade Critica">Terminar a refatoração do código Java</Card>

                <Timeline>

                      <Timeline.Item color="green">Início</Timeline.Item>
                      <Timeline.Item>Marginal Pinheiros</Timeline.Item>
                      <Timeline.Item dot={<ClockCircleOutlined />}>Butantã</Timeline.Item>
                      <Timeline.Item color="red">Fim</Timeline.Item>

                </Timeline>

            </Space>

            <div>
                <Row gutter={[5, 5]}>
                    <Col><Button>Botao 1</Button></Col>
                    <Col span={2}><Button>Botao 2</Button></Col>
                </Row>

                <Row gutter={[5, 5]}>
                    <Col><Button>Botao 1</Button></Col>
                    <Col><Button>Botao 2</Button></Col>
                    <Col><Button>Botao 3</Button></Col>
                </Row>

                <Row gutter={[5, 5]}>
                    <Col span={20} style={{border: "solid"}}><Button>Botao 4</Button></Col>
                    <Col span={4}><Button>Botao 4</Button></Col>
                </Row>

            </div>

            <Space direction="vertical">

                <Input addonBefore="Tarefa:" placeholder="Informe a tarefa" 
                       onChange={(e) => setAtividadeDigitada(e.target.value)} 
                       value={atividadeDigitada}/>
                <Button type="primary" onClick={adicionarAtividade}>Adicionar</Button>
                <Timeline>

                    {atividades.map((item, idx) => <Timeline.Item color={idx % 2 == 0 ? "green" : "red"} key={idx}>{item}</Timeline.Item> )}

                </Timeline>

            </Space>

            <Button type="primary" onClick={obterTrabalhos}>Obter trabalhos</Button>

            </>

}

render(<TesteHeader />, document.getElementById('root'));