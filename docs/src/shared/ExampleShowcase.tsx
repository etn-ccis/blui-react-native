import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { SystemStyleObject } from '@mui/system';
import * as colors from '@brightlayer-ui/colors';

export type ExampleShowcaseProps = BoxProps & {
    sx?: SxProps<Theme>;
};

export const ExampleShowcase = React.forwardRef<HTMLDivElement, ExampleShowcaseProps>(
    (props: ExampleShowcaseProps, ref): JSX.Element => (
        <Box
            ref={ref}
            sx={[
                (theme): SystemStyleObject<Theme> => ({
                    my: 2,
                    backgroundColor: colors.white[600],
                    p: 4,
                    color: 'text.primary',
                    borderRadius: '4px',
                    ...theme.applyStyles('dark', {
                        backgroundColor: colors.darkBlack[300],
                    }),
                }),
                ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
            ]}
        >
            {props.children}
        </Box>
    )
);
