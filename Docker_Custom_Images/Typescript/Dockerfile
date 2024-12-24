FROM node:20.18-alpine3.20 as base

# Stage-1: build your code
FROM base as builder

WORKDIR /home/build

COPY package.json .
COPY tsconfig.json  .
COPY ./src ./src

RUN npm install 
RUN npm run build

# Stage-2: Run your executable code
FROM base as runner

WORKDIR /home/myapp

COPY --from=builder /home/build/dist ./dist
COPY --from=builder /home/build/package*.json ./

# --omit=dev flag will make sure that dev dependencies mentioned in package.json are NOT installed.
RUN npm install --omit=dev

CMD [ "npm", "start" ]
