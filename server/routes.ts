import { AuthRouter } from "./routers/auth";
import { ClassRouter } from "./routers/class";
import { StudentRouter } from "./routers/students";

const ROUTES = [
    {
        path: '/auth',
        router: AuthRouter
    },
    {
        path: '/students',
        router: StudentRouter
    },
    {
        path: '/class',
        router: ClassRouter
    },
]

export default ROUTES;