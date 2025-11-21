import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { WorkflowCard, WorkflowCardBody, WorkflowCardHeader } from '../../../components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { Dimensions, ImageSourcePropType } from 'react-native';

// Mock Dimensions to control tablet/mobile mode
const mockDimensions = (width: number, height: number): void => {
    jest.spyOn(Dimensions, 'get').mockReturnValue({ width, height, scale: 1, fontScale: 1 });
};

describe('WorkflowCard Test', () => {
    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    });

    it('WorkflowCard renders correctly with loading', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard loading>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders correctly without loading', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard loading={false}>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders correctly with WorkflowCardHeader', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardHeader title="Test Title" />
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders correctly without WorkflowCardHeader', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <Text>This is workflow card body content.</Text>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders correctly on tablet', () => {
        mockDimensions(1024, 768); // Tablet dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders correctly on mobile', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders with custom backgroundImage', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const customImage: ImageSourcePropType = { uri: 'https://example.com/image.png' };
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard backgroundImage={customImage}>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders without custom backgroundImage (uses default)', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders with style as array', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard style={[{ opacity: 0.9 }, { marginTop: 10 }]}>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders with style as object', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard style={{ opacity: 0.9 }}>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders on tablet without WorkflowCardHeader', () => {
        mockDimensions(1024, 768); // Tablet dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard renders on tablet with WorkflowCardHeader', () => {
        mockDimensions(1024, 768); // Tablet dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardHeader title="Test Title" />
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });

    it('WorkflowCard passes additional ImageBackgroundProps', () => {
        mockDimensions(375, 812); // Mobile dimensions
        const { toJSON } = render(
            <SafeAreaProvider>
                <WorkflowCard imageStyle={{ opacity: 0.5 }} testID="workflow-card-bg">
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );
        expect(toJSON()).toBeTruthy();
    });
});
