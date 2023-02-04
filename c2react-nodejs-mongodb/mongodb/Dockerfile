# BASE IMAGE
FROM mongo:5.0.14

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD 1111
ENV MONGO_INITDB_DATABASE shoppers

ADD ./data/shoppers.js /docker-entrypoint-initdb.d
# ADD จะคล้ายๆตัว COPY ต้องป้อน source กับ destination