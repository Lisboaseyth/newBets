
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { iCustomButtonProps } from './type';
import { styleButtom } from './style';

export const CustomButton: React.FC<iCustomButtonProps> = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styleButtom.button} onPress={onPress}>
        <Text style={styleButtom.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };