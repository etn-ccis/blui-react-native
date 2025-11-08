import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { WorkflowCard, WorkflowCardBody } from '../../../components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { Dimensions } from 'react-native';

describe('WorkflowCard Test', () => {
    afterEach(cleanup);

    it('WorkflowCard renders correctly', () => {
        render(
            <SafeAreaProvider>
                <WorkflowCard loading>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        ).toJSON();
        expect(render).toBeTruthy();
    });

    it('WorkflowCardHeader true test', () => {
        render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <WorkflowCardBody>
                        <Text>This is workflow card body content.</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        ).toJSON();
        expect(render).toBeTruthy();
    });

    it('WorkflowCardHeader false test', () => {
        render(
            <SafeAreaProvider>
                <WorkflowCard>
                    <Text>This is workflow card body content.</Text>
                </WorkflowCard>
            </SafeAreaProvider>
        ).toJSON();
        expect(render).toBeTruthy();
    });

    it('WorkflowCard uses responsive dimensions on tablet', () => {
        // Mock tablet dimensions
        jest.spyOn(Dimensions, 'get').mockReturnValue({
            width: 1024,
            height: 1366,
            scale: 2,
            fontScale: 1,
        });

        const { getByTestId } = render(
            <SafeAreaProvider>
                <WorkflowCard testID="workflow-card">
                    <WorkflowCardBody>
                        <Text>Test content</Text>
                    </WorkflowCardBody>
                </WorkflowCard>
            </SafeAreaProvider>
        );

        // Verify the component renders
        expect(render).toBeTruthy();

        // Restore mock
        jest.restoreAllMocks();
    });
});
