# React Native Carousel Component

A performant, customizable carousel component for React Native with multiple animation types and TypeScript support.

## Installation

```bash
npm install @act-aks/rn-carousel
# or
yarn add @act-aks/rn-carousel
```

## Basic Usage

```tsx
import { Carousel } from '@act-aks/rn-carousel'

const App = () => (
    <Carousel
        data={[1, 2, 3]}
        renderItem={item => (
            <View style={{ backgroundColor: 'tomato', height: 200 }}>
                <Text>{item}</Text>
            </View>
        )}
        autoPlay
        animationType={'slide'}
        itemWidth={300}
        spacing={20}
    />
)
```

## API Reference

| Prop             | Type     | Default       | Description                                        |
| ---------------- | -------- | ------------- | -------------------------------------------------- |
| data             | T[]      | **Required**  | Array of items to render                           |
| renderItem       | function | **Required**  | Render function for individual items               |
| direction        | string   | 'horizontal'  | Scroll direction ('horizontal' or 'vertical')      |
| animationType    | string   | 'slide'       | Animation style ('slide', 'fade', 'stack', 'page') |
| itemWidth        | number   | 80% of screen | Width of each carousel item                        |
| itemHeight       | number   | 50% of screen | Height of each carousel item                       |
| spacing          | number   | 10            | Space between items                                |
| autoPlay         | boolean  | false         | Enable automatic cycling through items             |
| autoPlayInterval | number   | 3000          | Interval between auto-play transitions (ms)        |

## Animation Types

<div style="display: flex; overflow-x: auto; justify-content: center; gap: 20px;">
  <img src="./src/assets/slide.gif" alt="Slide Animation" width="300" />
  <img src="./src/assets/fade.gif" alt="Fade Animation" width="300" />
  <img src="./src/assets/page.gif" alt="Page Animation" width="300" />
</div>

## Configuration Guidelines

- Use `itemWidth`/`itemHeight` to control visible item size
- Set `spacing` for consistent gaps between items
- Combine `autoPlay` with `autoPlayInterval` for timed transitions

## License

[MIT](https://github.com/act-aks/act-aks/blob/main/LICENSE)
