import {View,Text,Button,StyleSheet} from 'react-native'
import { NoteTakingInput} from '../components/NoteTakingInput'
import { saveNote } from '../services/noteStoreServices'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { ScreenEditRouteProp,ScreenNavigationProp } from '../types'
import { DeleteNoteButton } from '../components/DeleteNoteButton'
export const ScreenEditInput:React.FC = ()=>{
    const route = useRoute<ScreenEditRouteProp>();
    const noteId = route.params.noteId;
    const navigation = useNavigation<ScreenNavigationProp>();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: noteId ? 'Edit note' : 'Create note',
            headerRight : ()=>(noteId ? 
                <DeleteNoteButton noteId={noteId}></DeleteNoteButton>
             : <></>
            )
        })
    },[navigation])
    return(
        <View>
            <NoteTakingInput noteId={noteId } />
        </View>
    )
}