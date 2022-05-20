const aux = "http://127.0.0.1:5500/";

 export function routes(directyRoutes) {
    switch (directyRoutes) {
        case "routeRegister":
            window.location.href = `${aux}index.html`;
            break;
        case "routeQuery":
            window.location.href = `${aux}src/Class_Service/views/query.html`;
            break;
        default:
            alert("Route not defined");
            break;
    };
}