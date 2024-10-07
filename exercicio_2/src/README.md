# Página de Lista de Tarefas

Este projeto é uma página de Lista de Tarefas simples e interativa, criada com HTML, CSS e JavaScript, utilizando o framework Bootstrap para a estrutura e o estilo. A aplicação permite que o usuário adicione novas tarefas, marque tarefas como concluídas e remova tarefas que já estejam finalizadas.

## Funcionalidades

1. **Adicionar Tarefas**:

   - O usuário pode inserir uma nova tarefa na lista usando o campo de entrada e o botão de "Adicionar".
   - Após adicionar, a tarefa aparece na tabela com status inicial como "Pendente".

2. **Marcar Tarefa como Concluída**:

   - Cada tarefa tem um botão "Concluir", que permite que o usuário mude o status de "Pendente" para "Concluída".
   - Tarefas concluídas recebem uma indicação visual por meio de um **badge** verde e o texto "Concluída".

3. **Remover Tarefas Concluídas**:

   - Somente as tarefas marcadas como "Concluída" podem ser removidas da lista.
   - Caso o usuário tente remover uma tarefa que ainda esteja "Pendente", ele receberá um alerta informando que a tarefa precisa ser concluída primeiro.

4. **Tarefas Iniciais**:
   - O sistema carrega uma lista de tarefas iniciais ao abrir a página, facilitando a visualização imediata de tarefas disponíveis.

## Estrutura do Projeto

O código principal é composto de uma estrutura HTML simples com um formulário de entrada e uma tabela para exibir as tarefas. As funções JavaScript são usadas para adicionar interatividade à página.

### Arquivos

- `index.html`: Estrutura principal da aplicação com HTML e Bootstrap.
- `styles.css`: Arquivo de estilos personalizados, caso sejam necessárias alterações adicionais.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **Bootstrap 4**: Estilização da interface para uma melhor aparência e responsividade.
- **Font Awesome**: Ícones de lixeira e check para ações de exclusão e conclusão.
- **JavaScript**: Lógica de manipulação de tarefas, como adicionar, marcar como concluída e excluir.

## Como Usar

1. **Abrir o arquivo `index.html`** em um navegador.
2. **Adicionar uma tarefa**:
   - Digite o texto da tarefa no campo de entrada.
   - Clique no botão "Adicionar".
3. **Marcar como Concluída**:
   - Clique no botão com o ícone de check ao lado da tarefa para alterar seu status para "Concluída".
4. **Remover uma tarefa**:
   - Após marcar a tarefa como concluída, clique no ícone de lixeira para removê-la.
   - Tentar excluir uma tarefa que ainda está pendente exibirá um alerta.
5. **Visualizar Tarefas Iniciais**:
   - Ao abrir a página, você verá algumas tarefas já carregadas na tabela, facilitando a visualização e gerenciamento.

## Código JavaScript

- **Função `loadInitialTasks()`**:
  - Carrega uma lista de tarefas iniciais ao abrir a página.
- **Função `addTask()`**:
  - Adiciona uma nova linha na tabela de tarefas com o status inicial de "Pendente".
- **Função `markAsDone(button)`**:
  - Muda o status da tarefa para "Concluída" ou "Pendente" e altera o estilo do badge.
- **Função `deleteTask(button)`**:
  - Remove a tarefa da tabela apenas se o status for "Concluída".
  - Caso contrário, exibe um alerta.

## Exemplo de Uso

1. Insira a descrição de uma tarefa no campo e clique em "Adicionar".
2. Para marcar uma tarefa como concluída, clique no botão de check verde.
3. Uma vez concluída, você pode clicar na lixeira para remover a tarefa da lista.

## Melhorias Futuras

Algumas ideias para aprimoramentos:

- **Filtros**: Adicionar opções para filtrar tarefas concluídas e pendentes.
- **Edição de Tarefas**: Permitir que o usuário edite a descrição de uma tarefa.
- **Novas Colunas**: Adicionar datas de limite para tarefas, salvar a data que foram concluidas e criadas.
