FROM octohost/nodejs

ADD . /srv/www

WORKDIR /srv/www

RUN npm install

EXPOSE 8000

CMD node index.js