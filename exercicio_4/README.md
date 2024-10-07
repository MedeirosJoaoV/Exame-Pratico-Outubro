# Projeto de Consulta SQL - VLS_USUARIOS

Este projeto contém consultas SQL para interagir com a tabela `VLS_USUARIOS` em um banco de dados relacional Oracle. O objetivo principal é recuperar informações sobre usuários ativos cadastrados em 2024.

## Estrutura da Tabela

A tabela `VLS_USUARIOS` possui a seguinte estrutura:

- **CODIGO**: NUMBER - Código do usuário
- **NOME**: VARCHAR(50) - Nome do usuário
- **EMAIL**: VARCHAR(100) - Email do usuário
- **STATUS**: VARCHAR(1) - Status do usuário (A para Ativo, I para Inativo)
- **DATA_CADASTRO**: DATE - Data de cadastro do usuário

## Consultas SQL

### 1. Listar Usuários Ativos Cadastrados em 2024

Para listar todos os usuários da tabela `VLS_USUARIOS` cujo status é *Ativo (A)* e que foram cadastrados no ano de 2024, utilize a seguinte consulta SQL:

``` sql
SELECT *
FROM VLS_USUARIOS
WHERE STATUS = 'A' 
  AND EXTRACT(YEAR FROM DATA_CADASTRO) = 2024
ORDER BY DATA_CADASTRO DESC;
```

## Descrição da Consulta
- STATUS = 'A': Filtra os usuários que estão ativos.
- EXTRACT(YEAR FROM DATA_CADASTRO) = 2024: Seleciona apenas os usuários cadastrados em 2024.
- ORDER BY DATA_CADASTRO DESC: Ordena os resultados pela data de cadastro em ordem decrescente, mostrando os mais recentes primeiro.

## Como Executar
- Acesse o Banco de Dados: Conecte-se ao seu banco de dados Oracle utilizando um cliente SQL.
- Execute a Consulta: Copie e cole a consulta SQL acima no seu cliente e execute-a.
- Verifique os Resultados: Os resultados devem mostrar todos os usuários ativos cadastrados em 2024, ordenados pela data de cadastro.