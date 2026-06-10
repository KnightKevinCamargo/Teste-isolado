# Teste Isolado — API com Docker

API de gerenciamento de tarefas containerizada com Docker e Docker Compose.

## Sobre o projeto

Projeto desenvolvido para aprender Docker na prática. Uma API REST simples de tarefas com banco de dados PostgreSQL, onde cada serviço roda em seu próprio container isolado.

Desenvolvido com auxílio do Claude (Anthropic) como ferramenta de aprendizado.

## Arquitetura

api (Node.js) → db (PostgreSQL)

Dois containers se comunicando pela rede interna do Docker, sem expor o banco para fora.

## Como rodar

Pré-requisitos: Docker e Docker Compose instalados.

git clone https://github.com/KnightKevinCamargo/Teste-isolado.git
```bash
cd Teste-isolado
docker compose up -d --build
````

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /tarefas | Lista todas as tarefas |
| POST | /tarefas | Cria uma nova tarefa |
| DELETE | /tarefas/:id | Deleta uma tarefa |

## Tecnologias

- Docker
- Docker Compose
- Node.js + Express
- PostgreSQL

## O que aprendi

- Escrever um Dockerfile do zero
- Configurar múltiplos serviços com docker-compose.yml
- Comunicação entre containers via rede interna do Docker
- Diferença entre image: e build: no Compose
- Persistência de dados com volumes


## Testando a API

Após subir o projeto, rode os comandos abaixo para testar:

    # Listar tarefas (vazio no início)
    curl http://localhost:3000/tarefas

    # Criar três tarefas
    curl -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{"titulo": "Aprender Docker"}'
    curl -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{"titulo": "Subir no GitHub"}'
    curl -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{"titulo": "Aprender Kubernetes"}'

    # Listar tarefas criadas
    curl http://localhost:3000/tarefas

    # Deletar a tarefa de id 1
    curl -X DELETE http://localhost:3000/tarefas/1

    # Listar tarefas restantes
    curl http://localhost:3000/tarefas
