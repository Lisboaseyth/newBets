import React from 'react'
import { View } from "react-native"
import { HeaderPage } from '../../components/header'
import { ListChamp } from '../../components/ListChamps'


export const Main = () => {

  return (
    <View style={{flex: 1}}>
        <HeaderPage />
        <ListChamp />
    </View>
  )
}
