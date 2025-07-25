import React, { useState } from 'react';
import { DrawerContext } from './contexts/drawerContextProvider';
import { NavigationDrawer } from './components/layout/NavigationDrawer';
import { MainRouter } from './router/main';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { Routes } from 'react-router-dom';

export const App = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <DrawerContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
            }}
        >
            <DrawerLayout drawer={<NavigationDrawer />} style={{ height: '100vh' }}>
                <Routes>{MainRouter}</Routes>
            </DrawerLayout>
        </DrawerContext.Provider>
    );
};
