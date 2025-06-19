import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Mocks for dependencies
jest.mock('react-native-vector-icons/MaterialIcons', (): any => 'Icon');
jest.mock('@brightlayer-ui/react-native-themes', (): any => ({
    useExtendedTheme: (): any => ({
        colors: {
            onSurfaceVariant: '#000',
            primary: '#1976d2',
            surfaceVariant: '#fff',
            outline: '#ccc',
        },
    }),
    useFontWeight: (): any => ({}), // mock as a function
}));
jest.mock('react-native-paper', () => {
    const actual = jest.requireActual('react-native-paper');
    return {
        ...actual,
        HelperText: (props: any): any => <actual.Text testID="mock-helper-text" {...props} />,
        Text: (props: any): any => <text {...props} />,
    };
});

import { AutoComplete } from './AutoComplete'; // Replace with your actual path

describe('AutoComplete', () => {
    afterEach(() => jest.clearAllMocks());

    it('renders the AutoComplete component', () => {
        render(<AutoComplete helperText="Helper Text" />);
    });

    it('renders with initial props', () => {
        const { getByTestId, getByText } = render(
            <AutoComplete
                value={['Chip 1', 'Chip 2']}
                options={['Option 1', 'Option 2']}
                helperText="This is a helper text"
                limitTags={3}
            />
        );

        const input = getByTestId('tagInput');
        expect(input.props.value).toBe('');

        const chip1 = getByText('Chip 1');
        expect(chip1).toBeTruthy();

        const chip2 = getByText('Chip 2');
        expect(chip2).toBeTruthy();

        const helperText = getByText('This is a helper text');
        expect(helperText).toBeTruthy();
    });
    // @todo
    // it('toggles dropdown menu on input click and selecting an option', async () => {
    //     const { getByTestId } = render(<AutoComplete helperText="Helper Text" options={['Option 1', 'Option 2']} />);

    //     // eslint-disable-next-line
    //     const input = await getByTestId('tagInput');
    //     fireEvent.press(input);

    //     const dropdown = getByTestId('dropDownMenuTags');
    //     expect(dropdown).toBeTruthy();
    // });

    // it('filters options on input change and selecting tag from dropdown', async () => {
    //     const mockOnChange = jest.fn();
    //     const { getByTestId, getByText, queryByText } = render(
    //         <AutoComplete onChange={mockOnChange} helperText="Helper Text" options={['Option 1', 'Option 2']} />
    //     );

    //     // eslint-disable-next-line
    //     const input = await getByTestId('tagInput');
    //     fireEvent.press(input);
    //     fireEvent.changeText(input, 'xyz');

    //     // eslint-disable-next-line
    //     const optionItem = await queryByText('Option 1'); // Use queryByText for potential match

    //     expect(optionItem).toBeNull();
    //     fireEvent.changeText(input, '');
    //     // eslint-disable-next-line
    //     const option = await getByText('Option 1');
    //     fireEvent.press(option);
    //     fireEvent.changeText(input, 'xyz');

    //     // eslint-disable-next-line
    //     const optionItem1 = await queryByText('Option 1'); // Use queryByText for potential match

    //     expect(optionItem1).toBeTruthy();
    //     expect(mockOnChange).toHaveBeenCalledWith(['Option 1']);
    // });

    it('handles character limit on tag input', () => {
        const { getByTestId } = render(
            <AutoComplete helperText="Helper Text" options={['Option 1', 'Option 2']} tagCharacterLimit={5} />
        );

        const input = getByTestId('tagInput');
        fireEvent.changeText(input, 'This');
        fireEvent.changeText(input, '');
        fireEvent.changeText(input, 'Hello');
        fireEvent.changeText(input, 'This is a very long tag');

        expect(input.props.value.length).toBe(5);
    });
});
