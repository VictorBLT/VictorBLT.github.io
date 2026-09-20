import './i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Analytics from './components/analytics/Analytics.jsx';
import MainLayout from './layouts/main/MainLayout.jsx';
import ScrollUpdate from './layouts/main/ScrollUpdate.jsx';
import Main from './pages/main/Main.jsx';
import Project from './pages/project/Project.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Analytics />
            <ScrollUpdate />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Main />} />
                    <Route path="/project/:slug" element={<Project />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
