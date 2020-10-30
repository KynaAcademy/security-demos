FROM postgres:9.6-alpine

ADD ./seed.sql /docker-entrypoint-initdb.d/seed.sql

ENV POSTGRES_USER securitylabs
ENV POSTGRES_PASSWORD pass
