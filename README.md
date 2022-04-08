
![queerJobs](https://i.ibb.co/QpJ7kTT/Group-5198.png)

# [XP] GRUPO 6 CHEFÃO

##  ENDPOINTS

 - **POST** /usuarios
 
 Exemplo de JSON:
 

      {
	    	"email": "seu-nome@mail.com",
	    	"senha": "sUa-$ENH4"
    	}
  
 ***
 - **POST** /candidatos
 
 Exemplo de JSON:
 

      {
	    	"nome": "Fernando Gonzales Medeiros",
	    	"foto_perfil": "https://media.gettyimages.com/photos/confident-businessman-with-arms-crossed-picture-id1191607543?s=2048x2048",
	    	"telefone": "(11) 99635-4512",
	    	"orient_sexual": "gay",
	    	"ident_genero": "homem cisgênero",
	    	"pronome": "ele/dele",
	    	"data_nasc": "1985-02-03",
	    	"empresa_ideal": "A empresa ideal para se trabalhar é a empresa em que o colaborador dela se sente realizado, não só na parte financeira, em receber seu salário por prestação de serviços, mas também pela realização profissional de conseguir realizar algo dentro de sua profissão que traga alegria e contentamento naquilo que está fazendo",
	    	"id_usuario": 94
		  }
    

 - **PUT** /candidatos/:id_candidato
 
 Exemplo de JSON:
 
        {
	    	"nome": "Fernando Gonzales",
	    	"foto_perfil": "https://media.gettyimages.com/photos/confident-businessman-with-arms-crossed-picture-id1191607543?s=2048x2048",
	    	"telefone": "(11) 99635-4512",
	    	"orient_sexual": "bissexual",
	    	"ident_genero": "homem cisgênero",
	    	"pronome": "ele/dele",
	    	"data_nasc": "1985-02-03",
	    	"empresa_ideal": "A empresa ideal para se trabalhar é a empresa em que o colaborador dela se sente realizado, não só na parte financeira, em receber seu salário por prestação de serviços, mas também pela realização profissional de conseguir realizar algo dentro de sua profissão que traga alegria e contentamento naquilo que está fazendo"
		}
    	
 - **POST** /candidatos/formacao

Exemplo de JSON:

        {
		"formacao": "",
	    	"status": "",
	    	"grau": "",
	    	"curso": "",
	    	"instituicao": "",
	    	"data_inicio": "AAAA-MM-DD",
	    	"data_fim": "AAAA-MM-DD",
	    	"id_candidato": 0
    	}

 - **POST** /candidatos/certificados

Exemplo de JSON:
 
      {
		"area_estudo": "",
		"instituicao": "",
		"modalidade": "",
		"data_inicio": "AAAA-MM-DD",
		"data_fim": "AAAA-MM-DD",
		"id_candidato": 0
    	}
	
 - **POST** /candidatos/experiencias
 
 Exemplo de JSON:

     
        {
	      "empresa": "",
	      "cargo": "",
	      "data_inicio": "AAAA-MM-DD",
	      "data_fim": "AAAA-MM-DD",
	      "modalidade": "",
	      "id_candidato": 0
  	}
	
 ***
 - **POST** /empresas

Exemplo de JSON:
 

        {
          "nome": "Dafiti",
          "sobre": "A Dafiti tem a missão de conectar para uma vida mais divertida e produtiva. Essa é a essência que nos estimula a dar o melhor para transformar e inovar. Fazemos parte de um dos maiores grupos de entretenimento do mundo e nos dedicamos a levar diversão para você e sua família.",
          "imagem_perfil": "https://cdn.freelogovectors.net/wp-content/uploads/2019/01/dafiti_logo.png",
          "sobre_diversidade": "Temos as pessoas como um dos nossos principais valores e acreditamos que a diversidade nos complementa e nos fortalece. Por isso, apoiamos práticas para o respeito aos talentos e às habilidades de todos e todas. Queremos ter uma força de trabalho tão diversa quanto o mercado que atuamos e criamos oportunidade para alcançar esse objetivo. Aqui não existe distinção de gênero, raça, cor, orientação sexual, posição social ou deficiências. Todos e todas são bem-vindos!",
          "politicas_lgbtqia": "Comitê de Diversidade: O objetivo do Comitê é ser um braço para ações que envolvem Diversidade e Inclusão na empresa, garantindo que seremos uma empresa que gera oportunidades, acolhe e inclui pessoas de grupos minoritários. O conselho apoia todas as ações que envolvem o tema, validando, sugerindo e trazendo reflexões; Agenda de treinamento de gestores para a diversidade e para o diálogo do respeito; Benefícios de saúde a casais LGBTI+, como licenças parentais estendidas – maternidade de seis meses e paternidade de 40 dias –, além do berçário, sem custo, para pais e mães, independentemente do gênero ou orientação sexual.",
          "id_usuario": 84
       }
       
 - **POST** /vagas
 
 Exemplo de JSON:
 

        {
          "titulo": "Product Designer Pleno",
          "localidade":"Remoto",
          "salario":6000,
          "requisitos":"Formação entre Dezembro de 2022 e Dezembro de 2023 (superior ou tecnólogo);\nAs vagas são para trabalhar presencialmente na cidade de São Paulo;\nEstar cursando Ciências da Computação, Sistemas para Informação e áreas correlatas a Tecnologia da Informação.",
          "id_empresa": 14
        }
 - **GET** /vagas

 - **POST** /vagas/beneficios

Exemplo de JSON:
 

      {
        "nome": "Vale Transporte",
        "valor":300,
        "id_vaga": 4
      }
  

##  💻 Desenvolvedores 

- Alexandre Salgueiro Barbosa (back-end)
- Raphael Micucci Bomfim (back-end)

- Pietro Sera (front-end)
- Wilciara Castilho Wertz (front-end)

 

![logo-gama-academy](https://user-images.githubusercontent.com/94201226/156206063-5f5ee3a5-7aa8-44e9-b768-2925d1a066b8.png)
