import React from 'react'
import { useContext } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { FootContext } from "../../contexts/footbal"
import { useNavigation } from '@react-navigation/native'
import { HeaderPage } from '../../components/header'
import { ListChamp } from '../../components/ListChamps'
import { ListMatches } from '../../components/ListMatch'


export const Main = () => {

  const {number, requestChampsList, listChamps} = useContext(FootContext)

  const navigation = useNavigation()

  return (
    <View style={{flex: 1}}>
        <HeaderPage />
        <ListChamp />
    </View>
  )
}
