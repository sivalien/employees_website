const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    const PERSON_NUMBER = 300;
    let positions = ["Backend Developer", "Frontend Developer", "UI/UX Designer", "Undefined"];
    let employees = [];
    for (let i = 0; i < PERSON_NUMBER; i++) {
        let position_index = Math.floor(Math.random() * positions.length);
        employees.push({"name": `Person ${i + 1}`, "position": positions[position_index]})
    }
    res.send({"employees": employees});
});


app.listen(port, () => console.log(`Listening on port ${port}`));
