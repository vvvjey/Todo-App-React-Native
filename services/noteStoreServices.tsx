import AsyncStorage from '@react-native-async-storage/async-storage'

export type Note = {
    id:string,
    text:string
}
export type NoteStore = {
    notes: Array<Note>
}
const STORE_KEY = 'TAKE_NOTES_STORE';
export async function getAllNotes(){
    const result = await AsyncStorage.getItem(STORE_KEY);
    if(result){
        return JSON.parse(result) as NoteStore;
    }
    return {notes:[]}
}
export async function getNote(id:string){
    let result = await getAllNotes();
    let note = result.notes.find(note=>{
        return note.id == id;
    })
    return note;
  }
export async function saveNote(text:string,noteId:string | undefined){
    let noteStore = await getAllNotes();
    if(noteId){
        // edit
        let editNoteIndex = noteStore.notes.findIndex((note)=>note.id==noteId);
        noteStore.notes.splice(editNoteIndex,1,{text:text,id:noteId});
    } else {
        noteStore.notes = [...noteStore.notes,{id:Date.now().toString(),text}];
        // console.log("proces",saveNotes);
    }
    await AsyncStorage.setItem(STORE_KEY,JSON.stringify({notes:noteStore.notes}))
  }
export async function deleteNote(noteId:string){
    let noteStore = await getAllNotes();
    let deleteNoteIndex = noteStore.notes.findIndex((note)=>note.id==noteId);
    noteStore.notes.splice(deleteNoteIndex,1);
    await AsyncStorage.setItem(STORE_KEY,JSON.stringify({notes:noteStore.notes}))
}