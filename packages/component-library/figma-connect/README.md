# Figma Code Connect — React Native Components

This project uses [Figma Code Connect](https://github.com/figma/code-connect) to link React Native components to their corresponding Figma designs.

## Setup

### Environment Variables

A `.env` file is required at the repository root (`blui-react-native/.env`). This file is **not committed to the repository**.

| Variable                       | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `FIGMA_ACCESS_TOKEN`           | Personal access token generated from your Figma account            |
| `HTTPS_PROXY`                  | Corporate proxy URL for HTTPS requests (if applicable)             |
| `HTTP_PROXY`                   | Corporate proxy URL for HTTP requests (if applicable)              |
| `NODE_TLS_REJECT_UNAUTHORIZED` | Set to `0` to bypass corporate SSL certificate verification issues |

### Generating a Figma Access Token

1. Go to [figma.com](https://www.figma.com)
2. Click your avatar (top-left) → **Settings**
3. Navigate to **Security** → **Personal access tokens**
4. Click **Generate new token**
5. Copy the token and add it to your `.env` file

## Publishing

From the repository root (`blui-react-native/`):

```sh
yarn figma:publish
```

## Architecture

This repo publishes Code Connect with label **"React Native"**. The same Figma components may also have a **"React"** label published from `blui-progress-icons` or `blui-react`. Figma Dev Mode will show both implementations as selectable tabs.

### Scope

Only components that are **exclusive to React Native** (not in the React component library) are connected here:

- AutoComplete
- Chip
- CollapsibleHeaderLayout
- Grade
- Header
- Icon
- IconSwitch
- MobileStepper
- Overline

Components shared with React (ChannelValue, Drawer, EmptyState, Hero, etc.) are managed by the React repo's Code Connect.

## Project Structure

```
packages/component-library/figma-connect/
├── figma-urls.ts                       # Central registry of Figma component URLs
├── AutoComplete.figma.tsx
├── Chip.figma.tsx
├── CollapsibleHeaderLayout.figma.tsx
├── Grade.figma.tsx
├── Header.figma.tsx
├── Icon.figma.tsx
├── IconSwitch.figma.tsx
├── MobileStepper.figma.tsx
├── Overline.figma.tsx
└── README.md
```

## Adding a New Component

1. Confirm the component is **not** in the React library (shared components are handled there)
2. Get the Figma component URL (right-click the component in Figma → **Copy link**)
3. Add the URL to `figma-urls.ts`
4. Create a new `<ComponentName>.figma.tsx` file
5. Run `yarn figma:publish`
