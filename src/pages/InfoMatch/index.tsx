import React, { useContext } from 'react'
import { Text, View, Image } from 'react-native'
import { styleInfoMatch } from './style'
import { FootContext } from '../../contexts/footbal';
import { CardPlayer } from '../../components/CardPlayer';

export const InfoMatchPage = (props: any) => {

    const { matchFinded, teamHomeFinded, teamAwayFinded } = useContext(FootContext)

  return (
    <View style={styleInfoMatch.divCont}>
        <View>
            <Text style={styleInfoMatch.infosText} >Informações da Partida</Text>
            <Text style={styleInfoMatch.infosText} >Data: {matchFinded?.lastUpdated}</Text>
            <Text style={styleInfoMatch.infosText} >Status: {matchFinded?.status}</Text>
        </View>
        <View style={styleInfoMatch.container}>
            <View style={styleInfoMatch.li} >
                <Image source={{ uri: matchFinded?.homeTeam.crest }} style={{ width: 50, height: 50 }} />
                <Text>{matchFinded?.homeTeam.shortName}</Text>
                <Text>{matchFinded?.homeTeam.tla}</Text>
                <Text style={styleInfoMatch.textScore}>{matchFinded?.score.fullTime.home}</Text>
            </View>
            <Text style={styleInfoMatch.textX}>X</Text>
            <View style={styleInfoMatch.li} >
                <Image source={{ uri: matchFinded?.awayTeam.crest }} style={{ width: 50, height: 50 }} />
                <Text>{matchFinded?.homeTeam.shortName}</Text>
                <Text>{matchFinded?.homeTeam.tla}</Text>
                <Text style={styleInfoMatch.textScore}>{matchFinded?.score.fullTime.away}</Text>
            </View>
        </View>
        <View style={styleInfoMatch.infoMatch}>
            <Text style={styleInfoMatch.infosText}>Home Team</Text>
            <View style={styleInfoMatch.infoTeam} >
                <Image source={{ uri: matchFinded?.homeTeam.crest }} style={{ width: 50, height: 50 }} />
                <View style={styleInfoMatch.infoText}>
                    <Text style={styleInfoMatch.nameTeam}>{matchFinded?.homeTeam.shortName}</Text>
                    <Text>{matchFinded?.homeTeam.tla}</Text>
                    <Text>Técnico: {teamHomeFinded?.coach.firstName} {teamHomeFinded?.coach.lastName}</Text>
                </View>
            </View>
            <Text style={styleInfoMatch.infosText}>Away Team</Text>
            <View style={styleInfoMatch.infoTeam} >
                <Image source={{ uri: matchFinded?.awayTeam.crest }} style={{ width: 50, height: 50 }} />
                <View style={styleInfoMatch.infoText}>
                    <Text style={styleInfoMatch.nameTeam}>{matchFinded?.awayTeam.shortName}</Text>
                    <Text>{matchFinded?.awayTeam.tla}</Text>
                    <Text>Técnico: {teamAwayFinded?.coach.firstName} {teamAwayFinded?.coach.lastName}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}
