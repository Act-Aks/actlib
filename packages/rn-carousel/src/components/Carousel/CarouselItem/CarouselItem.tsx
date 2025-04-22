import React from 'react'
import Animated, { Easing, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

import { CarouselItemProps } from './CarouselItem.static'

const CarouselItem: React.FC<CarouselItemProps> = ({
    index,
    scrollValue,
    containerDimension,
    spacing,
    isHorizontal,
    animationType,
    children,
    itemWidth,
    itemHeight,
}) => {
    const animatedStyle = useAnimatedStyle(() => {
        const progress = scrollValue.value / (containerDimension + spacing)
        const scale = withSpring(index === Math.round(progress) ? 1 : 0.85, {
            damping: 15,
            stiffness: 80,
            mass: 0.6,
        })
        const opacity = withTiming(index === Math.round(progress) ? 1 : 0.2, {
            duration: 400,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
        })

        switch (animationType) {
            case 'fade':
                return {
                    opacity,
                    transform: [{ scale }],
                }
            case 'stack':
                return {
                    transform: [
                        { scale },
                        isHorizontal
                            ? { translateX: withSpring((index - Math.round(progress)) * 20) }
                            : { translateY: withSpring((index - Math.round(progress)) * 20) },
                    ],
                }
            case 'page':
                return {
                    transform: [
                        { perspective: 1000 },
                        isHorizontal
                            ? {
                                  rotateY: withSpring(`${(index - progress) * 180}deg`, {
                                      damping: 20,
                                      stiffness: 90,
                                  }),
                              }
                            : {
                                  rotateX: withSpring(`${(progress - index) * 180}deg`, {
                                      damping: 20,
                                      stiffness: 90,
                                  }),
                              },
                    ],
                    backfaceVisibility: 'hidden',
                    opacity: withSpring(Math.abs(index - progress) < 0.5 ? 1 : 0, {
                        damping: 15,
                        stiffness: 80,
                    }),
                }
            case 'slide':
            default:
                return {
                    transform: [{ scale }],
                }
        }
    })

    return (
        <Animated.View
            style={[
                {
                    width: isHorizontal ? itemWidth : '100%',
                    height: isHorizontal ? '100%' : itemHeight,
                },
                animatedStyle,
            ]}
        >
            {children}
        </Animated.View>
    )
}

export default CarouselItem
