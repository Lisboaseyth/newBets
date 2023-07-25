import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../assets/logoNewBetWhite.png';
import { styleHeader } from './style';
import { MenuItem } from '../MenuItens';

export const HeaderPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();

  const switchMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      navigation.dispatch(DrawerActions.closeDrawer());
    } else {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };

  const handleMenuItemPress = (data: string) => {
    navigation.navigate(data);
  };

  return (
    <View style={styleHeader.container}>
      {/* <TouchableOpacity style={styleHeader.menuButton} onPress={switchMenu}>
        <Icon name={isMenuOpen ? 'times' : 'bars'} size={24} color="white" />
      </TouchableOpacity> */}
      <Image source={Logo} style={styleHeader.logo} />
      {isMenuOpen && (
        <View>
          <MenuItem title="Partidas" iconName="user" onPress={() => handleMenuItemPress('Matches')} />
        </View>
      )}
    </View>
  );
};