import { icons } from "@constants/Icons";
import { View, Image, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export const CardSingle = () => {
    return (
        <>
            <View>
                <Image source={ require('@assets/previews/preview2.png') } />
                <LinearGradient
                    // Array of colors for gradient
                    colors={['#3B3631', 'rgba(59, 54, 49, 0.00)']}
                    // Start and end points for gradient
                    start={{x: 0.5, y: 1}}
                    end={{x: 0.5, y: 0}}
                    style={{flex: 1, marginHorizontal: 20}}
                >
                    <Text style={{fontSize: 20, fontWeight: '800', color: 'grey'}}>Title</Text>
                </LinearGradient>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: 'grey'}}>date</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ icons.COMMENT } />
                    <Text>1,3k</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={ icons.ARROWUP } />
                    <Text>3,3k</Text>
                    <Image source={ icons.ARROWUP } />
                </View>
            </View>
        </>
    );
}