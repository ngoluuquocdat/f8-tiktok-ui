// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
// Layouts
import { HeaderOnly } from '~/components/Layout';

// allow anonymous access
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// redirect to login path if no authen found
const privateRoutes = [];

export { publicRoutes, privateRoutes };
