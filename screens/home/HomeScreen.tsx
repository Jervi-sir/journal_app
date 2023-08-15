import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { CarouselSlider } from '@components/CarouselSlider';
import { icons } from '@constants/Icons';
import { CardHorizental } from '@components/CardHorizental';
import { StatusBarSpacer } from '@components/StatusBarSpacer';
import { HeaderMenu } from '@components/HeaderMenu';



export const HomeScreen = () => {
    return (
        <>
            <StatusBarSpacer />
            <HeaderMenu />
            <View style={{flex: 1,paddingHorizontal: 20}}>
                <FlatList
                    data={[0,1,2,3]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={{marginVertical: 10}}>
                            <CardHorizental />
                        </View>
                    )}
                    ListHeaderComponent={() => (
                        <>
                            <View style={{ paddingTop: 20 }}>
                                <CarouselSlider />
                            </View>
                            <Text style={{ fontSize: 25, fontWeight: '700'}}>Recommendation</Text>
                        </>
                    )}
                    ListFooterComponent={() => (
                        <View style={{height: 100}}>
                        </View>
                    )}
                />
            </View>
        </>
    );
}