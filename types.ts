import type { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';


type RootStackParamList = {
    ScreenHome: undefined;
    ScreenEditInput: { noteId: string | undefined}
};
export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenEditRouteProp = RouteProp<RootStackParamList,'ScreenEditInput'>