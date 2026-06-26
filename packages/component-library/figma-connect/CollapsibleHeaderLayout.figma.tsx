import figma from '@figma/code-connect';
import { CollapsibleHeaderLayout } from '../src/core/CollapsableHeaderLayout';

figma.connect(
    CollapsibleHeaderLayout,
    'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=4417-725&m=dev',
    {
        props: {},
        example: () => (
            <CollapsibleHeaderLayout
                HeaderProps={{
                    title: 'Title',
                    subtitle: 'Subtitle',
                    variant: 'dynamic',
                    expandable: true,
                    startExpanded: true,
                }}
            />
        ),
    }
);
