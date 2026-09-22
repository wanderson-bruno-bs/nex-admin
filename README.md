# 🖥️ NexAdmin

O **NexAdmin** é um sistema administrativo desenvolvido como projeto de estudo e portfólio, utilizando **HTML, CSS e JavaScript**.

O projeto simula um painel administrativo para gerenciamento de usuários, permitindo realizar cadastros, edições, exclusões, pesquisas e filtros, além de apresentar indicadores atualizados no Dashboard e na área de Relatórios.

Este projeto faz parte do meu processo de retomada e aprofundamento dos estudos em desenvolvimento Front-End, aplicando na prática conceitos de JavaScript, manipulação do DOM e armazenamento de dados no navegador.

## 🚀 Funcionalidades

- Dashboard com informações dinâmicas
- Cadastro de usuários
- Edição e exclusão de usuários
- Controle de usuários ativos e inativos
- Busca por nome ou e-mail
- Filtro por status
- Relatórios atualizados dinamicamente
- Contagem de novos cadastros
- Persistência de dados com LocalStorage
- Área de configurações
- Navegação entre as seções do sistema

## 📊 Dashboard

O Dashboard apresenta indicadores gerados a partir dos usuários cadastrados:

- Total de usuários
- Usuários ativos
- Novos cadastros nos últimos 7 dias

As informações são atualizadas de acordo com as alterações realizadas no sistema.

## 👥 Gerenciamento de usuários

A área de usuários implementa as principais operações de **CRUD**:

- **Create** — cadastro de novos usuários
- **Read** — exibição dos usuários cadastrados
- **Update** — edição das informações
- **Delete** — exclusão de usuários

Também é possível pesquisar usuários por nome ou e-mail e filtrar os resultados por status.

## 💾 Persistência de dados

O NexAdmin utiliza o **LocalStorage** do navegador para armazenar os dados.

Isso permite que usuários e configurações permaneçam salvos mesmo após atualizar a página ou fechar o navegador no mesmo dispositivo.

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript
- DOM
- LocalStorage
- Git
- GitHub

## 📚 Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos como:

- Manipulação do DOM
- Eventos em JavaScript
- Arrays e objetos
- Funções
- `filter()` e `forEach()`
- Template Literals
- JSON
- LocalStorage
- Manipulação de datas
- Renderização dinâmica
- Busca e filtragem de dados

## 📁 Estrutura do projeto

```text
NexAdmin/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   └── favicon.png
    └── js/
        └── script.js
```

## 🔮 Próximas melhorias

O NexAdmin continuará evoluindo conforme avanço nos meus estudos.

Entre as próximas etapas planejadas estão:

- Melhorias de responsividade
- Validação mais completa dos formulários
- Paginação da tabela de usuários
- Melhorias de interface e experiência do usuário
- Migração da interface para React
- Integração com API
- Backend com Java e Spring Boot
- Banco de dados PostgreSQL
- Autenticação de usuários

## 👨‍💻 Autor

**Wanderson Bruno Barbosa Silva**

Graduado em **Análise e Desenvolvimento de Sistemas** e pós-graduado em **Engenharia de Software**.

Projeto desenvolvido para estudo, prática e composição de portfólio.
