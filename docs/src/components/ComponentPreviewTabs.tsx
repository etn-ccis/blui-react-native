import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { TabPanel } from './TabPanel';

const hidePlaygroundTabs = [
    'drawer-layout',
    'spacer',
    'drawer-body',
    'drawer-subheader',
    'drawer-footer',
    'auto-complete',
    'overline',
    'icons',
];

function a11yProps(index: number): any {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function getTabNumber(location: string): number {
    const pathName = location.substring(location.lastIndexOf('/') + 1);
    if (!pathName) return 0;

    switch (pathName) {
        case 'api-docs':
            return 1;
        case 'playground':
            return 2;
        default:
            return 0;
    }
}

function togglePlaygroundTab(location: string): boolean {
    if (!location) return false;
    const tabName = location.split('/').find((e) => hidePlaygroundTabs.includes(e));
    return tabName ? hidePlaygroundTabs.includes(tabName) : false;
}

const tabStyles = {
    flex: 1,
    color: 'text.primary',
    '&.Mui-selected': {
        color: 'primary.main',
    },
};

const tabPanelContentStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: (theme: Theme) => `calc(100vh - ${theme.spacing(8)})`,
    maxWidth: '1080px',
    mx: 'auto',
};

const outletContainerStyles = {
    pb: 6,
};

const playgroundContentStyles = {
    maxHeight: `calc(100vh - 64px)`,
    height: '100%',
    display: 'flex',
    flex: '1 1 0px',
};

export const ComponentPreviewTabs = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const [hidePlaygroundTab, setHidePlaygroundTab] = React.useState(false);

    const theme = useTheme();
    const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
        navigate(`/${newValue === 1 ? 'api-docs' : newValue === 2 ? 'playground' : 'examples'}`);
    };

    React.useEffect(() => {
        setValue(getTabNumber(location?.pathname));
        setHidePlaygroundTab(togglePlaygroundTab(location.pathname));
    }, [location]);

    return (
        <>
            <Tabs
                value={hidePlaygroundTab && value === 2 ? 0 : value}
                onChange={handleChange}
                aria-label="component docs tabs"
                centered
                textColor="inherit"
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    bgcolor: theme.palette.background.paper,
                    borderBottom: 1,
                    borderColor: 'divider',
                    position: 'sticky',
                    top: { xs: 56, sm: 64 },
                    zIndex: theme.zIndex.appBar,
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <Tab to="examples" component={Link} sx={tabStyles} label="Examples" replace={true} {...a11yProps(0)} />
                <Tab to="api-docs" component={Link} sx={tabStyles} label="API Docs" replace={true} {...a11yProps(1)} />
                {!hidePlaygroundTab && (
                    <Tab
                        to="playground"
                        component={Link}
                        sx={tabStyles}
                        label="Playground"
                        replace={true}
                        {...a11yProps(2)}
                    />
                )}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box
                    sx={{
                        ...tabPanelContentStyles,
                        [theme.breakpoints.down(1440)]: {
                            mx: 3,
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Box sx={outletContainerStyles}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    sx={{
                        ...tabPanelContentStyles,
                        [theme.breakpoints.down(1440)]: {
                            mx: 3,
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Box sx={outletContainerStyles}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={[playgroundContentStyles]}>
                    <Outlet />
                </Box>
            </TabPanel>
        </>
    );
};
