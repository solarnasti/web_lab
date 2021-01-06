FROM node:14

WORKDIR /home/solarnasti/Desctop/temp/"recipe-app-2.0"/recipe-app-backend

COPY package*.json ./

RUN yarn install

COPY . /home/solarnasti/Desctop/temp/"recipe-app-2.0"/recipe-app-backend

EXPOSE 5000

CMD ["yarn", "start"]

