const url = "http://localhost:3005/todos";

const createTodo = async (todo) => {
try{
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
        
    }).then((response) => response.json());

} catch(e){
    console.log(e);
}
}
const getTodo = async () => {
try{
    return await fetch(url, {
        method: 'GET', 
    }).then((response) => response.json());

} catch (e){
    console.log(e);
}}
const patchTodo = async (id, data) => {
    try{
    return await fetch(url+`/${id}`, {
        method: 'PATCH', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());

} catch (e) {
    console.log(e);
}}
export default {
    createTodo,
    getTodo,
    patchTodo,
}