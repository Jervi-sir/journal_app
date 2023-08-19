import { CardHorizental } from "@components/CardHorizental";
import { HeaderMenu } from "@components/HeaderMenu";
import Colors from "@constants/Colors";
import { useEffect, useState } from "react";
import { Text, View, FlatList, RefreshControl } from "react-native";



export const BookmarkScreen = () => {

   const [data, setData] = useState([]);
   const [refreshing, setRefreshing] = useState(false);

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


   return (
      <View>
         <HeaderMenu />

         <View style={{ paddingHorizontal: 20 }}>
            <FlatList
               data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={() => (
                  <>
                     <Text style={{ fontSize: 25, fontWeight: '700' }}>Saved Posts</Text>
                  </>
               )}
               renderItem={({ item }) => (
                  <>
                     <View style={{ marginVertical: 10 }}>
                        <CardHorizental />
                     </View>
                  </>
               )}
               ListFooterComponent={() => (
                  <View style={{ height: 150 }}></View>
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
      </View>
   );
}