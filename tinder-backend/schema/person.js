import mongoose from "mongoose";

const Person = mongoose.Schema({
    name: String,
    imageUrl: String,
});

export default mongoose.model("person", Person);
