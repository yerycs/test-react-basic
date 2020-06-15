import Loadable from 'react-loadable';
import LoadingComponent from '../Common/Loader/Loading';

export default [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Loadable({
            loader: () => import('../Modules/Home/Home'),
            loading: LoadingComponent,
        }),
    }
]
