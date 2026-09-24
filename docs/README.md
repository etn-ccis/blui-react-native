# BLUI React Native Documentation

This repository serves as the comprehensive documentation hub for the Brightlayer UI component library, your suite of reusable React Native components. Here, you'll find detailed information on using each component effectively to build user-friendly and interactive React Native applications.

## Versioned Releases

The current documentation is deployed at the root of each hosting repository. Frozen release snapshots are deployed to version folders and remain available from the version menu.

| Environment | Current docs         | Version snapshot        |
| ----------- | -------------------- | ----------------------- |
| Dev         | `/react-native-dev/` | `/react-native-dev/vN/` |
| Production  | `/react-native/`     | `/react-native/vN/`     |

`N` is the numeric `docsVersion` in `package.json`.

Before publishing a snapshot, update `docsVersion` and the entries in `src/__configuration__/versionHistory.ts`. Keep entries newest-to-oldest, use `url: ''` for the current root release, and use the deployed folder (for example, `url: '/v1'`) for previous releases. Add a historical entry only after its snapshot has deployed successfully.

To publish, run **Deploy React Native Docs Release Snapshot** from GitHub Actions for `dev`, verify the snapshot and a deep link, then run the normal dev deployment. Repeat the snapshot deployment for `prod` and verify it alongside the current docs deployed from `master`.

The workflow retains the three highest `vN` folders in each hosting repository. Remove the corresponding oldest entry from `versionHistory.ts` whenever a snapshot is pruned. Historical snapshots are frozen, so later menu changes do not alter an already-deployed snapshot.

## Exploring the Documentation

The documentation is organized into individual pages for each Brightlayer UI component. You can navigate to specific components using the file structure.

Component Documentation Structure
Each component page provides the following key information:

Component Overview: A concise description of the component's purpose and key features.

### API Reference

A comprehensive list of properties, events, and methods supported by the component. Each API entry includes details on:

- Data Type: The expected format of the data passed to the property or returned by the method.

- Description: A clear explanation of what the property/event/method does.

- Required: Indicates whether the property is mandatory for the component to function correctly (Yes or No).

- Default: Specifies the default value assigned to the property if no value is provided (if applicable).

### Usage Examples

Code snippets that showcase how to integrate and use the component in your React Native projects. These examples demonstrate various use cases and configurations to enhance your understanding of practical implementation.
