import figma from '@figma/code-connect';
import { Grade } from '../src/core/Grade';

figma.connect(
    Grade,
    'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=3991-9508&m=dev',
    {
        props: {
            label: figma.enum('Grade', {
                'A+': 'A+',
                A: 'A',
                'A-': 'A-',
                'B+': 'B+',
                B: 'B',
                'B-': 'B-',
                'C+': 'C+',
                C: 'C',
                'C-': 'C-',
                'D+': 'D+',
                D: 'D',
                'D-': 'D-',
                F: 'F',
            }),
            size: figma.enum('Size', {
                Small: 24,
                Medium: 40,
                Large: 72,
            }),
        },
        example: ({ label, size }) => <Grade label={label} size={size} />,
    }
);
