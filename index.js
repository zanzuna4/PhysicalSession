api = "https://dummyjson.com/users"

function displayInfo(){
    fetch(`https://dummyjson.com/users`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error')
        }
})
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
    
}
displayInfo()