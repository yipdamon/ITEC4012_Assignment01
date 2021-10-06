// requiring express
const express = require('express');

// initialize
const app = express();

// set port listen to 9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("try 'localhost:9000/api/penguins' or 'localhost:9000/api/bears'");
});

// api routes
app.get('/api/penguins', (req, res) => {

    // return dummy data
    const cats = ["fact1: A group of penguins in the water is called a raft but on land they’re called a waddle!", "fact2: The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading.", "fact3: Penguins may huddle together for several reasons.", "fact4: Penguins evolved to fly underwater.", "fact5: A penguin’s thick feathers aren’t the only way this bird stays warm.", "fact6: Penguins live in many locations and habitats. ", "fact7: Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild.", "fact8: Penguin feet are adapted to walk long distances.", "fact9: Many male penguins gift female penguins with rocks in order to woo them.", "fact10: According to some animal experts, the penguin is one of the most streamlined animals in the world."];

    // sending a response should be in JSON
    res.send(JSON.stringify(cats));
});

app.get('/api/bears', (req, res) => {

    const cats = ["fact1: Pandas Have an Extra Bone Just for Eating", "fact2: Sloth Bears Use Their Lips Like a Vacuum", "fact3: Brown Bears Are the Most Widespread", "fact4: 'Grolar' and 'Pizzly' Bears Are Appearing", "fact5: Black Bears Are Not Always Black", "fact6: White Bears Have Cultural Significance", "fact7: Panda Babies Are Shockingly Small", "fact8: Polar Bears Are Marine Mammals", "fact9: Only 1 Bear Species Lives in the Southern Hemisphere", "fact10: Sun Bears Are (Falsely) Thought To Have Medicinal Properties"];
    res.send(JSON.stringify(cats));
});

// run server on port
app.listen(port, () => {
    console.log("Listening on port", port);
});

