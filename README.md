# API de Carros com Docker

API REST para cadastro de carros containerizada com Docker e Docker Compose.

## Sobre o projeto

Projeto desenvolvido para aprender Docker na prática. Uma API com banco de dados PostgreSQL, onde cada serviço roda em seu próprio container isolado.

Desenvolvido com auxílio do Claude (Anthropic) como ferramenta de aprendizado.

## Arquitetura

api (Node.js) → db (PostgreSQL)

Dois containers se comunicando pela rede interna do Docker, sem expor o banco para fora.

## Como rodar

Pré-requisitos: Docker e Docker Compose instalados.

    git clone https://github.com/KnightKevinCamargo/Teste-isolado.git
    cd Teste-isolado
    docker compose up -d --build

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /carros | Lista todos os carros |
| POST | /carros | Cadastra um carro |
| DELETE | /carros/:id | Deleta um carro |

## Testando a API

    # Listar carros (vazio no início)
    curl http://localhost:3000/carros

    # Cadastrar carros
    curl -X POST http://localhost:3000/carros -H "Content-Type: application/json" -d '{"Nome": "Corolla", "Marca": "Toyota", "Ano": 2022, "Placa": "ABC1234"}'
    curl -X POST http://localhost:3000/carros -H "Content-Type: application/json" -d '{"Nome": "Civic", "Marca": "Honda", "Ano": 2021, "Placa": "DEF5678"}'
    curl -X POST http://localhost:3000/carros -H "Content-Type: application/json" -d '{"Nome": "Onix", "Marca": "Chevrolet", "Ano": 2023, "Placa": "GHI9012"}'

    # Listar carros cadastrados
    curl http://localhost:3000/carros

    # Deletar o carro de id 1
    curl -X DELETE http://localhost:3000/carros/1

    # Listar carros restantes
    curl http://localhost:3000/carros

## Tecnologias

- Docker
- Docker Compose
- Node.js + Express
- PostgreSQL
