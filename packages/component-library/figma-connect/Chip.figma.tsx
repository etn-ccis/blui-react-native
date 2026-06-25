import figma from '@figma/code-connect';
import { Chip } from '../src/core/Chip';

figma.connect(
    Chip,
    'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=4376-558&m=dev',
    {
        props: {
            style: figma.enum('Style', {
                Outlined: 'outlined',
                Filled: 'flat',
            }),
            disabled: figma.enum('State', {
                Disabled: true,
                Default: false,
                Hover: false,
                Selected: false,
                Drag: false,
            }),
            selected: figma.enum('State', {
                Selected: true,
                Default: false,
                Hover: false,
                Disabled: false,
                Drag: false,
            }),
            leadingContent: figma.enum('Leading Content', {
                None: 'none',
                Icon: 'icon',
                Avatar: 'avatar',
                Thumbnail: 'thumbnail',
            }),
            text: figma.string('Text'),
        },
        example: ({ style, disabled, selected, text }) => (
            <Chip mode={style} disabled={disabled} selected={selected} onPress={() => {}}>
                {text}
            </Chip>
        ),
    }
);
