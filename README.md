# Sistema Escolar Orientado a Objetos

![STATUS](https://img.shields.io/badge/STATUS-CONCLUÍDO-00C853?style=for-the-badge)
![DATA](https://img.shields.io/badge/ATUALIZADO-ABRIL%202026-9E9E9E?style=for-the-badge)
![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge\&logo=php\&logoColor=white)
![POO](https://img.shields.io/badge/PROGRAMAÇÃO%20ORIENTADA%20A%20OBJETOS-3949AB?style=for-the-badge)

---

## Índice

* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Estrutura do Sistema](#estrutura-do-sistema)
* [Funcionalidades](#funcionalidades)
* [Conceitos Aplicados](#conceitos-aplicados)
* [Execução do Projeto](#execução-do-projeto)
* [Aprendizados](#aprendizados)

---

## Sobre o Projeto

Este projeto consiste em uma simulação de estrutura hierárquica escolar desenvolvida com foco na aplicação prática dos fundamentos da **Programação Orientada a Objetos (POO)** utilizando **JavaScript e PHP**.

A aplicação representa diferentes perfis presentes em um ambiente educacional, como:

* Alunos
* Professores
* Diretores
* Funcionários

O sistema foi construído para exercitar conceitos fundamentais da programação orientada a objetos, como herança, encapsulamento, abstração e polimorfismo.

---

## Tecnologias Utilizadas

### Desenvolvimento Principal

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,php,nodejs,vscode,github" />
  </a>
</p>

### Ferramentas Aplicadas

* **JavaScript ES6+**
* **PHP**
* **Node.js**
* **Visual Studio Code**
* **GitHub**

---

## Estrutura do Sistema

O sistema foi desenvolvido a partir de uma classe principal:

### Classe Base

### `pessoas`

Responsável por armazenar atributos compartilhados entre todos os perfis:

* Nome
* Função
* Salário

---

### Classes Derivadas

| Classe        | Função                           |
| ------------- | -------------------------------- |
| `aluno`       | Representa estudantes            |
| `professor`   | Representa docentes              |
| `diretor`     | Representa gestão administrativa |
| `funcionario` | Representa colaboradores         |

Cada classe possui seu próprio método `falar()`, gerando mensagens específicas.

---

## Funcionalidades

### Cadastro de Pessoas

Criação de instâncias representando membros da instituição.

### Encapsulamento

Proteção de atributos sensíveis como salário.

### Herança

Reutilização da estrutura da classe principal.

### Polimorfismo

Cada perfil possui comportamento personalizado.

### Saída Dinâmica

Exibição automática no console.

---

## Exemplo de Saída

```bash
Olá meu nome é Paloma e sou um Aluno mas não tenho salário
Olá meu nome é Raul e sou um Professor
Olá meu nome é Marcos Alves e sou um Diretor
Olá meu nome é Elisa e sou um Funcionário
```

---

## Conceitos Aplicados

### Encapsulamento

Proteção de dados internos.

### Herança

Extensão da classe base.

### Polimorfismo

Sobrescrita de métodos.

### Abstração

Representação simplificada de elementos reais.

---

## Execução do Projeto

### Clonar Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### Acessar Pasta

```bash
cd sistema-escolar
```

### Executar JavaScript

```bash
node atividade.js
```

### Executar PHP

```bash
php atividade.php
```

---

## Organização do Projeto

```bash
📂 sistema-escolar
 ┣ 📄 atividade.js
 ┣ 📄 atividade.php
 ┗ 📄 README.md
```

---

## Aprendizados

Durante o desenvolvimento foram reforçados conhecimentos sobre:

* Programação Orientada a Objetos
* Estruturação de Classes
* Métodos e Construtores
* Encapsulamento
* Herança
* Organização lógica de sistemas

---

## Objetivo Acadêmico

Atividade desenvolvida com finalidade educacional para prática de:

**Programação Orientada a Objetos com JavaScript e PHP**

Aplicando conceitos essenciais para construção de sistemas organizados, reutilizáveis e escaláveis.

---

<p align="center">
<b>SENAI "A. Jacob Lafer" - Santo André, 2026</b><br>
Curso Técnico em Desenvolvimento de Sistemas
  Paolla Paula Veronez
</p>
