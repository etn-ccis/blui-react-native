import React from 'react';
import { MobileStepper } from '.';
import TestRenderer, { act } from 'react-test-renderer';
import { View } from 'react-native';

// Mock ProgressBar from react-native-paper
jest.mock('react-native-paper', () => {
    const { View } = jest.requireActual('react-native');
    const actual = jest.requireActual('react-native-paper');
    return {
        ...actual,
        ProgressBar: (props: any): any => <View testID="mock-progress-bar" {...props} />,
    };
});

describe('MobileStepper', () => {
    it('should render typical number of steps', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={5} activeStep={2} />);
        });
        const dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots).toHaveLength(5);
        testRenderer!.unmount();
    });

    it('should render at least 1 step', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={0} activeStep={3} />);
        });
        let dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots).toHaveLength(1);
        testRenderer!.unmount();

        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={-1} activeStep={3} />);
        });
        dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots).toHaveLength(1);
        testRenderer!.unmount();

        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={-10} activeStep={3} />);
        });
        dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots).toHaveLength(1);
        testRenderer!.unmount();
    });

    it('should render progress indicator', () => {
        const theme = { colors: { primary: '#007bc1' } };
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(
                <MobileStepper steps={5} activeStep={0} variant={'progress'} theme={theme} />
            );
        });
        expect(
            testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'mock-progress-bar')
        ).toHaveLength(1);
        testRenderer!.unmount();
    });

    it('should render activeStep within available range', () => {
        const theme = { colors: { primary: '#007bc1' } };
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;

        // typical use
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={5} activeStep={2} theme={theme} />);
        });
        const dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots[2].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });
        testRenderer!.unmount();

        // edge case beyond available steps
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={5} activeStep={10} theme={theme} />);
        });
        const dots2 = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots2[4].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });
        testRenderer!.unmount();

        // edge case zero
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={5} activeStep={0} theme={theme} />);
        });
        const dots3 = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots3[0].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });
        testRenderer!.unmount();

        // edge case negative
        act(() => {
            testRenderer = TestRenderer.create(<MobileStepper steps={5} activeStep={-1} theme={theme} />);
        });
        const dots4 = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');
        expect(dots4[0].props.style[2]).toMatchObject({
            backgroundColor: '#007bc1',
        });
        testRenderer!.unmount();
    });

    it('should render steps with the correct color', () => {
        let testRenderer: TestRenderer.ReactTestRenderer | undefined;
        act(() => {
            testRenderer = TestRenderer.create(
                <MobileStepper steps={5} activeStep={0} activeColor={'#FF0000'} inactiveColor={'#DEADBEEF'} />
            );
        });
        const dots = testRenderer!.root.findAllByType(View).filter((x) => x.props.testID === 'blui-dot');

        // test active item color
        expect(dots[0].props.style[2]).toMatchObject({
            backgroundColor: '#FF0000',
        });

        // test inactive item color
        expect(dots[1].props.style[0]).toMatchObject({
            backgroundColor: '#DEADBEEF',
        });
        testRenderer!.unmount();
    });
});
