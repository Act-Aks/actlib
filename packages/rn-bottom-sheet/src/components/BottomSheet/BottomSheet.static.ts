import { PropsWithChildren } from 'react'
import { Dimensions, ViewStyle } from 'react-native'

export type BottomSheetProps = PropsWithChildren<{
    snapPoint?: number
    style?: ViewStyle
}>
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void
    isActive: () => boolean
}

export const { height: ScreenHeight } = Dimensions.get('window')
const TOP_OFFSET = 50
export const MAX_TRANSLATE_Y = -ScreenHeight + TOP_OFFSET
