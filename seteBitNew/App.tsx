
import React from 'react';

import { Main } from './src/pages/main';
import { MatchesPage } from './src/pages/MatchesPage';

import { FootProvider } from './src/contexts/footbal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfoMatchPage } from './src/pages/InfoMatch';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <FootProvider>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Matches" component={MatchesPage} />
            <Stack.Screen name="InfoMatch" component={InfoMatchPage} />
          </Stack.Navigator>
        </FootProvider>
      </NavigationContainer>
  );
}
