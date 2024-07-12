import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import ErrorPage from './pages/error';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//     {
//         path: '',
//         element: <Home />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '*',
//         element: <ErrorPage />
//     }
// ])

export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
