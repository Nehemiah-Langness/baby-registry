import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from './pages/layout';
import Home from './pages/home';
// import OnCall from './pages/on-call';
import MealTrain from './pages/meal-train';
import SignUp from './pages/sign-up';
import YardWork from './pages/yard-work';
import Registry from './pages/registry';
import Error from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error />}>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                {/* <Route path='/on-call' element={<OnCall />} /> */}
                <Route path='/meal-train' element={<MealTrain />} />
                <Route path='/yard-work' element={<YardWork />} />
                <Route path='/registry' element={<Registry />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
