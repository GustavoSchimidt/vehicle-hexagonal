# Vehicle Hexagonal API

API para gerenciamento de veículos utilizando arquitetura Hexagonal (Ports & Adapters) com NestJS.

## Arquitetura Hexagonal

A arquitetura hexagonal, também conhecida como Ports & Adapters, foi proposta por Alistair Cockburn em 2005.
É uma arquitetura onde o núcleo da aplicação é composto de objetos de domínio, casos de uso que operam neles e portas de entrada e saída fornecem uma interface para o mundo exterior.

A arquitetura hexagonal é compartilhada em 3 partes:

- Centro do Hexágono
- Lado esquerdo do hexágono
- Lado direito do hexágono

### O centro do Hexágono

É onde está localizado o domínio do seu negócio, as entidades e regras inerentes ao seu software. É um ambiente que deve ser totalmente isolado em termos de não ser afetado por ocorrências externas.

Esta camada, por exemplo, não tem conhecimento de como é feita a implementação de inserção e recuperação dos dados em um banco de dados, pois ela depende de uma abstração (interface).

### Lado esquerdo do Hexágono

É o lado do ator (usuário via interface, chamada de serviço) que conduz uma ação, pois este é o lado que realiza uma tarefa.

### Lado direito do Hexágono

É o lado secundário que é conduzido, seja para escrever dados, ler dados, modificar dados, e apagar dados.

Nesta camada, temos as classes concretas, como por exemplo, a camada de repository responsável por acessar o banco de dados para inserção e recuperação dos dados.

## Estrutura dos Diretórios

```
src/
  vehicle/
    adapters/   
    domain/     
    ports/      
    vehicle.module.ts
  main.ts       
  app.module.ts 
test/
  vehicle/
    unit/
```

## Como rodar o projeto

### Pré-requisitos
- Node.js (>= 18)
- Yarn

### Instalação

```bash
yarn install
```

### Executando a aplicação
Criar o arquivo `.env` com base no arquivo `.env.example`
```bash
cp .env.example .env
```

```bash
# Modo desenvolvimento
yarn start:dev

# Modo produção (após build)
yarn build
yarn start:prod
```

A API estará disponível em `http://localhost:3000`.

### Documentação Swagger

Após iniciar a aplicação, acesse `http://localhost:3000/api` para visualizar a documentação interativa gerada pelo Swagger.

### Executando os testes

```bash
yarn test
```

## Scripts disponíveis

- `yarn start` - Inicia a aplicação
- `yarn start:dev` - Inicia em modo desenvolvimento com hot reload
- `yarn build` - Compila o projeto
- `yarn test` - Executa os testes
- `yarn lint` - Executa o linter