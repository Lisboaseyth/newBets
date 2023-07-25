import React, { useContext } from 'react';
import { FootContext } from '../../contexts/footbal';
import { CardChamp } from '../CardChamps';
import { View, ScrollView, Text } from 'react-native';
import { styleList } from './style';

export const ListChamp = () => {
  const { listChamps } = useContext(FootContext);

  return (
    <ScrollView style={styleList.container}>
        <Text style={styleList.title}>
            Campeonatos Ativos
        </Text>
      {listChamps.map((item, index) => {
        const { name, emblem, code } = item;
        return <CardChamp key={index} name={name} emblem={emblem} tag={code} />;
      })}
    </ScrollView>
  );
};