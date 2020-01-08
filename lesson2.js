const {
    getGithubAccountByUserNameCallback,
    getGithubAccountByUserNamePromise,
} = require('./github/api');

let users = ['mathias54', 'ndnzingano'];

users = users.map(user => getGithubAccountByUserNamePromise(user));

Promise.all(users).then(newUsers => {
    console.log(newUsers);
});

const getUsers = async () => {
    const asyncUsers = users.map(user => getGithubAccountByUserNamePromise(user));
    for await (let user of asyncUsers) {
        console.log(user);
    }
};

getUsers();


function getMyInformationByCallback(callback) {
    let aux = 0;
    let newArray = [];

    const handler = (data) => {
        aux = aux + 1;
        newArray.push(data);
        if (aux === users.length) callback(newArray);
    };

    users.forEach(user => {
        getGithubAccountByUserNameCallback(user, (erro, data) => {
            handler(data);
        });
    });
}

getMyInformationByCallback(console.log);
