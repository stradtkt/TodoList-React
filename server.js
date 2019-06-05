const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/todo', '/routes/api/todo');
app.get('/', (req,res) => res.send('App is working'));
app.listen(port, () => console.log(`App is listening on port ${port}`));
