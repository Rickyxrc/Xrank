FROM node:16.15-alpine
COPY ./backend /run/server
EXPOSE 80
RUN cd /run/server \
    && npm install
ENTRYPOINT [ "node" , "/run/server/app.js" ]