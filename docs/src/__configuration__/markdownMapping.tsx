import React, { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import * as Colors from '@brightlayer-ui/colors';
import { useTheme, Theme } from '@mui/material/styles';
import { getHash } from '../utils';
import { cx } from '@emotion/css';

import './markdown.css';
import { BoxProps } from '@mui/system';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TableProps } from '@mui/material/Table';
import Box from '@mui/material/Box';

export const ExternalLink = (tProps: TypographyProps<'a'>): JSX.Element => {
    const theme = useTheme();
    return (
        <Typography
            component={'a'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            sx={{ fontWeight: 400, color: theme.palette.primary.main }}
            {...tProps}
        />
    );
};

export const InternalLink = (props: LinkProps): JSX.Element => {
    const theme = useTheme();
    return (
        <Link rel={'noopener noreferrer'} style={{ fontWeight: 400, color: theme.palette.primary.main }} {...props} />
    );
};

type HeadlineType = HTMLAttributes<HTMLDivElement> & {
    hash: string;
    TypographyProps: TypographyProps;
    SvgIconProps?: SvgIconProps;
};

const Headline: React.FC<HeadlineType> = ({
    hash,
    className,
    TypographyProps: otherTypographyProps,
    ...otherDivProps
}) => (
    <Box className={cx(className, 'headline')} {...otherDivProps} sx={{ ...otherDivProps.style }}>
        <Box component="span" id={hash} sx={{ position: 'relative', top: -90 }} />
        <Typography
            paragraph
            color={'primary'}
            component={'span'}
            {...otherTypographyProps}
            className={'headline-text'}
            sx={{ hyphens: 'auto', ...otherTypographyProps.style }}
        >
            {otherTypographyProps.children}
        </Typography>
    </Box>
);

export const componentsMap = {
    h1: (props: TypographyProps): JSX.Element => (
        <Headline
            className={'markdownH1'}
            style={{ marginBottom: 32, hyphens: 'auto' }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h1')}
            TypographyProps={{ variant: 'h4', ...props }}
        />
    ),
    h2: (props: TypographyProps): JSX.Element => (
        <Headline
            style={{ marginTop: 64, marginBottom: 16 }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h2')}
            TypographyProps={{ variant: 'h6', ...props }}
        />
    ),
    h3: (props: TypographyProps): JSX.Element => (
        <Headline
            style={{ marginTop: 32, marginBottom: 16 }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h3')}
            TypographyProps={{ variant: 'body1', style: { fontWeight: 600 }, ...props }}
        />
    ),
    h4: (props: TypographyProps): JSX.Element => (
        <Headline
            style={{ marginTop: 16 }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h4')}
            TypographyProps={{ variant: 'subtitle1', ...props }}
        />
    ),
    h5: (props: TypographyProps): JSX.Element => (
        <Headline
            style={{ marginTop: 8 }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h5')}
            TypographyProps={{ variant: 'body2', ...props }}
        />
    ),
    h6: (props: TypographyProps): JSX.Element => (
        <Headline
            style={{ marginTop: 8, fontSize: '0.75rem' }}
            hash={getHash(React.Children.toArray(props.children).map(String).join('') || 'h6')}
            TypographyProps={{ variant: 'body2', ...props }}
        />
    ),
    a: (props: React.LinkHTMLAttributes<HTMLLinkElement>): JSX.Element => {
        let tProps;
        if (props.href && (props.href.match(/^http/gi) || props.href.match(/^mailto/gi))) {
            tProps = props as TypographyProps<'a'>;
            return <ExternalLink {...tProps} />;
        }
        tProps = props as LinkProps;
        //@ts-ignore
        return <InternalLink to={props.href} {...tProps} />;
    },
    p: (props: TypographyProps): JSX.Element => (
        <Typography sx={{ lineHeight: '1.6', m: '15px auto' }} color={'text.primary'} paragraph {...props} />
    ),
    ul: (props: BoxProps): JSX.Element => <Box component={'ul'} sx={{ m: '15px auto', pl: '60px' }} {...props} />,
    li: (props: TypographyProps<'li'>): JSX.Element => (
        <Typography component={'li'} className={'mdLi'} sx={{ m: '15px auto' }} color={'text.primary'} {...props} />
    ),
    blockquote: (props: TypographyProps<'blockquote'>): JSX.Element => (
        <Typography
            component={'blockquote'}
            sx={{
                pr: 2,
                mb: 1,
                borderLeft: (theme: Theme) => `4px solid ${theme.palette.text.disabled}`,
                p: '0 15px',
                m: '15px 0',
                color: 'text.secondary',
            }}
            {...props}
        />
    ),
    pre: (props: TypographyProps<'pre'>): JSX.Element => (
        <Typography
            component={'pre'}
            color={'textPrimary'}
            sx={{
                pr: 2,
                mb: 1,
                display: 'flex',
                backgroundColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? theme.palette.background.default : Colors.darkBlack[300],
                '& code': {
                    width: '100%',
                },
            }}
            {...props}
        />
    ),
    code: (props: TypographyProps<'code'>): JSX.Element => (
        <Typography
            component={'code'}
            color={'inherit'}
            sx={{
                fontSize: '0.875rem',
                m: '0px 2px',
                p: '0px 5px',
                border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? theme.palette.background.default : Colors.darkBlack[300],
                borderRadius: '2px',
                fontFamily: `'Roboto Mono', monospace`,
                lineHeight: '1.6',
            }}
            {...props}
        />
    ),
    inlineCode: (props: TypographyProps<'code'>): JSX.Element => (
        <Typography
            component={'code'}
            color={'textPrimary'}
            sx={{
                backgroundColor: (theme: Theme) =>
                    theme.palette.mode === 'light' ? theme.palette.background.default : Colors.darkBlack[300],
                fontFamily: `'Roboto Mono', monospace`,
                border: (theme: Theme) =>
                    theme.palette.mode === 'light' ? undefined : `${theme.palette.divider} 1px solid`,
            }}
            {...props}
        />
    ),
    table: (props: TableProps): JSX.Element => (
        <Box
            className="tableContainer"
            sx={{
                overflow: 'auto',
                boxSizing: 'border-box',
                mb: 2,
                color: 'text.primary',

                table: {
                    textAlign: 'left',
                    borderCollapse: 'collapse',
                    minWidth: '100%',
                    border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
                },
                a: {
                    fontSize: '0.875rem',
                },
                tr: {
                    border: 'unset',
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
                },
                th: {
                    border: 'unset',
                    borderLeft: 0,
                    borderRight: 0,
                    p: '1rem',
                    fontSize: '0.875rem',
                    borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
                },
                'tr:last-of-type': {
                    borderBottom: 0,
                },
                thead: {
                    backgroundColor: (theme: Theme): string =>
                        theme.palette.mode === 'light' ? Colors.white[100] : Colors.black[800],
                },
                'tbody tr:nth-of-type(odd)': {
                    backgroundColor: 'background.paper',
                },
                'tbody tr:nth-of-type(even)': {
                    backgroundColor: (theme: Theme): string =>
                        theme.palette.mode === 'light' ? Colors.white[100] : Colors.black[800],
                },
                td: {
                    fontSize: '0.875rem',
                    p: '1rem',
                },
            }}
        >
            <table {...props} />
        </Box>
    ),
};
