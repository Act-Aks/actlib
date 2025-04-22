import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export type AnimationType = 'fade' | 'slide' | 'stack' | 'page'
export type ScrollDirection = 'horizontal' | 'vertical'

export type CarouselProps<T> = {
    data: T[]
    renderItem: (item: T, index: number) => ReactNode
    animationType?: AnimationType
    direction?: ScrollDirection
    itemHeight?: number
    itemWidth?: number
    spacing?: number
    autoPlay?: boolean
    autoPlayInterval?: number
    style?: ViewStyle
}

export type CarouselContextProps = {
    currentIndex: number
    direction: ScrollDirection
    animationType: AnimationType
}
