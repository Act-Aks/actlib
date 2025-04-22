import { ReactNode } from 'react'
import Animated from 'react-native-reanimated'

import { AnimationType } from '../Carousel.static'

export type CarouselItemProps = {
    index: number
    scrollValue: Animated.SharedValue<number>
    containerDimension: number
    spacing: number
    isHorizontal: boolean
    animationType: AnimationType
    children: ReactNode
    itemWidth: number
    itemHeight: number
}
