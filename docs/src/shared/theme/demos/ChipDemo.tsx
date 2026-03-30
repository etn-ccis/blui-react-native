import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Chip } from '@brightlayer-ui/react-native-components';
import { Avatar } from 'react-native-paper';

export const ChipDemo: JSX.Element = (
    <TableContainer>
        <Table key={'button'}>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Chip
                            avatar={<Avatar.Icon size={20} icon="account-circle" />}
                            style={{
                                marginTop: 10,
                                width: 200,
                            }}
                        >
                            Outlined chip
                        </Chip>

                        <Chip
                            avatar={<Avatar.Icon size={20} icon="account-circle" />}
                            disabled
                            style={{
                                marginTop: 10,
                                width: 210,
                            }}
                        >
                            Outlined Chip disabled
                        </Chip>

                        <Chip
                            selected
                            showSelectedCheck
                            disabled
                            style={{
                                marginTop: 10,
                                width: 200,
                            }}
                        >
                            Selected Chip disabled
                        </Chip>
                    </TableCell>

                    <TableCell>
                        <Chip
                            mode="elevated"
                            style={{
                                marginTop: 10,
                                width: 200,
                            }}
                        >
                            Elevated Chip
                        </Chip>
                        <Chip selected showSelectedCheck mode="elevated" style={{ marginTop: 10, width: 200 }}>
                            Selected Chip
                        </Chip>
                        <Chip selected showSelectedCheck mode="elevated" disabled style={{ marginTop: 10, width: 200 }}>
                            Selected Chip disabled
                        </Chip>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);
