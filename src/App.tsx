import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from './pages/layout';
import Home from './pages/home';
import OnCall from './pages/on-call';
import Trains from './pages/trains';
import Error from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error />}>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/on-call' element={<OnCall />} />
                <Route path='/trains' element={<Trains />} />
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
