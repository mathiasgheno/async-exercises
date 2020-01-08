const fetch = (url) => {
    return new Promise((resolve, reject) => {
        if (url) resolve('Hello Async');
        else reject('There is no URL');
    });
};

const myFunction2 =  () => 'Hello Sync';

async function main() {
    try {
        console.log(myFunction2());
        console.log(await fetch('http://blabla').then(result => {
            return result + ' ' + result;
        }));
        console.log(myFunction2());
    } catch (e) {
        console.log(e);
    }
}

main();


