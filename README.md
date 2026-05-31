# IPS Connect

## Descrição do Projeto

IPS Connect é um protótipo funcional desenvolvido no âmbito da unidade curricular de Interfaces Pessoa-Máquina.

O objetivo do projeto é propor uma aplicação móvel para estudantes do Instituto Politécnico de Santarém, centralizando funcionalidades académicas e administrativas numa única plataforma intuitiva e acessível.

O projeto foi desenvolvido com foco na experiência do utilizador, acessibilidade, navegação simples e consistência visual entre todos os ecrãs.

---

## Aviso Importante

Este projeto corresponde a um **protótipo funcional** e não a uma aplicação final pronta para utilização em ambiente real.

Algumas funcionalidades encontram-se simuladas ou parcialmente implementadas para efeitos académicos e demonstração da interface.

Atualmente o projeto inclui principalmente a camada de apresentação (Frontend), não possuindo ainda uma infraestrutura completa de Backend nem integração com os sistemas institucionais oficiais do IPS.

---

## Funcionalidades Implementadas

### Autenticação

* Login de utilizador
* Criação de conta
* Recuperação de palavra-passe
* Integração com Firebase Authentication

### Home

* Área de boas-vindas
* Avisos importantes
* Próximos eventos
* Notícias
* Acessos rápidos

### Pesquisa Académica

* Pesquisa de documentos
* Pesquisa de regulamentos
* Formulários académicos
* Sugestões rápidas

### Pagamentos

* Consulta de pagamentos
* Histórico de pagamentos
* Emissão de documentos
* Simulação de pagamento por MB WAY

### Agendamentos

* Seleção de serviço
* Seleção de data
* Seleção de horário
* Lista de agendamentos futuros

### Perfil

* Informação pessoal
* Dados académicos
* Preferências
* Gestão de notificações
* Encerramento de sessão

### Tema Claro e Escuro

* Alteração dinâmica entre tema claro e escuro
* Persistência da preferência do utilizador

---

## Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Serviços

* Firebase Authentication
* Firebase Firestore

### Ferramentas de Desenvolvimento

* Visual Studio Code
* Git
* GitHub

---

## Estrutura do Projeto

```text
IPS_Connect
│
├── html
│   ├── Login.HTML
│   ├── CreateAccount.HTML
│   ├── ForgetPassword.HTML
│   ├── Home.HTML
│   ├── Search.HTML
│   ├── Payments.HTML
│   ├── Scheduling.HTML
│   └── Profile.HTML
│
├── css
│   ├── login.css
│   ├── createAccount.css
│   ├── forgotPassword.css
│   ├── home.css
│   ├── search.css
│   ├── payments.css
│   ├── scheduling.css
│   └── profile.css
│
├── js
│   ├── app.js
│   ├── theme.js
│   ├── search.js
│   ├── payments.js
│   ├── scheduling.js
│   └── profile.js
│
└── Database
    ├── firebase.js
    ├── config.js
    └── auth.js
```

---

## Limitações Atuais

As seguintes funcionalidades não se encontram totalmente implementadas:

* Integração com os sistemas académicos reais do IPS
* Pagamentos reais
* Notificações push
* Calendário académico em tempo real
* Gestão de documentos institucionais
* Integração com serviços internos do IPS
* Sistema administrativo para funcionários
* Backend próprio
* APIs institucionais

---

## Trabalho Académico

Projeto desenvolvido para fins académicos na unidade curricular de Interfaces Pessoa-Máquina.

### Autores

* Gonçalo Caçador Nº230001121
* Dymtro Nº230001436

