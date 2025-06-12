import React, { act } from 'react';
import { MobileStepper } from '.';
import TestRenderer from 'react-test-renderer';
import { ProgressBar } from 'react-native-paper';
import { View } from 'react-native';

describe('MobileStepper', () => {
    it('should render typical number of steps', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(<MobileStepper steps={5} activeStep={2} />);
        });
        const stepper = renderer!.root;
        const dots = stepper.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots).toHaveLength(5);
    });

    it('should render at least 1 step', () => {
        let renderer0: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer0 = TestRenderer.create(<MobileStepper steps={0} activeStep={3} />);
        });
        const stepper0 = renderer0!.root;
        const dots0 = stepper0.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots0).toHaveLength(1);

        let renderer1: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer1 = TestRenderer.create(<MobileStepper steps={-1} activeStep={3} />);
        });
        const stepper1 = renderer1!.root;
        const dots1 = stepper1.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots1).toHaveLength(1);

        let renderer2: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer2 = TestRenderer.create(<MobileStepper steps={-10} activeStep={3} />);
        });
        const stepper2 = renderer2!.root;
        const dots2 = stepper2.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots2).toHaveLength(1);
    });

    it('should render progress indicator', () => {
        // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
        (): void => {
            let renderer: TestRenderer.ReactTestRenderer | undefined;
            act(() => {
                renderer = TestRenderer.create(<MobileStepper steps={5} activeStep={0} variant={'progress'} />);
            });
            const instance = renderer!.root;
            expect(instance.findAllByType(ProgressBar)).toHaveLength(1);
        };
    });

    it('should render activeStep within available range', () => {
        const theme = { colors: { primary: '#007bc1' } };

        let renderer0: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer0 = TestRenderer.create(<MobileStepper steps={5} activeStep={2} theme={theme} />);
        });
        const stepper0 = renderer0!.root;
        const dots0 = stepper0.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots0[2].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });

        let renderer1: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer1 = TestRenderer.create(<MobileStepper steps={5} activeStep={10} theme={theme} />);
        });
        const stepper1 = renderer1!.root;
        const dots1 = stepper1.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots1[4].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });

        let renderer2: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer2 = TestRenderer.create(<MobileStepper steps={5} activeStep={0} theme={theme} />);
        });
        const stepper2 = renderer2!.root;
        const dots2 = stepper2.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots2[0].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });

        let renderer3: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer3 = TestRenderer.create(<MobileStepper steps={5} activeStep={-1} theme={theme} />);
        });
        const stepper3 = renderer3!.root;
        const dots3 = stepper3.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');
        expect(dots3[0].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });
    });

    it('should render steps with the correct color', () => {
        let renderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            renderer = TestRenderer.create(
                <MobileStepper steps={5} activeStep={0} activeColor={'#FF0000'} inactiveColor={'#DEADBEEF'} />
            );
        });
        const stepper = renderer!.root;
        const dots = stepper.findAllByType(View as any).filter((x) => x.props.testID === 'blui-dot');

        // test active item color
        expect(dots[0].props.style[2]).toMatchObject({
            backgroundColor: '#FF0000',
        });

        // test inactive item color
        expect(dots[1].props.style[0]).toMatchObject({
            backgroundColor: '#DEADBEEF',
        });
    });
});
