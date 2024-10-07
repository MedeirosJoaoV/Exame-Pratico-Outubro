# Filtragem de Usuários por Domínio de Email

Este projeto é um script em Python que lê um arquivo CSV contendo dados de usuários e permite filtrar esses usuários com base no domínio do seu endereço de email. O script permite ao usuário selecionar entre domínios disponíveis e exibir informações correspondentes.

## Funcionalidades

1. **Leitura de Arquivo CSV**: O script lê um arquivo CSV contendo as colunas `ID`, `Nome` e `Email`.
2. **Extração de Domínios**: O script extrai domínios únicos dos emails presentes no arquivo CSV.
3. **Filtragem**: O usuário pode escolher um domínio e visualizar todos os usuários que possuem emails com esse domínio.
4. **Interatividade**: O programa permite que o usuário continue filtrando ou saia a qualquer momento.

## Requisitos

- Python 3.x
- Biblioteca padrão `csv` (já incluída na instalação padrão do Python)

## Como Usar

1. **Preparar o Arquivo CSV**:

   - Crie um arquivo chamado `usuarios.csv` no mesmo diretório do script. O arquivo deve ter o seguinte formato:

   ```
   csv
   ID,Nome,Email
   1,João Silva,joao@exemplo.com
   2,Maria Oliveira,maria@dominio.com
   3,Carlos Santos,carlos@gmail.com
   4,Ana Costa,ana@exemplo.com
   ```

2. **Executar o Script**:
   - Execute o script filtrar_usuarios.py usando o seguinte comando no terminal:
     `python filtrar_usuarios.py `

` 3. Interagir com o Programa: - O script exibirá os domínios disponíveis extraídos do arquivo CSV. - Perguntará se você deseja filtrar os usuários por um domínio. Responda s para sim ou n para não. - Se você escolher sim, digite o número correspondente ao domínio desejado. - O programa mostrará os usuários que possuem emails com o domínio selecionado. - Após a filtragem, você pode optar por continuar filtrando ou sair do programa.

4. Exemplo de uso:
   Domínios disponíveis:
1. @exemplo.com
1. @dominio.com
1. @gmail.com

    - Você deseja filtrar os usuários por um domínio? (s/n): s
    - Escolha um domínio pelo número correspondente: 1
    - Usuários com domínio "@exemplo.com":
ID: 1, Nome: João Silva, Email: joao@exemplo.com
ID: 4, Nome: Ana Costa, Email: ana@exemplo.com
