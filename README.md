
download the image :

    docker build -t my-postgres-db ./

run the container
    docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db


docker stop my-postgresdb-container
docker rm  my-postgresdb-container
docker rmi my-postgres-db