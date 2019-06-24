from random import choice

nomes_meninos = [
    "Miguel", "Arthur", "Bernardo", "Heitor", "Davi", "Lorenzo",
    "Théo", "Pedro", "Gabriel", "Enzo", "Matheus", "Lucas",
    "Benjamin", "Nicolas", "Guilherme", "Rafael", "Joaquim",
    "Samuel", "Enzo Gabriel", "João Miguel", "Henrique",
    "Pedro Henrique", "Gustavo", "Murilo", "Pietro",
    "Lucca", "Felipe", "João Pedro", "Isaac", "Benício",
    "Daniel", "Anthony", "Leonardo", "Davi Lucca", "Bryan",
    "Eduardo", "João Lucas", "Victor", "João", "Cauã", "Antônio",
    "Vicente", "Caleb", "Gael", "Bento", "Caio", "Emanuel",
    "Vinícius", "João Guilherme", "Davi Lucas", "Noah",
    "João Gabriel", "João Victor", "Oliver", "Miguel Henrique",
    "Ruan", "Anthony Gabriel", "Danilo", "Luiz Miguel",
    "Francisco", "Kaique", "Otávio", "Augusto", "Levi",
    "Yuri", "Enrico", "Thiago", "Victor Hugo", "Ian",
    "Thomas", "Henry", "Luiz Felipe", "Ryan", "Arthur Miguel",
    "Davi Luiz", "Nathan", "Pedro Lucas", "Davi Miguel", "Raul",
    "Pedro Miguel", "Luiz Henrique", "Luan", "Martin",
    "Yago", "José", "André", "Gabriel", "Carlos Eduardo",
    "Bruno", "Rodrigo", "Luiz Gustavo", "Arthur Gabriel",
    "Luiz Otávio", "Breno", "Arthur Henrique", "Fernando",
    "Enzo Miguel", "Kauê"
]

nomes_meninas  = [
    "Alice", "Sophia", "Helena", "Valentina", "Laura",	
    "Isabella", "Manuela", "Júlia", "Heloísa", "Luiza",	
    "Maria Luiza", "Lorena", "Lívia", "Giovanna",
    "Maria Eduarda", "Beatriz", "Maria Clara", "Cecília",	
    "Eloá", "Lara", "Maria Júlia", "Isadora", "Mariana", 	
    "Emanuelly", "Ana Júlia", "Ana Luiza", "Ana Clara", "Melissa",
    "Yasmin", "Maria Alice", "Isabelly", "Lavínia", "Esther", 	
    "Sarah", "Elisa", "Antonella", "Rafaela", "Maria Cecília",	
    "Liz", "Marina", "Nicole", "Maitê", "Isis", "Alícia", "Luna",	
    "Rebeca", "Agatha", "Letícia", "Maria", "Gabriela", "Ana Laura",	
    "Catarina", "Clara", "Ana Beatriz", "Vitória", "Olívia", 
    "Maria Fernanda", "Emilly", "Maria Valentina", 	
    "Milena", "Maria Helena", "Bianca", "Larissa", "Mirella",	
    "Maria Flor", "Allana", "Ana Sophia", "Clarice", "Pietra",	
    "Maria Vitória", "Maya", "Laís", "Ayla", "Ana Lívia",	
    "Eduarda", "Mariah", "Stella", "Ana	Erick", "Gabrielly",	
    "Sophie", "Carolina", "Maria Laura", "Maria Heloísa",	
    "Maria Sophia", "Fernanda", "Malu", "Analu", "Amanda",	
    "Aurora", "Maria Isis", "Louise	Tomás", "Heloise Lucas", 
    "Ana Vitória", "Ana Cecília", "Ana Liz", "Joana", "Luana",	
    "Antônia", "Isabel", "Bruna"	
]


nomes = [ ]

for nome in nomes_meninos:
    nomes.append(nome)

for nome in nomes_meninas:
    nomes.append(nome)

sobrenomes = [
    "Agostinho", "Aguiar", "Albuquerque", "Alegria",
    "Alencastro", "Almada", "Alves", "Alvim",
    "Amorim", "Andrade", "Antunes", "Aparício",
    "Apolinário", "Araújo", "Arruda", "Assis",
    "Assunção", "Ávila", "Azambuja", "Baptista",
    "Barreto", "Barros", "Beira Mar", "Belchior",
    "Belém", "Bernardes", "Bittencourt", "Boaventura",
    "Bonfim", "Botelho", "Brites", "Brito", "Caetano",
    "Calixto", "Camacho", "Camilo", "Capelo", "Castro",
    "Cavalcante", "Chaves", "Conceição", "Corte", "Real",
    "Cortês", "Coutinho", "Crespo", "Cunha", "Curado",
    "Custódio", "Córdoba", "Damásio", "Dantas", "Dias",
    "Dinís", "Domingues", "Dorneles dos Reis", "Drumond",
    "D’Ávila", "Escobar", "Espinosa", "Esteves", "Evangelista",
    "Farias", "Ferrari", "Figueiredo", "Figueiroa", "Flores",
    "Fogaça", "Freitas", "Frutuoso", "Furtado", "Félix",
    "Galvão", "Garcia", "Gaspar", "Gentil", "Geraldes",
    "Gil", "Godinho", "Gomes", "Gonzaga", "Goulart",
    "Gouveia", "Guedes", "Guimarães", "Guterres",
    "Góis", "Hernandes", "Hilário", "Hipólito", "Ibrahim",
    "Ilha", "Infante", "Jaques", "Jesus", "Jordão",
    "Lacerda", "Lancastre", "Leiria", "Lessa", "Machado",
    "Maciel", "Magalhães", "Maia", "Maldonado", "Marinho",
    "Marques", "Martins", "Medeiros", "Meireles",  "Mello",
    "Mendes", "Menezes", "Mesquita", "Modesto", "Monteiro",
    "Morais", "Moreira", "Morgado", "Moura", "Muniz", "Neves",
    "Nogueira", "Novais", "Nóbrega", "Ornélas", "Oliveira", "Ourique",
    "Pacheco", "Padilha", "Paiva", "Paraíso", "Paris", "Peixoto", "Peralta",
    "Peres", "Pilar", "Pimenta", "Pinheiro", "Portela", "Quaresma",
    "Quarteira", "Queiroz", "Ramires", "Ramos", "Rebelo", "Resende",
    "Ribeiro", "Salazar", "Sales", "Salgado", "Salgueiro", "Sampaio",
    "Sanches", "Santana", "Siqueira", "Soares", "Subtil", "Tavares",
    "Taveira", "Teixeira", "Teles", "Torres", "Trindade", "Varela",
    "Vargas", "Vasconcelos", "Vasques", "Veiga", "Veloso", "Vidal",
    "Vieira", "Vilela", "Xavier", "Ximenes", "Xisco", "Zagalo", "Zanette", "Zaganelli"
]

tipos_email = [
    "gmail.com",
    "outlook.com.br",
    "outlook.com",
    "hotmail.com",
    "hotmail.com.br",
    "icloud.com",
    "yahoo.com"
]

def gerar_nome():
    return f"{choice(nomes)} {choice(sobrenomes)} {choice(sobrenomes)}"

def gerar_email(nome):
    nome_atual = nome.lower().replace(' ', choice(['-', '.']))

    return f"{nome_atual}@{choice(tipos_email)}"


arquivo = open("pessoas.txt", "w+")

for i in range(100):
    nome = gerar_nome()

    arquivo.write(f"\n"+("_"*100))
    arquivo.write(f"\n Nome: {nome}")
    arquivo.write(f"\n Email: {gerar_email(nome)}")
    arquivo.write(f"\n"+("_"*100))

arquivo.close()