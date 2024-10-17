import React from "react";
import { Pressable } from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {ScreenNavigationProp} from '../types';

import {
    useNavigation
  } from '@react-navigation/native';
export const NewNoteButton: React.FC = () =>{
    const navigation = useNavigation<ScreenNavigationProp>();
    return (
        <Pressable onPress={()=>navigation.navigate("ScreenEditInput",{noteId:undefined})}>
            <FontAwesome name="pencil-square-o" size={30} color="ffb703"> </FontAwesome>
        </Pressable>
    )
}