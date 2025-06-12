# Upgrading from v8 to v9

## ESM Format

Version 9 introduces support for ECMAScript Module (ESM) format. Ensure your project is configured to support ESM when upgrading. This may require updating your build tools or runtime environment to handle ESM modules.

## Breaking Changes

- Renamed `AutoComplete` props to follow the naming conventions:

| Old Prop Name             | New Prop Name       |
|---------------------------|---------------------|
| `allowCustomtag`          | `allowCustomTag`    |
| `limitCharacterCountTag`  | `tagCharacterLimit` |
| `chipProps`               | `ChipProps`         |

