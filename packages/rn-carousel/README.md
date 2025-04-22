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

<div style="display: flex; overflow-x: auto; gap: 20px; padding: 20px 0;">
    <div style="flex: 0 0 auto; width: 300px; text-align: center;">
        <h4>Slide Animation</h4>
        <img src="./src/assets/slide.gif" style="width: 100%; border-radius: 8px;" alt="Slide Animation"/>
    </div>
    <div style="flex: 0 0 auto; width: 300px; text-align: center;">
        <h4>Fade Animation</h4>
        <img src="./src/assets/fade.gif" style="width: 100%; border-radius: 8px;" alt="Fade Animation"/>
    </div>
    <div style="flex: 0 0 auto; width: 300px; text-align: center;">
        <h4>Page Animation</h4>
        <img src="./src/assets/page.gif" style="width: 100%; border-radius: 8px;" alt="Page Animation"/>
    </div>
</div>

## Configuration Guidelines

- Use `itemWidth`/`itemHeight` to control visible item size
- Set `spacing` for consistent gaps between items
- Combine `autoPlay` with `autoPlayInterval` for timed transitions

## License

[MIT](https://github.com/act-aks/actlib/blob/main/LICENSE)
