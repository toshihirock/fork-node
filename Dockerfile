FROM node
COPY . .
CMD [ "node", "parent.js" ]
