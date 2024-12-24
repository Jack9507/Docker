FROM ubuntu

WORKDIR /home/nodejs/app

RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y

RUN npm i express

COPY index.js index.js

CMD [ "node", "index.js" ]