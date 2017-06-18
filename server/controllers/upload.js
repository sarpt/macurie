const fs = require('fs');
const url = require('url');
const randomString = require('randomstring');

module.exports = {
  upload: (request, response) => {
    let body = Buffer.alloc(0);
    const randomName = randomString.generate(16);
    const filename = `${randomName}.pdf`;
    const filePath = `${__dirname}/../../public/Storage/${filename}`;
    request.on('data', (data) => {
      body = Buffer.concat([body, data]);
    });
    request.on('end', () => {
      fs.writeFile(filePath, body, 'binary', () => {
        response.status(201).send({ filename });
      });
    });
  },
};
