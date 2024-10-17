import {View,Text,Button,StyleSheet} from 'react-native'
import {
    useNavigation
  } from '@react-navigation/native';
import {ScreenNavigationProp} from '../types';
import {SavedNoteList} from '../components/SavedNoteList';
export const HomeScreen:React.FC = () =>{
    const navigation = useNavigation<ScreenNavigationProp>();
    
   
    return(
      <>
        <SavedNoteList />
      </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });