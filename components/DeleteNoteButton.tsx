import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { deleteNote } from "../services/noteStoreServices";
import { useNavigation } from "@react-navigation/native";
import {ScreenNavigationProp} from '../types';
type Props = {
    noteId:string
}
export const DeleteNoteButton:React.FC<Props> = ({noteId}) => {
    const navigation = useNavigation<ScreenNavigationProp>();
    async function deleteNoteHandler(noteId:string){
        await deleteNote(noteId);
        navigation.navigate("ScreenHome");
    }
    return (
        <Pressable onPress={()=>{deleteNoteHandler(noteId)}}>
            <FontAwesome name="trash-o" size={30} color="#ffb703"></FontAwesome>
        </Pressable>
    );
}