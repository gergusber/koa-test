FROM postgres
ENV POSTGRES_USER test
ENV POSTGRES_PASSWORD testdocker
ENV POSTGRES_DB palnetstest
COPY planets.sql /docker-entrypoint-initdb.d/
