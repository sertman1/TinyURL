const page = (title, body) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
  </head>
  <body>
    ${body}
  </body>
  </html>
  `;
};

const index = () => {
  const title = "TinyURL";
  const body = `<h3>Welcome to TinyURL</h3>`;

  return page(title, body);
};

module.exports = { index };
