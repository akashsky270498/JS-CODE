function setUsername(username) {
    //complex DBcalls
    this.username = username;
    console.log("called");
}

function createUsername(username, email, password) {
    // setUsername(username),
    /*(setUsername function is getting called here)this function will not work as inside the setUsername function it is using there own "this" keyword, so once the setUsername function will get executed it will come out from the context hence this will also gets destroyed,  so to make it work we need to pass our own "this" keyword. we can pass "this" in setUsername(). */

    setUsername.call(this, username)
    this.email = email,
        this.password = password
}

const beast = new createUsername("Beast", "beast@gmail.com", "123@abcd");
console.log(beast);
// => createUsername { email: 'beast@gmail.com', password: '123@abcd' }in case of setUsername(username),

// => createUsername {username: 'Beast', email: 'beast@gmail.com', password: '123@abcd'} in case of setUsername.call(this, username)