import {View,Text,TextInput,Button} from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import { getNote,saveNote } from '../services/noteStoreServices';


type Props = {
    noteId : string | undefined
}

export const NoteTakingInput:React.FC<Props> = ({noteId}) => {
    const navigation = useNavigation<ScreenNavigationProp>();
    const [textInput,setTextInput] = useState<string>("")
    useEffect(
        ()=>{
            if(noteId){
                getNote(noteId).then(result=>setTextInput(result?.text ?? ""));
            }
        },[]
    )
    async function saveNoteHandler(){
        await saveNote(textInput,noteId);
    }
    return (
        <>
            <TextInput
                multiline={true}
                value={textInput}
                style={{
                    backgroundColor:"#ffe9b3",
                    width:"100%",
                    height:"94%"
                }}
                autoFocus={true}
                onChangeText={(text)=>setTextInput(text)}
            ></TextInput>
            <Button 
                title='Save note'
                onPress={ ()=>{
                    saveNoteHandler()
                    navigation.navigate('ScreenHome'); 
                }}
            />
        </>

    )
}
