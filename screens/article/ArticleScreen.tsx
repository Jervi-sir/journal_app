import { StatusBarSpacer } from "@components/StatusBarSpacer";
import Colors from "@constants/Colors";
import { icons } from "@constants/Icons";
import { Image, View, Text, TouchableOpacity, Dimensions  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window'); 

export const ArticleScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBarSpacer />
            <View style={{width, height: width, position: 'relative'}}>
                <TouchableOpacity 
                    style={{position: 'absolute', top: 15, left: 10, zIndex: 99, backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5}}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image source={require('@assets/icons/backArrow.png')} style={{width: 30, height: 30}} />
                </TouchableOpacity>
                <Image source={require('@assets/previews/preview4.png')} style={{width: '100%', height: '100%'}}/>
                <LinearGradient
                    colors={['#3B3631', 'rgba(59, 54, 49, 0.00)']}
                    start={{x: 0, y: 1.1}}
                    end={{x: 0, y: 0}}
                    style={{position: 'absolute',height: 91, bottom: 10, paddingTop: 15, backgroundColor: Colors.darkOverlayColor, width: '100%', paddingVertical: 15, paddingHorizontal: 20, paddingBottom: 25 }}
                >
                    <Text style={{ color: Colors.white, fontSize: 22, fontWeight: '600' }}>Title of the article</Text>
                    <Text style={{ color: Colors.white, fontSize: 15, fontWeight: '400' }}>Today</Text>
                </LinearGradient>
            </View>
            <View style={{ backgroundColor: Colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -25, padding: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{ color: Colors.darkGrey }}>Feb 22, 2023</Text>
                    </View>
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
                <View style={{marginTop: 20}}>
                    <Text>
                        content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
                    </Text>
                </View>
            </View>
        </>
    );
}