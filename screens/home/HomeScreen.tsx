import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { CarouselSlider } from '../../components/CarouselSlider';
import { icons } from '@constants/icons';
import { CardHorizental } from '@components/CardHorizental';

export const HomeScreen = () => {
    return (
        <>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20}}>
                <Text>Elwa3y News</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={icons.SEARCH} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.NOTIFICATION} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <CarouselSlider />
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 600}}>Recommendation</Text>
                <FlatList
                    data={[0,1]}
                    renderItem={CardHorizental}
                />
            </View>
        </>
    );
}