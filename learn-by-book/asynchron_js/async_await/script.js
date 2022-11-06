const getPeople = count =>
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>
            request.status === 200
                ? resolves(JSON.parse(request.response).results)
                : reject(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
});

getPeople(5)
    .then(  members => console.log(members))
    .catch( error => console.error(`getPeople failed: ${error.message}`));