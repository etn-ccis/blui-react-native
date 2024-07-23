import React from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import Stack from '@mui/material/Stack';
import { Hero, HeroBanner, InfoListItem, ScoreCard, ScoreCardProps } from '@brightlayer-ui/react-native-components';
import Notifications from '@mui/icons-material/Notifications';
import ListAlt from '@mui/icons-material/ListAlt';
import Cloud from '@mui/icons-material/Cloud';
import { getImage, removeEmptyProps } from '../../../utils/utilities';
import { View } from 'react-native';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';
import 'prismjs/components/prism-jsx.min';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'headerTitle',
        type: 'string',
        typeLabel: 'string',
        description: 'The primary text',
        required: true,
        initialValue: 'Substation 3',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'actionItems',
        type: 'boolean',
        typeLabel: `IconSource`,
        initialValue: false,
        description: 'Display actionItems in the header',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'badgeOffset',
        type: 'number',
        typeLabel: `number`,
        description: 'Vertical offset for the badge component',
        required: false,
        initialValue: -40,
        minValue: -50,
        maxValue: 50,
        valueStep: 2,
        defaultValue: 0,
        category: 'Optional Props',
    },
    {
        id: 'headerBackgroundImage',
        type: 'select',
        typeLabel: `ImageSourcePropType`,
        description: 'An image to display in the header',
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'pattern'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'headerColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the background background',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'headerFontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the header text',
        required: false,
        initialValue: '',
        defaultValue: '#ffffff',
        category: 'Optional Props',
    },
    {
        id: 'headerInfo',
        type: 'string',
        typeLabel: 'string',
        description: 'The tertiary text',
        required: true,
        initialValue: '4 Devices',
        category: 'Optional Props',
    },
    {
        id: 'headerSubtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'The secondary text',
        required: true,
        initialValue: 'High Humidity Alarm',
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'numberOfHeroes',
        label: '# of Heroes',
        type: 'number',
        description: '# of heroes to show',
        required: false,
        initialValue: 1,
        minValue: 0,
        maxValue: 2,
        valueStep: 1,
        defaultValue: 1,
        category: 'Additional Configuration',
    },
];

const ScoreCardPreview: PreviewComponent = ({ data }) => {
    const { headerBackgroundImage, actionItems, numberOfHeroes, ...rest } = data as unknown as ScoreCardProps & {
        numberOfHeroes: number;
    };
    const theme = useExtendedTheme();
    const heroes: JSX.Element[] = [
        <Hero
            key={'hero1'}
            icon={{ family: 'brightlayer-ui', name: 'temp' }}
            label={'Temperature'}
            iconBackgroundColor={theme.colors.surface}
            ChannelValueProps={{ value: 98, units: '°F' }}
            style={{ overflow: 'visible' }}
        />,
        <Hero
            key={'hero2'}
            icon={{ family: 'brightlayer-ui', name: 'moisture' }}
            label={'Humidity'}
            iconBackgroundColor={theme.colors.surface}
            ChannelValueProps={{ value: 54, units: '%' }}
            style={{ overflow: 'visible' }}
        />,
    ];
    const getActionItems = (value: boolean): any => {
        switch (value) {
            case true:
                return [
                    { icon: { name: 'star-outline' } },
                    { icon: { name: 'settings' } },
                    { icon: { name: 'more-vert' } },
                ];
            default:
                return undefined;
        }
    };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Box>
                <ScoreCard
                    {...removeEmptyProps(rest)}
                    headerTitle={rest.headerTitle}
                    headerBackgroundImage={getImage(headerBackgroundImage?.toString() ?? '')}
                    actionItems={getActionItems(actionItems as unknown as boolean)}
                    actionRow={
                        <View>
                            <InfoListItem dense chevron title={'View Location'} hidePadding />
                        </View>
                    }
                    badge={
                        <HeroBanner
                            style={{
                                flex: 0,
                                flexBasis: 'auto',
                                minWidth: 140,
                                justifyContent: 'space-between',
                            }}
                        >
                            {heroes.slice(0, numberOfHeroes)}
                        </HeroBanner>
                    }
                >
                    <View>
                        <InfoListItem dense title={'0 Alarms'} icon={<Notifications />} />
                        <InfoListItem dense title={'1 Event'} icon={<ListAlt />} />
                        <InfoListItem dense title={'Online'} icon={<Cloud />} />
                    </View>
                </ScoreCard>
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<ScoreCard 
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['numberOfHeroes', 'headerBackgroundImage', 'actionItems'],
    })}
    ${data.headerBackgroundImage !== 'undefined' ? `headerBackgroundImage={headerBackgroundImage}` : ''}
    ${
        data.actionItems && data.actionItems !== 'undefined'
            ? `actionItems={[
        { icon: { name: 'star-outline' } },
        { icon: { name: 'settings' } },
        { icon: { name: 'more-vert' } },
    ]}`
            : ''
    }
    ${
        ((data.numberOfHeroes as number) ?? 0) > 0
            ? `badge={
        <HeroBanner>
            <Hero
                icon={{ family: 'brightlayer-ui', name: 'temp' }}
                label={'Temperature'}
                iconBackgroundColor={theme.colors.surface}
                ChannelValueProps={{ value: 98, units: '°F' }}
                style={{ overflow: 'visible' }}
            />
            ${
                ((data.numberOfHeroes as number) ?? 0) > 1
                    ? `<Hero
                icon={{ family: 'brightlayer-ui', name: 'moisture' }}
                label={'Humidity'}
                iconBackgroundColor={theme.colors.surface}
                ChannelValueProps={{ value: 54, units: '%' }}
                style={{ overflow: 'visible' }}
            />`
                    : ''
            }
        </HeroBanner>
    }`
            : ''
    }
>
    <InfoListItem
        dense
        title={'0 Alarms'}
        icon={<Notifications />}
    />
    <InfoListItem
        dense
        title={'1 Event'}
        icon={<ListAlt />}
    />
    <InfoListItem
        dense
        title={'Online'}
        icon={<Cloud />}
    />
    </List>
</ScoreCard>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const ScoreCardPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ScoreCardPreview} />
    </Box>
);
