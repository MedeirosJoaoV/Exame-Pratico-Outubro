# TaskApi

API simples de gerenciamento de tarefas, construída com .NET, que permite adicionar, listar, atualizar e excluir tarefas.

## Sumário

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
- [Exemplos de Uso](#exemplos-de-uso)

## Requisitos

- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- Ferramenta de linha de comando (CLI) do .NET ou Visual Studio 2022 (opcional)
- Uma ferramenta para testar requisições, como [Postman](https://www.postman.com/) ou [cURL](https://curl.se/)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/taskapi.git
   cd taskapi

   ```

2. Restaure as dependências:
   `bash dotnet restore`

3. Execulte a aplicação:

` dotnet run`

4. Oberve a porta que vai disponibilizar no terminal do vscode

## Estrutura do projeto

MinhaAPI/
│
├── Controllers/
│ └── TaskController.cs # Controlador principal da API para gerenciar tarefas
│
├── Models/
│ └── TaskItem.cs # Modelo que representa uma tarefa
│
├── Program.cs # Arquivo principal de configuração e execução da aplicação
└── TaskApi.csproj # Arquivo de configuração do projeto .NET

### Endpoints

A API disponibiliza os seguintes endpoints para o gerenciamento de tarefas:

1. Listar todas as tarefas

- Método: GET
- Endpoint: /api/tasks
- Descrição: Retorna uma lista com todas as tarefas.

2. Obter tarefa por ID

- Método: GET
- Endpoint: /api/tasks/{id}
- Parâmetros: id (obrigatório) - o ID da tarefa a ser recuperada.
- Descrição: Retorna uma única tarefa com base no ID especificado.

3. Criar uma nova tarefa

- Método: POST
- Endpoint: /api/tasks
- Body(JSON):
  `json{  "description": "Descrição da tarefa", "status": "Pendente" }`
- Descrição: Adiciona uma nova tarefa à lista.

4. Atualizar uma tarefa existente

- Método: PUT
- Endpoint: /api/tasks/{id}
- Parâmetros: id (obrigatório) - o ID da tarefa a ser atualizado.
- Body (JSON):
  `json {  "description": "Nova descrição da tarefa", "status": "Concluída"} `
- Descrição: Atualiza a descrição e o status de uma tarefa.

5. Excluir uma tarefa

- Método: DELETE
- Endpoint: /api/tasks/{id}
- Parâmetros: id (obrigatório) - o ID da tarefa a ser excluída.
- Descrição: Remove a tarefa com o ID especificado da lista.

## Exemplos de uso

**Adicionar uma tarefa**

- Envie uma requisição POST para https://localhost:5001/api/tasks com o seguinte corpo JSON:
  `json { "description": "Estudar APIs REST", "status": "Pendente" } `

**Liste tarefas**

- Envie uma requisição GET para https://localhost:5001/api/tasks para receber a lista de todas as tarefas.

### Nota

    Esse e um exemplo basico sobre abordagens de endpoints api e controllers em csharp.
