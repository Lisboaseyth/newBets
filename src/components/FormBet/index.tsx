import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styleForm } from './style';
import { CardInputBet } from '../CardInputBet';
import { ButtonEdit } from '../ButtonEditable';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const FormBet = () => {
  const [bets, setBets] = useState<{ betHomeTeam: string; betAwayTeam: string }[]>([]);

  const handleBetChange = (index: number, data: { betHomeTeam: string; betAwayTeam: string }) => {
    setBets((prevBets) => {
      const newBets = [...prevBets];
      newBets[index] = data;
      return newBets;
    });
  };

  const handleAddBet = () => {
    setBets((prevBets) => [...prevBets, { betHomeTeam: '', betAwayTeam: '' }]);
  };

  const handleRemoveBet = (index: number) => {
    setBets((prevBets) => {
      const newBets = [...prevBets];
      newBets.splice(index, 1);
      return newBets;
    });
  };

  const handleSubmit = () => {
    const isAnyFieldEmpty = bets.some((bet) => bet.betHomeTeam === '' || bet.betAwayTeam === '');

    if (isAnyFieldEmpty) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Por favor, preencha todos os campos do palpite!',
        visibilityTime: 4000,
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Palpite enviado!',
        visibilityTime: 3000
      })
    }
  };

  return (
    <View style={styleForm.container}>
      {bets.length === 0 ? (
        <>
            <Text style={styleForm.text}>Quer Apostar?</Text>
            <Text style={styleForm.title}>Você não tem nenhum palpite ainda!</Text>
        </>
      ) : (
        <>
            <Text style={styleForm.title}>Dados da Aposta!</Text>
            <View style={styleForm.divTeams}>
                <Text style={styleForm.text}>Home Team</Text>
                <Text style={styleForm.text}>Away Team</Text>
            </View>
            {
                bets.map((bet, index) => (
                    <View style={styleForm.divAlignColumn} key={index}>
                        <CardInputBet
                        betHomeTeam={bet.betHomeTeam}
                        betAwayTeam={bet.betAwayTeam}
                        handleBetChange={(data) => handleBetChange(index, data)}
                        />
                        <ButtonEdit style={styleForm.buttonRemove} onPress={() => handleRemoveBet(index)} title="Excluir aposta" />
                    </View>
                ))
            }
        </>
      ) }
      <View style={styleForm.divAlignFlex}>
        <ButtonEdit style={styleForm.buttonAdd} onPress={() => handleAddBet()} title="Adicionar aposta" />
        {bets.length > 0 ? (
            <ButtonEdit style={styleForm.buttonBet} onPress={() => handleSubmit()} title="APOSTAR!" />
        ) : (
            null
        )}
      </View>
    </View>
  );
};