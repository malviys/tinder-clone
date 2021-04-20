import instance from "./base";

export default async function fetchPersons() {
    return instance.get("/persons");
}
