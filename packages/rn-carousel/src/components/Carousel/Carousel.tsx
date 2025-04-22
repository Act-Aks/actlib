import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

import { CarouselContext } from './Carousel.hooks'
import { CarouselProps } from './Carousel.static'
import CarouselItem from './CarouselItem/CarouselItem'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const Carousel = <T,>({
    data,
    renderItem,
    direction = 'horizontal',
    animationType = 'slide',
    itemHeight = SCREEN_HEIGHT * 0.5,
    itemWidth = SCREEN_WIDTH * 0.8,
    spacing = 10,
    autoPlay = false,
    autoPlayInterval = 3000,
    style,
}: CarouselProps<T>) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const scrollViewRef = useRef<Animated.ScrollView>(null)
    const scrollX = useSharedValue<number>(0)
    const scrollY = useSharedValue<number>(0)

    const isHorizontal = direction === 'horizontal'
    const containerDimension = isHorizontal ? itemWidth : itemHeight

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: event => {
            if (isHorizontal) {
                scrollX.value = event.contentOffset.x
            } else {
                scrollY.value = event.contentOffset.y
            }
        },
    })

    const autoPlayTimer = useRef<NodeJS.Timeout>(null)

    const scrollToIndex = useCallback(
        (index: number, animated = true) => {
            if (scrollViewRef.current) {
                const offset = index * (containerDimension + spacing)
                if (index === 0 && currentIndex === data.length - 1) {
                    // Smooth transition from last to first slide
                    scrollViewRef.current.scrollTo({
                        [isHorizontal ? 'x' : 'y']: offset,
                        animated,
                    })
                } else {
                    scrollViewRef.current.scrollTo({
                        [isHorizontal ? 'x' : 'y']: offset,
                        animated,
                    })
                }
            }
        },
        [containerDimension, currentIndex, data.length, isHorizontal, spacing],
    )

    useEffect(() => {
        if (autoPlay) {
            autoPlayTimer.current = setInterval(() => {
                const nextIndex = (currentIndex + 1) % data.length
                scrollToIndex(nextIndex)
                setCurrentIndex(nextIndex)
            }, autoPlayInterval)
        }
        return () => {
            if (autoPlayTimer.current) {
                clearInterval(autoPlayTimer.current)
            }
        }
    }, [autoPlay, autoPlayInterval, currentIndex, data.length, scrollToIndex])

    const contextValue = useMemo(
        () => ({
            currentIndex,
            direction,
            animationType,
        }),
        [currentIndex, direction, animationType],
    )

    return (
        <CarouselContext.Provider value={contextValue}>
            <View style={[{ flex: 1 }, style]}>
                <Animated.ScrollView
                    ref={scrollViewRef}
                    horizontal={isHorizontal}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={containerDimension + spacing}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    bounces={false}
                    bouncesZoom={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                        paddingHorizontal: isHorizontal ? (SCREEN_WIDTH - itemWidth) / 2 : spacing,
                        paddingVertical: !isHorizontal ? (SCREEN_HEIGHT - itemHeight) / 2 : spacing,
                        gap: spacing,
                    }}
                    onMomentumScrollEnd={event => {
                        const offset = isHorizontal
                            ? event.nativeEvent.contentOffset.x
                            : event.nativeEvent.contentOffset.y
                        const newIndex = Math.round(offset / (containerDimension + spacing))
                        const targetOffset = newIndex * (containerDimension + spacing)

                        // If not perfectly centered, animate to the correct position
                        if (offset !== targetOffset) {
                            scrollViewRef.current?.scrollTo({
                                [isHorizontal ? 'x' : 'y']: targetOffset,
                                animated: true,
                            })
                        }

                        setCurrentIndex(newIndex)
                    }}
                >
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            index={index}
                            scrollValue={isHorizontal ? scrollX : scrollY}
                            containerDimension={containerDimension}
                            spacing={spacing}
                            isHorizontal={isHorizontal}
                            animationType={animationType}
                            itemWidth={itemWidth}
                            itemHeight={itemHeight}
                        >
                            {renderItem(item, index)}
                        </CarouselItem>
                    ))}
                </Animated.ScrollView>
            </View>
        </CarouselContext.Provider>
    )
}

export default Carousel
