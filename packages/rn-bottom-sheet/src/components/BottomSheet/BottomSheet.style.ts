import { StyleSheet } from 'react-native'

import { ScreenHeight } from './BottomSheet.static'

export const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: ScreenHeight,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: ScreenHeight,
        borderRadius: 25,
    },
})
