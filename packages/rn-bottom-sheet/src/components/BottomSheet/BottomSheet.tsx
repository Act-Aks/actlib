import React, { forwardRef, useCallback, useEffect, useImperativeHandle } from 'react'
import { useWindowDimensions } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'

import { BottomSheetProps, BottomSheetRefProps, MAX_TRANSLATE_Y, PixelContext } from './BottomSheet.static'
import { styles } from './BottomSheet.style'

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(({ children, snapPoint, style }, ref) => {
    const { height: ScreenHeight } = useWindowDimensions()

    const translateY = useSharedValue<number>(0)
    const active = useSharedValue<boolean>(false)
    const context = useSharedValue<PixelContext>({ y: 0 })

    const scrollTo = useCallback((destination: number) => {
        'worklet'
        active.value = destination !== 0
        translateY.value = withSpring(destination, { damping: 50 })
    }, [])
    const isActive = useCallback(() => {
        return active.value
    }, [])

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        })
        .onUpdate(event => {
            translateY.value = event.translationY + context.value.y
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
            console.log({ f: translateY.value, sss: -ScreenHeight / 3, va: translateY.value > -ScreenHeight / 3 })
        })
        .onEnd(() => {
            const heightPercent = Math.abs(translateY.value / ScreenHeight)
            if (heightPercent < 0.3) {
                return scrollTo(snapPoint ? -snapPoint : 0)
            }
            if (heightPercent < 0.5) {
                return scrollTo(MAX_TRANSLATE_Y)
            }
            if (heightPercent < 0.8) {
                return scrollTo(snapPoint ? -snapPoint : 0)
            }
        })

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolation.CLAMP,
        )
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        }
    }, [])

    useEffect(() => {
        if (snapPoint) {
            scrollTo(-snapPoint)
        } else {
            scrollTo(0)
        }
    }, [snapPoint, scrollTo])

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, style, rBottomSheetStyle]}>{children}</Animated.View>
        </GestureDetector>
    )
})

export default BottomSheet
