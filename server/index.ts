import express from 'express';
const PORT: number = 8080;

const app = express();

app.get('/', (req, res) => {
    res.json({ success: true });
})

app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT)
})