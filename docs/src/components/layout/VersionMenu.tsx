import React, { useEffect, useState } from 'react';
import Check from '@mui/icons-material/Check';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type VersionHistoryItem } from '../../__configuration__/versionHistory';

const docsBaseUrl = import.meta.env.BASE_URL.replace(/\/$/, '').replace(/\/v\d+$/, '');
const snapshotUrl = import.meta.env.BASE_URL.replace(/\/$/, '').match(/\/v\d+$/)?.[0] ?? '';

const getVersionUrl = (item: VersionHistoryItem): string => `${docsBaseUrl}${item.url}/`;

export const VersionMenu = (): React.JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
    const currentVersion = versionHistory.find((item) => item.url === snapshotUrl) ?? versionHistory[0];

    useEffect(() => {
        const abortController = new AbortController();

        const loadVersionHistory = async (): Promise<void> => {
            try {
                const response = await fetch(`${docsBaseUrl}/version-history.json`, { signal: abortController.signal });
                if (response.ok) {
                    setVersionHistory((await response.json()) as VersionHistoryItem[]);
                }
            } catch {
                // Keep the version control empty while the shared manifest is unavailable.
            }
        };

        void loadVersionHistory();
        return (): void => abortController.abort();
    }, []);

    const handleSelect = (item: VersionHistoryItem): void => {
        setAnchorEl(null);
        if (item.url !== currentVersion?.url) {
            window.location.assign(getVersionUrl(item));
        }
    };

    return (
        <>
            <ListItemButton onClick={(event): void => setAnchorEl(event.currentTarget)} sx={{ gap: 1, px: 3, py: 2 }}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ flex: 1, minWidth: 0 }}
                >
                    <Typography>Version</Typography>
                    <Typography variant={'body2'} color={'text.secondary'} noWrap>
                        {currentVersion?.date}
                    </Typography>
                </Stack>
                <ChevronRight fontSize={'small'} />
            </ListItemButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={(): void => setAnchorEl(null)}>
                {versionHistory.map((item) => (
                    <MenuItem
                        key={item.date}
                        selected={item.date === currentVersion?.date}
                        onClick={(): void => handleSelect(item)}
                        sx={{ gap: 3, minWidth: 300, px: 2.5, py: 1.5 }}
                    >
                        <ListItemText
                            primary={item.date}
                            secondary={
                                <>
                                    {item.packages.map((packageVersion) => (
                                        <Typography
                                            component={'span'}
                                            variant={'caption'}
                                            display={'block'}
                                            key={packageVersion.name}
                                        >
                                            {packageVersion.name} {packageVersion.version}
                                        </Typography>
                                    ))}
                                </>
                            }
                        />
                        {item.date === currentVersion?.date && (
                            <ListItemIcon sx={{ minWidth: 'auto' }}>
                                <Check fontSize={'small'} color={'primary'} />
                            </ListItemIcon>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
