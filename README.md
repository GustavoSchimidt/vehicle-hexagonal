# Vehicle Hexagonal API

API para gerenciamento de veículos utilizando arquitetura Hexagonal (Ports & Adapters) com NestJS.

## Arquitetura Hexagonal

A arquitetura hexagonal, também conhecida como Ports & Adapters, visa separar as regras de negócio (domínio) das implementações externas (bancos de dados, frameworks, interfaces web, etc). Isso facilita testes, manutenção e evolução do sistema.

- **Domínio:** Contém as entidades e regras de negócio puras, sem dependências externas.
- **Ports (Portas):** Interfaces que definem contratos para entrada (input) e saída (output) de dados do domínio.
- **Adapters (Adaptadores):** Implementações concretas das portas, conectando o domínio a frameworks, bancos de dados, APIs, etc.

No projeto, a estrutura segue este padrão:

```
src/
  vehicle/
    adapters/   # Adaptadores de entrada (controllers, dtos) e saída (repositórios, gateways)
    domain/     # Entidades e lógica de negócio
    ports/      # Interfaces (contratos) para comunicação entre domínio e adaptadores
    vehicle.module.ts
  main.ts       # Bootstrap da aplicação
  app.module.ts # Módulo principal
```

## Estrutura dos Diretórios

- **src/vehicle/adapters/input/controllers/**: Controllers responsáveis por receber requisições HTTP e encaminhar para o domínio.
- **src/vehicle/adapters/input/dtos/**: Objetos de transferência de dados (DTOs) usados nas entradas das APIs.
- **src/vehicle/adapters/output/**: Implementações de saída, como repositórios e integrações externas.
- **src/vehicle/domain/entities/**: Entidades do domínio, representando os objetos de negócio.
- **src/vehicle/ports/input/**: Interfaces para casos de uso (serviços de aplicação).
- **src/vehicle/ports/output/**: Interfaces para persistência e integrações externas.
- **src/vehicle/vehicle.module.ts**: Módulo do domínio de veículos.
- **src/main.ts**: Inicialização da aplicação e configuração do Swagger.
- **test/**: Testes unitários e de integração.

## Como rodar o projeto

### Pré-requisitos
- Node.js (>= 18)
- Yarn

### Instalação

```bash
yarn install
```

### Executando a aplicação

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