# Changelog

## v7.0.1 (May 9, 2024)

### Fixed

-   Text variants not working correctly on Android [89](https://github.com/etn-ccis/blui-react-native-themes/issues/89).

## v7.0.0 (January 12, 2024)

### Changed

-   Updated themes to use Material Design 3 styled palettes and React Native Paper v5 theme structure.

## v6.0.0 (November 9, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

## v6.0.0 (October 1, 2021)

### Added

-   Many new theme color properties to give greater control over the styles of various components. Note that the global ReactNativePaper namespace will need to be updated in your application to use these properties.

### Removed

-   The `blueDarkAlt` theme has been consolidated into the `blueDark` theme and a selection of wrapper components in the `@pxblue/react-native-components` library. This eliminates the need for using two theme providers and writing your own wrappers for these components.
-   `theme.colors.textSecondary` — use `theme.colors.textPalette.secondary` instead.

## v5.2.0 (October 1, 2021)

### Added

-   blueDarkAlt theme deprecation notice.

## v5.1.0 (March 30, 2021)

### Added

-   Initial Dark themes (regular and alternate)

## v5.0.1 (November 19, 2020)

### Changed

-   Updated peerDependencies to allow for use with react-native-paper version 4.

## v5.0.0 (June 30, 2020)

### Changed

-   Updated theme to comply with the [react-native-paper](https://callstack.github.io/react-native-paper/theming.html) specification.

** Breaking Changes **

-   Font weights available in the theme have changed. We now have `thin`, `light`, `regular`, and `medium` (previously `semiBold`). `Bold` and `ExtraBold` have been removed.
-   `onPrimary` color is no longer available.
-   `sizes` property of the theme has been removed. If you need these size values, they are now exported from @brightlayer-ui/react-native-components.

## v4.0.0 (February 24, 2020)

### Changed

-   Themes have been broken out into their own packages. This package was originally part of @brightlayer-ui/themes. If you are switching to this package, you'll need to update some import statements (refer to the usage instructions in the README).
