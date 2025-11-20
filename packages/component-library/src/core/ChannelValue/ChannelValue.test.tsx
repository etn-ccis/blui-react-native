import React from 'react';
import { ChannelValue } from '.';
import { cleanup } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { I18nManager } from 'react-native';

describe('ChannelValue', () => {
    afterEach(cleanup);
    it('ChannelValue Renders', () => {
        const tree = TestRenderer.create(<ChannelValue value="2" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders the background color and font color correctly', () => {
        const tree = TestRenderer.create(
            <ChannelValue
                value="50"
                units="%"
                icon={{ family: 'material-community', name: 'chart-pie' }}
                iconColor="red"
            />
        ).toJSON;
        expect(tree).toMatchSnapshot();
    });

    it('Accepts style override', () => {
        const tree = TestRenderer.create(<ChannelValue value="2" style={{ backgroundColor: 'red' }} />).toJSON;
        expect(tree).toMatchSnapshot();
    });

    it('renders with unitSpace set to show', () => {
        const tree = TestRenderer.create(<ChannelValue value="100" units="kW" unitSpace="show" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with unitSpace set to hide', () => {
        const tree = TestRenderer.create(<ChannelValue value="100" units="kW" unitSpace="hide" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with prefix units (currency symbol)', () => {
        const tree = TestRenderer.create(<ChannelValue value="100" units="$" prefix={true} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with prefix units and unitSpace show', () => {
        const tree = TestRenderer.create(
            <ChannelValue value="100" units="USD" prefix={true} unitSpace="show" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (percentage)', () => {
        const tree = TestRenderer.create(<ChannelValue value="75" units="%" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (Fahrenheit)', () => {
        const tree = TestRenderer.create(<ChannelValue value="72" units="℉" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (°F)', () => {
        const tree = TestRenderer.create(<ChannelValue value="72" units="°F" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (Celsius)', () => {
        const tree = TestRenderer.create(<ChannelValue value="22" units="℃" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (°C)', () => {
        const tree = TestRenderer.create(<ChannelValue value="22" units="°C" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with suffix units from whitelist (degree)', () => {
        const tree = TestRenderer.create(<ChannelValue value="90" units="°" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom color', () => {
        const tree = TestRenderer.create(<ChannelValue value="50" units="%" color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom fontSize', () => {
        const tree = TestRenderer.create(<ChannelValue value="50" units="%" fontSize={24} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom iconSize', () => {
        const tree = TestRenderer.create(
            <ChannelValue
                value="50"
                units="%"
                icon={{ family: 'material-community', name: 'chart-pie' }}
                iconSize={32}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom styles for value and units', () => {
        const tree = TestRenderer.create(
            <ChannelValue
                value="50"
                units="kW"
                styles={{
                    value: { fontWeight: '900' },
                    units: { fontStyle: 'italic' },
                }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with custom root style', () => {
        const tree = TestRenderer.create(
            <ChannelValue
                value="50"
                units="kW"
                styles={{
                    root: { padding: 10 },
                }}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without icon', () => {
        const tree = TestRenderer.create(<ChannelValue value="100" units="kW" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without units', () => {
        const tree = TestRenderer.create(
            <ChannelValue value="100" icon={{ family: 'material-community', name: 'flash' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with prefix in RTL mode', () => {
        const originalIsRTL = I18nManager.isRTL;
        I18nManager.isRTL = true;

        const tree = TestRenderer.create(<ChannelValue value="100" units="$" prefix={true} />).toJSON();
        expect(tree).toMatchSnapshot();

        I18nManager.isRTL = originalIsRTL;
    });

    it('renders without prefix in RTL mode', () => {
        const originalIsRTL = I18nManager.isRTL;
        I18nManager.isRTL = true;

        const tree = TestRenderer.create(<ChannelValue value="100" units="kW" prefix={false} />).toJSON();
        expect(tree).toMatchSnapshot();

        I18nManager.isRTL = originalIsRTL;
    });

    it('renders prefix units from whitelist without space', () => {
        const tree = TestRenderer.create(
            <ChannelValue value="100" units="$" prefix={true} unitSpace="auto" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with numeric value', () => {
        const tree = TestRenderer.create(<ChannelValue value={42} units="A" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with icon and no iconColor (uses default color)', () => {
        const tree = TestRenderer.create(
            <ChannelValue value="100" units="V" icon={{ family: 'material-community', name: 'lightning-bolt' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
