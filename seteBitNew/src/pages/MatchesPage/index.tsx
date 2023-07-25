import React from 'react'
import { Text, View } from 'react-native'
import { HeaderPage } from '../../components/header'
import { ListMatches } from '../../components/ListMatch'

export const MatchesPage = () => {
  return (
    <View style={{flex: 1}}>
        <HeaderPage />
        <ListMatches />
    </View>
  )
}
