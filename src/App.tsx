import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from './pages/layout';
import Home from './pages/home';
import MealTrain from './pages/meal-train';
import SignUp from './pages/sign-up';
import Registry from './pages/registry';
import Error from './pages/error';
import { config } from './config';
import OnCall from './pages/on-call';
import YardWork from './pages/yard-work';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error />}>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                {config.features.mealTrain && <Route path='/meal-train' element={<MealTrain />} />}
                {config.features.registries && <Route path='/registry' element={<Registry />} />}
                {config.features.signUp && <Route path='/sign-up' element={<SignUp />} />}
                {config.features.onCall && <Route path='/on-call' element={<OnCall />} /> }
                {config.features.yardTrain && <Route path='/yard-work' element={<YardWork />} />}
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
