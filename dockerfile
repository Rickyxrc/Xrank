FROM node
COPY ./dist /run/static
COPY ./server /run/server
CMD [ "node" , "/run/server/app.js" ]
EXPOSE 80
RUN cd /run/server/ \
    && npm i express \
    && npm i cors \
    && npm i mysql