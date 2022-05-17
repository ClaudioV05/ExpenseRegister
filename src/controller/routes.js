const aux = "http://127.0.0.1:5500/";

function routes(directyRoutes) {
    switch (directyRoutes) {
        case 'Register':
            window.location.href = `${aux}index.html`;
            break;
        case 'Query':
            window.location.href = `${aux}src/views/query.html`;
            break;
        default:
            alert('Route not defined')
            break;
    }
}