import { StyleSheet } from 'react-native'

export const StyleMatchList = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

        gap: 15,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,

        marginTop: 20
    }
})