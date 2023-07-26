import React, { useContext } from 'react'
import { Text, View, Image } from 'react-native'
import { styleInfoMatch } from './style'
import { FootContext } from '../../contexts/footbal';
import { format, isValid  } from 'date-fns';
import { FormBet } from '../../components/FormBet';
import { ScrollView } from 'react-native-gesture-handler';


export const InfoMatchPage = () => {

    const { matchFinded, teamHomeFinded, teamAwayFinded } = useContext(FootContext)

    const date = matchFinded?.utcDate;

    const newDate = new Date(date ?? '')

    const dateFormatted = isValid(newDate) ? format(newDate, 'dd-MM-yyyy') : 'Data inválida';

  return (
    <ScrollView contentContainerStyle={styleInfoMatch.scrollViewContent}> 
        <View style={styleInfoMatch.divCont}>
            <View>
                <Text style={styleInfoMatch.infosText} >Informações da Partida</Text>
                <Text style={styleInfoMatch.infosText} >Data: {dateFormatted}</Text>
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
            {matchFinded?.status !== 'FINISHED' ? (
                <FormBet />
            ):(
                null
            )}
        </View>
    </ScrollView>
  )
}
