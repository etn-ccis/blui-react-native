import React from 'react';

// components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Spacer } from '@brightlayer-ui/react-components';
import { Settings } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// hooks
import { toggleDrawer, changeSiteTheme } from '../../redux/appState';
// import { changeDirection } from '../redux/appState';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useColorScheme, useTheme } from '@mui/material/styles';
import { RootState } from '../../redux/store';
import { SiteThemeType } from '../../__types__';
// import { UIDirection } from '../__types__';

export type SharedAppBarProps = {
    title: string;
};

const styles = {
    formControl: {
        px: 2,
        pb: 1,
    },
    caption: {
        px: 2,
        pt: 2,
        pb: 1,
        width: 280,
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    formLabel: {
        fontWeight: '600',
        color: 'text.primary',
        py: 1,
    },
};

export const SharedAppBar: React.FC<SharedAppBarProps> = (props): JSX.Element => {
    const { title } = props;
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const dispatch = useAppDispatch();
    const [themeSelectorAnchorEl, setThemeSelectorAnchorEl] = React.useState<null | HTMLElement>(null);
    const siteTheme = useAppSelector((state: RootState) => state.appState.siteTheme);
    // See hidden RTL site comment below
    // const siteDirection = useAppSelector((state: RootState) => state.appState.siteDirection);
    const linkToThemesOverview = `${import.meta.env.BASE_URL ? import.meta.env.BASE_URL : ''}/themes/overview`;

    const { setMode } = useColorScheme();

    const onClickThemeSelectorItem = React.useCallback(
        (option: SiteThemeType): void => {
            setMode(option);
            dispatch(
                changeSiteTheme({
                    siteTheme: option,
                })
            );
            setThemeSelectorAnchorEl(null);
        },
        [dispatch, setMode]
    );

    // See hidden RTL site options below
    // const onDirectionChange = React.useCallback(
    //     (option: UIDirection): void => {
    //         dispatch(changeDirection({ siteDirection: option }));
    //         setThemeSelectorAnchorEl(null);
    //     },
    //     [dispatch]
    // );

    const ThemeSelector = React.useCallback(
        () => (
            <Menu
                open={Boolean(themeSelectorAnchorEl)}
                anchorEl={themeSelectorAnchorEl}
                onClose={(): void => {
                    setThemeSelectorAnchorEl(null);
                }}
            >
                <Box sx={styles.menuContainer}>
                    <FormControl sx={styles.formControl}>
                        <FormLabel sx={styles.formLabel}>Choose Theme</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={siteTheme}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="light"
                                control={<Radio />}
                                label="Light Theme"
                                onClick={(): void => onClickThemeSelectorItem('light')}
                            />
                            <FormControlLabel
                                value="dark"
                                control={<Radio />}
                                label="Dark Theme"
                                onClick={(): void => onClickThemeSelectorItem('dark')}
                            />
                            <FormControlLabel
                                value="system"
                                control={<Radio />}
                                label="System Default"
                                onClick={(): void => onClickThemeSelectorItem('system')}
                            />
                        </RadioGroup>
                    </FormControl>
                    <Divider />
                    {/* hide the site RTL options in future only provide RTL to running examples */}
                    {/* <FormControl sx={[styles.formControl, { pt: 1 }]}>
                        <RadioGroup defaultValue={siteDirection}>
                            <FormLabel sx={styles.formLabel}>Choose Direction</FormLabel>
                            <FormControlLabel
                                value="ltr"
                                control={<Radio />}
                                label="Left-to-Right"
                                onClick={(): void => onDirectionChange('ltr')}
                            />
                            <FormControlLabel
                                value="rtl"
                                control={<Radio />}
                                label="Right-to-Left"
                                onClick={(): void => onDirectionChange('rtl')}
                            />
                        </RadioGroup>
                    </FormControl> */}
                    <Divider />
                    <Box sx={styles.caption}>
                        <Typography variant={'caption'} color={'text.secondary'}>
                            This website is themed using our React theme package. Learn more{' '}
                            <a href={linkToThemesOverview} style={{ color: 'inherit' }}>
                                here
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Menu>
        ),
        [siteTheme, themeSelectorAnchorEl, linkToThemesOverview, onClickThemeSelectorItem]
    );

    return (
        <>
            <AppBar position={'sticky'} elevation={0} sx={{ zIndex: 'appBar' }}>
                <Toolbar sx={{ px: 2 }}>
                    {!lgUp && (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                dispatch(toggleDrawer());
                            }}
                            edge={'start'}
                            sx={{ mr: 2.5 }}
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant={'h6'} color={'inherit'}>
                        {title}
                    </Typography>
                    <Spacer />
                    <IconButton
                        color={'inherit'}
                        size={'large'}
                        edge={'end'}
                        onClick={(e): void => {
                            setThemeSelectorAnchorEl(e.currentTarget);
                        }}
                    >
                        <Settings />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <ThemeSelector />
        </>
    );
};
