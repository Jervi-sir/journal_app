import { icons } from "@constants/Icons";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "@constants/Colors";

const { width } = Dimensions.get('window'); 


export const CardSingle = () => {
    return (
        <>
            <View style={{width, height: width, position: 'relative', borderTopRightRadius: 20, borderTopLeftRadius: 20, overflow: 'hidden'}}>
                <Image source={ require('@assets/previews/preview4.png')} style={{width: '100%', height: '100%'}}/>
                <LinearGradient
                    colors={['#3B3631', 'rgba(59, 54, 49, 0.00)']}
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    style={{position: 'absolute', bottom: 0, backgroundColor: Colors.darkOverlayColor, width: '100%', paddingVertical: 15, paddingHorizontal: 20, paddingBottom: 25 }}
                >
                    <Text style={{fontSize: 20, fontWeight: '800', color: Colors.white}}>Title</Text>
                </LinearGradient>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 20, alignItems: 'center'}}>
                <Text style={{ color: Colors.darkGrey }}>Feb 22, 2023</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={icons.COMMENT} style={{ width: 20, height: 20, marginRight: 5 }}/>
                    <Text >1.3k</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{marginRight: 10}}>
                        <Image source={icons.ARROWUP} style={{ width: 20, height: 20, }}/>
                    </TouchableOpacity>
                    <Text style={{marginRight: 10}}>1.3k</Text>
                    <TouchableOpacity>
                        <Image source={icons.ARROWDOWN} style={{ width: 20, height: 20, }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}