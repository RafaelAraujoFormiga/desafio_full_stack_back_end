# Desafio full_stack - Back end
Para inciar este projeto, é necessário instalar as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````

Em seguida faça as migrações 

````
yarn typeorm migration:run -d src/data-source.ts
````

<br>


Essa entrega já está com o Docker configurado, basta preencher as variáveis de ambiente no .env

Basta buildar e subir nossos containers usando o comando padrão:
````
docker-compose up --build
````

ou
````
docker compose up --build
````
O comando pode variar com a versão do docker compose instalada em sua máquina

***ATENÇÃO:*** a porta utilizada para rodar nosso docker é a `5432`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml. E a entrega já possui um workspace para facilitar a verificação das rotas.
