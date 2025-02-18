import React from 'react';
import { Check, AccountCircle } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
                                width:200,
                            }}
                        >
                            Outlined chip
                        </Chip>

                        <Chip
                            avatar={<Avatar.Icon size={20} icon="account-circle" />}
                            disabled
                           
                            style={{
                                marginTop: 10,
                                width:210,
                            }}
                        >
                            Outlined Chip disabled
                        </Chip>

                       
                        <Chip
                            mode="elevated"
                            disabled
                           
                            style={{
                                marginTop: 10,
                                width:200,
                            }}
                        >
                            Elevated Chip disabled
                        </Chip>
                    </TableCell>

                    <TableCell>
                        {/* <Chip
                            icon={{ name: 'info' }}
                            avatar={<Avatar.Icon size={40} icon="account-circle" />}
                            // mode={outlined}
                        >
                            label
                        </Chip> */}

                        {/* <Chip selected showSelectedCheck mode="outlined" style={{ marginTop: 10, width:200, }}>
                            Selected Chip
                        </Chip> */}
                         <Chip
                            mode="elevated"
                            style={{
                                marginTop: 10,
                                width:200,
                            }}
                        >
                            Elevated Chip
                        </Chip>
                        <Chip selected showSelectedCheck mode="elevated" style={{ marginTop: 10,width:200,}}>
                            Selected Chip
                        </Chip>
                        <Chip selected showSelectedCheck disabled style={{ marginTop: 10 ,}}>
                            Selected Chip disabled
                        </Chip>
                    </TableCell>
                </TableRow>
                
                
                
            </TableBody>
        </Table>
    </TableContainer>
);
