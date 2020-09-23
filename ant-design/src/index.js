import React from 'react';
import {render} from 'react-dom';
import { useState } from 'react'

import { ClockCircleOutlined, Html5Outlined,  CheckSquareOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';
import {PageHeader, Button, Input, Space, List, Dropdown, Menu, Checkbox, Radio, DatePicker, Progress} from 'antd'

function TesteIcone() {
    
    return <div style={{padding: "30px"}}><Html5Outlined /><ClockCircleOutlined/><CheckSquareOutlined /></div>

}

function TesteHeader() {

    const [nome, setNome] = useState("")

    const [alunos, setAlunos] = useState(['Joao'])

    const [ativo, setAtivo] = useState(false)

    const [despertador, setDespertador] = useState(1)

    const [percentual, setPercentual] = useState(10)

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
                
            </Space>
            </>

}

render(<TesteHeader />, document.getElementById('root'));