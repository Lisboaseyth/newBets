import React, { useContext } from 'react';
import { FootContext } from '../../contexts/footbal';
import { ScrollView, Text, View } from 'react-native';
import { styleList } from '../ListChamps/style';
import { CardMatch } from '../CardMatch';
import { StyleMatchList } from './style';
import { CustomButton } from '../Buttom';


export const ListMatches = () => {
    const { listChampsFinded, decreaseNumber, increaseNumber } = useContext(FootContext);

    const { nameChamp, tagChamp } = useContext(FootContext);
  
    return (
      <ScrollView style={styleList.container}>
        <View style={StyleMatchList.container}>
          
          <Text style={styleList.title}>{nameChamp}</Text>
          {listChampsFinded.map((item, index) => {
            if (item && item.homeTeam && item.awayTeam) {
              return (
                <CardMatch
                  key={index}
                  homeTeamName={item.homeTeam.shortName}
                  homeTeamCrest={item.homeTeam.crest}
                  homeTeamTla={item.homeTeam.tla}
                  awayTeamName={item.awayTeam.shortName}
                  awayTeamCrest={item.awayTeam.crest}
                  awayTeamTla={item.awayTeam.tla}
                  idMatch={item.id}
                  ScoreAway={item.score?.fullTime?.away}
                  ScoreHome={item.score?.fullTime?.home}
                  idTeamHome={item.homeTeam.id}
                  idTeamAway={item.awayTeam.id}
                />
              );
            }
            return null;
          })}
        </View>
        <View style={StyleMatchList.buttons}>
          <CustomButton title='<' onPress={() => decreaseNumber(tagChamp)} />
          <CustomButton title='>' onPress={() => increaseNumber(tagChamp)} />
        </View>
      </ScrollView>
    );
  };