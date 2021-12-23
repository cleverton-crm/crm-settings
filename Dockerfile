FROM node:16
ENV NODE_ENV=development
RUN mkdir -p /var/www/settings
WORKDIR /var/www/settings
ADD . /var/www/settings

RUN yarn install
RUN yarn add @nestjs/cli
CMD yarn build && yarn start:prod2
