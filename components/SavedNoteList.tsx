import {View,Text,ScrollView,StyleSheet,Pressable} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllNotes } from '../services/noteStoreServices';
import { useState } from 'react';
import { Note } from '../services/noteStoreServices';
import { ScreenNavigationProp } from '../types';
export const SavedNoteList:React.FC = ()=>{
    const [noteText,setNoteText] = useState<Note[]>([]);
    const navigation = useNavigation<ScreenNavigationProp>()
    useFocusEffect (()=>{
        getAllNotes().then((result)=>{
        //   console.log("result",result);
          setNoteText(result.notes);
        });
      })
    return (
        <View style={styles.container}>
            <ScrollView>
                    {
                    noteText.map(note=>{
                        return (
                            <Pressable key={note.id} onPress={()=>{navigation.navigate("ScreenEditInput",{noteId:note.id})}}>
                                <View style={styles.row}>
                                    <Text style={styles.noteText}>{note.text}</Text>
                                </View>

                            </Pressable>
                        )
                    })
                    }
                
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        // width:"100%"
        height:"100%"
    },
    row:{
        borderBottomColor:"gray",
        borderBottomWidth:0.4,
        flex:1,
        height:60,
        width:"90%",
        justifyContent:"center",
        alignSelf:"center"
    },
    noteText:{
        paddingVertical:5,
        width:"100%",
        fontSize:16,
    }
})