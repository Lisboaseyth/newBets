import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { stylesMenu } from './style';
import { MenuItemProps } from './types';


export const MenuItem: React.FC<MenuItemProps> = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={stylesMenu.menuItem} onPress={onPress}>
      <Icon name={iconName} size={20} color="black" />
      <Text style={stylesMenu.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );
};