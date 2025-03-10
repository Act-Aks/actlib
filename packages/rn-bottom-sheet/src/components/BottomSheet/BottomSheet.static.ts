import { PropsWithChildren } from 'react'
import { Dimensions } from 'react-native'

export type BottomSheetProps = PropsWithChildren<{ snapPoint?: number }>
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void
    isActive: () => boolean
}

export const { height: ScreenHeight } = Dimensions.get('window')
export const MAX_TRANSLATE_Y = -ScreenHeight + 50
