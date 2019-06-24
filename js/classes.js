class Pessoa {


    constructor() {
        let nomes_meninos = [
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
        ];

        let nomes_meninas = [
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
        ];

        let sobrenomes = [
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
            "Marques", "Martins", "Medeiros", "Meireles", "Mello",
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

        let nomes = [];

        for (let i = 0; i < nomes_meninos.length; i++) {
            nomes.push(nomes_meninos[i]);
        }

        for (let i = 0; i < nomes_meninas.length; i++) {
            nomes.push(nomes_meninas[i]);
        }

        let tipos_email = [
            "gmail.com",
            "outlook.com.br",
            "outlook.com",
            "hotmail.com",
            "hotmail.com.br",
            "icloud.com",
            "yahoo.com"
        ]

        this.nome = randomizar_lista(nomes) + " " + randomizar_lista(sobrenomes) + " " + randomizar_lista(sobrenomes);
        this.primeiro_nome = this.nome.split(" ")[0];
        this.mensagem = new Mensagem();
        this.email = this.nome.toLowerCase().replace(/\s/igm, '-')
            .replace(/á|ã/img, 'a')
            .replace(/é/img, 'e')
            .replace(/í/img, 'i')
            .replace(/ú/img, 'u')
            .replace(/ç/img, 'c')
            .replace(/d’avila/img, 'd-avila') +
            '@' +
            randomizar_lista(tipos_email);
        this.usuario = this.nome.toLowerCase().replace(/\s/igm, '-')
            .replace(/á|ã/img, 'a')
            .replace(/é/img, 'e')
            .replace(/í/img, 'i')
            .replace(/ú/img, 'u')
            .replace(/ç/img, 'c');
        this.senha = randomizar_palavra(12, 8);
    }
}

class Mensagem {
    constructor() {
        var ipsum = new LoremIpsum();
        this.tamanho = ipsum.paragraph(randomizar_inteiro(100, 1), randomizar_inteiro(100, 1));
    }
}

class Apartamento {
    

    constructor(numero){
        let status_tipo = [ 'Single', 'Double', 'Master', 'Luxe', 'Presidential' ];
        let status_quarto = [ 'Maintanance', 'Occupied', 'Unoccupied', 'Booked' ];
        

        
        this.numero = numero;
        this.tipo = randomizar_lista(status_tipo);
        this.status = randomizar_lista(status_quarto);
        

    }
}