const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('Hello from AKS 👋'));
app.get('/healthz', (_, res) => res.status(200).send('ok'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
