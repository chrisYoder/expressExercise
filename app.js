const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hi there, welcome to my assignment'));

app.get('/:animal', (req, res) => {
    let animal = req.params.animal;
    res.send( () => {
        if(animal === 'pig'){
            `The ${animal} says 'oink'`;
        } else if (animal === 'cow'){
            `The ${animal} says 'moo'`;
        } else if(animal === 'dog'){
           `The ${animal} says 'Woof Woof`; 
        }else{
            starRoute;
        }
    });
        
});

app.get('/:word/:int', (req, res) => {
    let word = req.params.word;
    let num = req.params.int;
    let repeatable = `${word} `;
    res.send(repeatable.repeat(num));
}); 


const starRoute = app.get('*', (req, res) => 'Sorry, page not found...What are you doing with your life?');
starRoute;
app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running'));