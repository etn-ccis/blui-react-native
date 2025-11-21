import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import { Chip } from './Chip';
import { Avatar } from 'react-native-paper';

describe('Chip component', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly with default props', () => {
        const tree = TestRenderer.create(<Chip>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode', () => {
        const tree = TestRenderer.create(<Chip mode="outlined">Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode', () => {
        const tree = TestRenderer.create(<Chip mode="elevated">Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when selected', () => {
        const tree = TestRenderer.create(<Chip selected>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when disabled', () => {
        const tree = TestRenderer.create(<Chip disabled>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with an icon', () => {
        const tree = TestRenderer.create(
            <Chip icon={{ family: 'material-community', name: 'chart-pie' }}>Text</Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with an avatar', () => {
        const avatar = <Avatar.Text label="AB" />;
        const tree = TestRenderer.create(<Chip avatar={avatar}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders only the icon when both an icon and an avatar are provided', () => {
        const avatar = <Avatar.Text label="AB" />;
        const tree = TestRenderer.create(
            <Chip icon={{ family: 'material-community', name: 'chart-pie' }} avatar={avatar}>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with avatar', () => {
        const { getByTestId } = render(
            <Chip avatar={<Avatar.Text label="AB" testID="avatar" />} testID="chip">
                CHIP
            </Chip>
        );

        const avatarElement = getByTestId('avatar');
        expect(avatarElement).toBeTruthy();
    });

    it('renders correctly in outlined mode when selected and disabled', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" selected disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode when selected and not disabled', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" selected disabled={false}>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode when not selected', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" selected={false}>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode when disabled', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode when selected', () => {
        const tree = TestRenderer.create(
            <Chip mode="elevated" selected>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode when disabled', () => {
        const tree = TestRenderer.create(
            <Chip mode="elevated" disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode when selected and disabled', () => {
        const tree = TestRenderer.create(
            <Chip mode="elevated" selected disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom chipColor', () => {
        const tree = TestRenderer.create(<Chip chipColor="#FF5733">Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom borderColor', () => {
        const tree = TestRenderer.create(<Chip borderColor="#00FF00">Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom textColor', () => {
        const tree = TestRenderer.create(<Chip textColor="#0000FF">Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom iconColor', () => {
        const tree = TestRenderer.create(
            <Chip icon={{ family: 'material', name: 'home' }} iconColor="#FF00FF">
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders icon with textColor when iconColor is not provided', () => {
        const tree = TestRenderer.create(
            <Chip icon={{ family: 'material', name: 'home' }} textColor="#FF0000">
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders icon with DefaultTextColor when neither iconColor nor textColor is provided', () => {
        const tree = TestRenderer.create(<Chip icon={{ family: 'material', name: 'home' }}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with avatar having size prop', () => {
        const avatar = <Avatar.Text label="AB" size={32} />;
        const tree = TestRenderer.create(<Chip avatar={avatar}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with avatar having size larger than 24', () => {
        const avatar = <Avatar.Text label="AB" size={28} />;
        const tree = TestRenderer.create(<Chip avatar={avatar}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with avatar having size equal to or less than 24', () => {
        const avatar = <Avatar.Text label="AB" size={24} />;
        const tree = TestRenderer.create(<Chip avatar={avatar}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with borderColor and disabled in outlined mode', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" borderColor="#123456" disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with borderColor and not disabled in outlined mode', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" borderColor="#654321" disabled={false}>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode when selected and disabled with border', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" selected disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode when not disabled with elevated prop', () => {
        const tree = TestRenderer.create(
            <Chip mode="elevated" disabled={false}>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in elevated mode when disabled without elevated prop', () => {
        const tree = TestRenderer.create(
            <Chip mode="elevated" disabled>
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom styles', () => {
        const customStyles = {
            root: { margin: 10 },
        };
        const tree = TestRenderer.create(<Chip styles={customStyles}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without icon and without avatar', () => {
        const tree = TestRenderer.create(<Chip>Text Only</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with all color props together', () => {
        const tree = TestRenderer.create(
            <Chip chipColor="#111111" borderColor="#222222" textColor="#333333" iconColor="#444444">
                Text
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with onClose callback and shows close icon', () => {
        const onCloseMock = jest.fn();
        const tree = TestRenderer.create(<Chip onClose={onCloseMock}>Text</Chip>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in outlined mode when selected and not disabled without border', () => {
        const tree = TestRenderer.create(
            <Chip mode="outlined" selected disabled={false}>
                Text with Selection
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders icon with close icon when onClose is provided', () => {
        const onCloseMock = jest.fn();
        const tree = TestRenderer.create(
            <Chip icon={{ family: 'material', name: 'star' }} onClose={onCloseMock}>
                Closable
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders avatar with close icon when onClose is provided', () => {
        const onCloseMock = jest.fn();
        const avatar = <Avatar.Text label="CD" size={28} />;
        const tree = TestRenderer.create(
            <Chip avatar={avatar} onClose={onCloseMock}>
                Closable Avatar
            </Chip>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
