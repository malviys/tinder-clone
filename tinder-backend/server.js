import mongoose from "mongoose";
import express from "express";
import Cors from "cors";
import Person from "./schema/person.js";

const db = [
    {
        name: "Elon Musk",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yPByyNzsvw5Q7rLe0lKR0gEyDL%26pid%3DApi&f=1",
    },
    {
        name: "Jeff Bezos",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WNbrzQwph77vCsHmg4Wf_wHaFj%26pid%3DApi&f=1",
    },
];

// setting server
const server = express();
const port = process.env.PORT || 8081;

server.use(express.json());
server.use(Cors());

// mongoose.connect("", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });


server.get("/persons", (req, res) => {
    res.status(200).send(db);
});

server.listen(port, () => {
    console.log(port);
});
