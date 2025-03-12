# React Native Bottom Sheet

A highly customizable and performant bottom sheet component for React Native applications.

## Glimpse [Please bare with the ugly demo 😂]

<img src="./src/assets/demo.gif" width="200" alt="Bottom Sheet Demo"/>

## Features

- 🚀 Smooth animations and gestures
- 🎨 Fully customizable styling
- 📱 Native performance
- 🔧 Easy to integrate
- 💪 Written in TypeScript
- 📦 Lightweight
- 📜 Scrollable content support
- 🎯 Imperative API with refs

## Installation

1. Install the package:

```bash
npm install @act-aks/rn-bottom-sheet
```

or

```
yarn add @act-aks/rn-bottom-sheet
```

## Basic Usage

```
import { BottomSheet, BottomSheetRefProps } from '@act-aks/rn-bottom-sheet';

const App: React.FC = () => {
    const ref = useRef<BottomSheetRefProps>(null);

    const onPress = () => {
        const isActive = ref.current?.isActive();
        if (isActive) {
            // Perform action when active
        } else {
            // Else case
        }
    }

    return (
        <BottomSheet ref={ref} snapPoint={200}>
            {/* Content to be in bottom sheet */}
        </BottomSheet>
    )
}

```

## API Reference

### BottomSheet Props

| Prop      | Type      | Required | Default | Description                            |
| --------- | --------- | -------- | ------- | -------------------------------------- |
| snapPoint | number    | No       | -       | Height of the bottom sheet when opened |
| style     | ViewStyle | No       | -       | Style the container                    |
| children  | ReactNode | No       | -       | Content of the bottom sheet            |

### BottomSheetRefProps Methods

| Method   | Type                       | Description                               |
| -------- | -------------------------- | ----------------------------------------- |
| scrollTo | (position: number) => void | Programmatically scroll to position       |
| isActive | () => boolean              | Check if bottom sheet is currently active |
