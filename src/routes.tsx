
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:cripto",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export { router };