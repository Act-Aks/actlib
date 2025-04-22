# React Native Carousel Component

A performant, customizable carousel component for React Native with multiple animation types and TypeScript support.

## Installation

```bash
npm install @actlib/rn-carousel
# or
yarn add @actlib/rn-carousel
```

## Basic Usage

```tsx
import Carousel from '@actlib/rn-carousel'

const App = () => (
    <Carousel
        data={[1, 2, 3]}
        renderItem={item => (
            <View style={{ backgroundColor: 'tomato', height: 200 }}>
                <Text>{item}</Text>
            </View>
        )}
        autoPlay
        animationType='slide'
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

1. **Slide** (default): Classic horizontal/vertical slide
2. **Fade**: Cross-fade between items with scaling
3. **Stack**: Cascading card stack effect
4. **Page**: 3D flip animation

## Configuration Guidelines

- Use `itemWidth`/`itemHeight` to control visible item size
- Set `spacing` for consistent gaps between items
- Combine `autoPlay` with `autoPlayInterval` for timed transitions

## License

[MIT](https://github.com/act-aks/actlib/blob/main/LICENSE)
