import figma from '@figma/code-connect';
import { MobileStepper } from '../src/core/MobileStepper';

figma.connect(
    MobileStepper,
    'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=4525-6&m=dev',
    {
        props: {
            platform: figma.enum('Platform', {
                Mobile: 'mobile',
                Desktop: 'desktop',
            }),
            nextStep: figma.enum('Next Step', {
                Enabled: 'enabled',
                Disabled: 'disabled',
            }),
        },
        example: () => <MobileStepper variant="dots" activeStep={0} steps={5} />,
    }
);
