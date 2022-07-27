
- download the image:
    - **docker build -t my-postgres-db ./**

- run the container:
    - **docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db**

- Clean dev env:
    - **docker stop my-postgresdb-container**
    - **docker rm  my-postgresdb-container**
    - **docker rmi my-postgres-db**


- For migrations run:
    - **knex migrate:latest --env development**


- For seeds run:
    - **knex seed:run --env development**