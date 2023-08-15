import { useState } from "react";
import { Text, TextInput, View } from "react-native";


export const WriteScreen = () => {
   const [email, setEmail] = useState('');
   const [title, setTitle] = useState('');
   return (
      <>
         <View>
            <Text>Email (optional)</Text>
            <TextInput
               editable
               multiline
               numberOfLines={4}
               maxLength={40}
               onChangeText={text => setEmail(text)}
               value={email}
               style={{ padding: 10 }}
            />
         </View>
         <View>
            <Text>title</Text>
            <TextInput
               editable
               multiline
               numberOfLines={4}
               maxLength={40}
               onChangeText={text => setTitle(text)}
               value={title}
               style={{ padding: 10 }}
            />
         </View>
      </>
   );
}