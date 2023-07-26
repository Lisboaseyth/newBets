# NewBets

O NewBets é um App para você que é fã de futebol, nele é possível você acompanhar os principais
campeonatos.

## Aplicações

O Projeto possui as seguintes aplicações:

Main: Página onde o cliente irá acompanhar quais o campeonatos ativos.\
Matches Page: Página onde o novo cliente irá ver as partidas do campeonato.\
Info Match page: Página acessada pelo cliente para verificar mais informações sobre a partida.
FormBet: Ao final de cada Info Match page, caso o status da partida seja diferente de 'FINISHED' o usuário poderá simular
um preenchimento de formlário de palpites de partida.

## Passo a passo para executar o projeto

1 - Para realizar a execução do projeto é necessário instalar as dependências utilizando os comandos abaixo:
```bash
# Caso use o npm
npm install

# Caso use o yarn
yarn
```

2 - Após a instalação das dependências é necessário o comando para executar o projeto:
```bash
# Caso use o npm
npm expo start

# Caso use o yarn
yarn expo start
```

3 - Após os dois projetos estarem em execução, estará pronto para uso!

4 - O Projeto irá disponibilizar um QR Code no terminal:
    Caso seu dispositivo seja android, será necessário fazer o download na PlayStore do App Expo, após fazer o download é só iniciá-lo e fazer a leitura.
    Caso seu dispositivo seja IOS, é só iniciar a câmera e fazer a leitura.

## Principais Bibliotecas e Linguagens

O Projeto usa algumas bibliotecas e linguagens fundamentais e que se destacam:

  - React-Native: Bibiloteca de código aberto realizada para estruturação do projeto.
  - Typescript: Linguagem de programação de código aberto realizada para criação do projeto.
  - React-Native-Stack: Biblioteca utilizada para realizar o sistema de roteamento entre páginas.
  - Axios: Biblioteca para realizar requisições com a nossa API.
  - Toast: Biblioteca para rederizar mensagens toast para o usuário.