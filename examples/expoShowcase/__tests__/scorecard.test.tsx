import React from 'react';
import { render } from '@testing-library/react-native';
import { ScoreCardExample } from '../components/ScoreCardExample';

describe('ScoreCardExample', () => {
    it('renders ScoreCard with correct header information', () => {
        const { getByText } = render(<ScoreCardExample />);
        expect(getByText('Substation 42')).toBeTruthy();
        expect(getByText('Normal')).toBeTruthy();
        expect(getByText('42 Devices')).toBeTruthy();
    });

    it('renders the Hero badge with correct label and value', () => {
        const { getByText } = render(<ScoreCardExample />);
        expect(getByText('Score')).toBeTruthy();
        expect(getByText('/100')).toBeTruthy();
        expect(getByText('98')).toBeTruthy();
    });

    it('renders the action row with "View More"', () => {
        const { getByText } = render(<ScoreCardExample />);
        expect(getByText('View More')).toBeTruthy();
    });
});
