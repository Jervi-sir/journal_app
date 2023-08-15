import { View, Text, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { CarouselSlider } from '@components/CarouselSlider';
import { icons } from '@constants/Icons';
import { CardHorizental } from '@components/CardHorizental';
import { StatusBarSpacer } from '@components/StatusBarSpacer';
import { HeaderMenu } from '@components/HeaderMenu';

import { useState, useEffect } from 'react'
import Colors from '@constants/Colors';

export const HomeScreen = () => {
   const [refreshing, setRefreshing] = useState(false);

   const loadData = async () => {
      try {
         setRefreshing(true);
         const newData = await fetchData();
         //setData(newData);
      } catch (error) {
         console.error('Failed to fetch data:', error);
      } finally {
         setRefreshing(false);
      }
   };

   useEffect(() => {
      loadData();
   }, []);

   const fetchData = async () => {
      // Replace this with your data fetching logic
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve([
               { id: '1', name: 'Item 1' },
               { id: '2', name: 'Item 2' },
            ]);
         }, 2000);
      });
   };

   return (
      <>
         <HeaderMenu />
         <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <FlatList
               data={[0, 1, 2, 3]}
               showsVerticalScrollIndicator={false}
               renderItem={({ item }) => (
                  <View style={{ marginVertical: 10 }}>
                     <CardHorizental />
                  </View>
               )}
               ListHeaderComponent={() => (
                  <>
                     <View style={{ paddingTop: 20 }}>
                        <CarouselSlider />
                     </View>
                     <Text style={{ fontSize: 25, fontWeight: '700' }}>Recommendation</Text>
                  </>
               )}
               ListFooterComponent={() => (
                  <View style={{ height: 100 }}>
                  </View>
               )}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={loadData}
                     colors={[Colors.greenMenu, Colors.greenMenu]}
                     progressBackgroundColor="transparent"
                     tintColor={Colors.greenMenu}
                     title="get News..."
                     titleColor={Colors.greenMenu}
                  />
               }
            />
         </View>
      </>
   );
}