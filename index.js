class User {
    constructor(id, firstName, lastName, email){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }
}


   



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
    User.id = data.Users.id
    console.log(`User ID: ${User.id}`)
    console.log(`User First Name: ${User.firstName}`)
    console.log(`User Last Name: ${User.lastName}`)
    console.log(`User Email: ${User.email}`)

}

displayInfo()