import { Home, Upload } from "src/pages";

export const PATH_HOME = "/";
export const PATH_UPLOAD = "/upload";

export const router = [
    { path: PATH_HOME, component: Home },
    { path: PATH_UPLOAD, component: Upload },
];