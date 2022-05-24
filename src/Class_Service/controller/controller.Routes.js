import { home, section } from "../../utils/varGlobais.js";

export function routes(directyRoutes) {

    switch (directyRoutes) {
        case "routeRegister": window.location.href = `${home + section}Register.html`;
            break;
        case "routeQuery": window.location.href = `${home + section}Query.html`;
            break;
        case "routeOutSection": window.location.href = home;
            break;
        default:
            alert("Route not defined");
            break;
    }
}