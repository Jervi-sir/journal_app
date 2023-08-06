import { View, Text, Image } from 'react-native';

export const CardHorizental = () => {
    return (
        <View style={{flexDirection: 'row', }}>
            <Image source={ require('@assets/previews/preview2.png') } />
            <View>
                <Text style={{fontSize: 10, color: '#9c9c9c'}}>Category</Text>
                <Text style={{fontSize: 17, fontWeight: 800}}>title</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:12, fontWeight: 300}}>Date</Text>
                    <Text style={{fontSize:12, fontWeight: 300}}>nb vue</Text>
                </View>
            </View>
        </View>
    );
}