import { Text, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface iButtonEditableProps extends TouchableOpacityProps {
    title: string;
    style: ViewStyle;
  }