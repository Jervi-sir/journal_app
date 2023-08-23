import Colors from '@constants/Colors';
import { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@constants/Routes';

export const SLIDER_WIDTH = Dimensions.get('window').width + 100
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
   {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
   },
   {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
   },
   {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
   },
];

export const CarouselSlider = () => {
   const isCarousel = useRef(null)
   const [index, setIndex] = useState(0)
   const navigation = useNavigation();

   return (
      <View style={{ alignItems: 'center', position: 'relative', paddingBottom: 10 }}>
         <Carousel
            layout="tinder"
            layoutCardOffset={1}
            ref={isCarousel}
            data={data}
            renderItem={({item, index}) => <CarouselCardItem index={index} navigation={navigation} item={item} />}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={5}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
            loop
            autoplay={true}

         />
         <View style={{ position: 'absolute', bottom: -5 }}>
            <Pagination
               dotsLength={data.length}
               dot
               activeDotIndex={index}
               carouselRef={isCarousel}
               dotStyle={{
                  width: 20,
                  height: 10,
                  borderRadius: 8,
                  marginHorizontal: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
               }}
               inactiveDotOpacity={0.4}
               inactiveDotScale={0.6}
               tappableDots={true}
               inactiveDotStyle={{
                  width: 10,
               }}

            />
         </View>
      </View>
   )
}

const CarouselCardItem = ({ item, index, navigation }) => {
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         onPress={() => {
            navigation.navigate(Routes.Article);
         }}
      >
         <View style={[styles.container, { position: 'relative', borderRadius: 10, overflow: 'hidden' }]} key={index}>
            <Image
               source={{ uri: item.imgUrl }}
               style={styles.image}
            />
            <LinearGradient
               colors={['#3B3631', 'rgba(59, 54, 49, 0.00)']}
               start={{ x: 0, y: 0.8 }}
               end={{ x: 0, y: 0 }}
               style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  paddingHorizontal: 20,
                  paddingTop: 15,
                  paddingBottom: 20
               }}
            >
               <Text style={[styles.header, { color: Colors.white }]}>{item.title}</Text>
               <Text style={[styles.body, { color: Colors.white }]}>today</Text>
            </LinearGradient>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
   },
   image: {
      width: ITEM_WIDTH,
      height: 300,
   },
   header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
   },
   body: {
      color: "#222",
      fontSize: 18,
   }
})
