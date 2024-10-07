import csv

def filtrar_usuarios_por_dominio(arquivo_csv, dominio):
    usuarios_filtrados = []

    with open(arquivo_csv, mode='r', encoding='utf-8-sig') as file:
        leitor = csv.DictReader(file)
        
        for linha in leitor:
            linha = {key.strip(): value for key, value in linha.items()}
            
            if dominio in linha['Email']:
                usuarios_filtrados.append(linha)

    return usuarios_filtrados

def obter_dominios_unicos(arquivo_csv):
    dominios = set()  # Usamos um conjunto para evitar duplicatas

    with open(arquivo_csv, mode='r', encoding='utf-8-sig') as file:
        leitor = csv.DictReader(file)
        
        for linha in leitor:
            linha = {key.strip(): value for key, value in linha.items()}
            email = linha['Email']
            # Extrai o domínio do email
            dominio = email.split('@')[-1]
            dominios.add(dominio)  # Adiciona o domínio ao conjunto

    return list(dominios)  # Retorna uma lista de domínios

# Caminho do arquivo CSV
arquivo_csv = 'usuarios.csv'

while True:
    # Obtém domínios únicos
    dominios = obter_dominios_unicos(arquivo_csv)

    # Exibe os domínios encontrados com numeração
    print("\nDomínios disponíveis:")
    for i, dominio in enumerate(dominios, start=1):
        print(f"{i}. @{dominio}")

    # Pergunta se o usuário deseja filtrar
    filtrar = input("Você deseja filtrar os usuários por um domínio? (s/n): ").strip().lower()

    if filtrar == 's':
        escolha = input("Escolha um domínio pelo número correspondente: ").strip()
        
        try:
            # Converte a escolha para um índice e busca o domínio
            dominio_desejado = dominios[int(escolha) - 1]
        except (IndexError, ValueError):
            print("Escolha inválida. Nenhuma filtragem foi realizada.")
        else:
            # Chama a função e imprime os usuários filtrados
            usuarios_encontrados = filtrar_usuarios_por_dominio(arquivo_csv, dominio_desejado)

            print(f'\nUsuários com domínio "{dominio_desejado}":')
            if not usuarios_encontrados:
                print("Nenhum usuário encontrado.")
            else:
                for usuario in usuarios_encontrados:
                    print(f"ID: {usuario['ID']}, Nome: {usuario['Nome']}, Email: {usuario['Email']}")
    else:
        print("Nenhuma filtragem foi realizada.")

    # Pergunta se o usuário deseja continuar ou sair
    continuar = input("\nDeseja continuar? (s para sim, qualquer outra tecla para sair): ").strip().lower()
    if continuar != 's':
        print("Saindo do programa.")
        break
