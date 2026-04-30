# Sistema Escolar Orientado a Objetos em JavaScript

![STATUS](https://img.shields.io/badge/STATUS-CONCLUÍDO-00C853?style=for-the-badge)
![DATA](https://img.shields.io/badge/ATUALIZADO-ABRIL%202026-9E9E9E?style=for-the-badge)
![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![POO](https://img.shields.io/badge/PROGRAMAÇÃO%20ORIENTADA%20A%20OBJETOS-3949AB?style=for-the-badge)
![NODE.JS](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white)

---

## Índice

[![Sobre](https://img.shields.io/badge/Sobre%20o%20Projeto-2E7D32?style=for-the-badge)](#sobre-o-projeto)
[![Tecnologias](https://img.shields.io/badge/Tecnologias%20Utilizadas-2E7D32?style=for-the-badge)](#tecnologias-utilizadas)
[![Estrutura](https://img.shields.io/badge/Estrutura%20do%20Sistema-2E7D32?style=for-the-badge)](#estrutura-do-sistema)
[![Funcionalidades](https://img.shields.io/badge/Funcionalidades-2E7D32?style=for-the-badge)](#funcionalidades)
[![Conceitos](https://img.shields.io/badge/Conceitos%20Aplicados-2E7D32?style=for-the-badge)](#conceitos-aplicados)
[![Execução](https://img.shields.io/badge/Execução-2E7D32?style=for-the-badge)](#execução-do-projeto)
[![Aprendizados](https://img.shields.io/badge/Aprendizados-2E7D32?style=for-the-badge)](#aprendizados)

---

## Sobre o Projeto

Este projeto consiste em uma simulação de **estrutura hierárquica escolar**, desenvolvida com foco na aplicação prática dos fundamentos da **Programação Orientada a Objetos (POO)** em JavaScript.

A aplicação representa diferentes perfis presentes no ambiente educacional — como alunos, professores, diretores e funcionários — utilizando **herança, encapsulamento, classes, métodos e atributos privados**.

O principal objetivo da atividade foi consolidar conhecimentos sobre modelagem orientada a objetos, organização lógica do código e reutilização de estruturas através da extensão de classes.

---

## Tecnologias Utilizadas

### Desenvolvimento

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,github,vscode" />
  </a>
</p>

### Recursos Aplicados

- **JavaScript ES6+**
- **Node.js**
- **Classes e Herança**
- **Atributos Privados**
- **Arrow Functions**
- **Console Output**

---

## Estrutura do Sistema

O sistema foi desenvolvido a partir de uma classe principal chamada:

### Classe Base

### `pessoas`

Responsável por armazenar informações gerais compartilhadas por todos os perfis:

- Nome
- Função
- Salário (encapsulado)

---

### Classes Derivadas

O projeto utiliza herança para especializar comportamentos:

| Classe | Representação |
|-------|--------------|
| `aluno` | Estudante da instituição |
| `professor` | Docente responsável pelo ensino |
| `diretor` | Gestão administrativa |
| `funcionario` | Colaborador institucional |

Cada classe possui seu próprio método `falar()`, exibindo mensagens personalizadas.

---

## Funcionalidades

### Cadastro de Perfis

Criação de diferentes objetos representando pessoas da instituição.

---

### Encapsulamento de Dados

O atributo salário foi implementado como **privado**, reforçando o conceito de proteção de informações sensíveis.

---

### Polimorfismo de Métodos

Cada classe redefine o método:

```javascript
falar()
