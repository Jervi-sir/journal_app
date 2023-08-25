import { CardHorizentalOffline } from "@components/CardHorizentalOffline";
import { HeaderMenu } from "@components/HeaderMenu";
import Colors from "@constants/Colors";
import { countBookmarkedArticles, deleteAllBookmarkedArticles, fetchBookmarkedArticles } from "@functions/SQLiteUtility";
import { useEffect, useState } from "react";
import { Text, View, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

export const BookmarkScreen = () => {
   const [data, setData] = useState([]);
   const [refreshing, setRefreshing] = useState(false);
   const [offset, setOffset] = useState(0);
   const [articleCount, setArticleCount] = useState(0);
   const [isDeleted, setIsDeleted] = useState(0);
   const limit = 7;  // Number of articles to fetch each time

   const [visible, setVisible] = useState(false);
   const hideMenu = () => setVisible(false);
   const showMenu = () => setVisible(true);

   const fetchData = async (offset, limit) => {
      fetchBookmarkedArticles(offset, limit, (articles) => {
         setData(prevData => [...prevData, ...articles]);
         setOffset(prevOffset => prevOffset + articles.length);
      });
   };

   const loadData = async () => {
      setData([]);
      try {
         setRefreshing(true);
         await fetchData(0, limit);
      } catch (error) {
         console.error('Failed to fetch data:', error);
      } finally {
         setRefreshing(false);
      }
   };

   const updateArticleCount = () => {
      countBookmarkedArticles((count) => {
        setArticleCount(count);
      });
    };

   const showConfirmation = () => {
      Alert.alert(
         "Confirm",
         "Are you sure you want to perform this action?",
         [
            { 
               text: "Delete", onPress: () => {
                  deleteAllBookmarkedArticles(() => {
                     setData([]); // Clear the current UI
                     setArticleCount(0); // Reset the article count
                   });
               },
            },
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
            },
            
         ]
      );
   }
      

   useEffect(() => {
      loadData();
      updateArticleCount();
   }, [isDeleted]);

   return (
      <View>
         <View style={{ paddingHorizontal: 20 }}>
            <FlatList
               data={data}
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={() => (
                  <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                     <Text style={{ fontSize: 25, fontWeight: '700' }}>
                        Saved Posts ({articleCount})
                     </Text>
                     <TouchableOpacity
                        onPress={showConfirmation}
                        style={{width: 69, height: 30, alignItems: 'flex-end'}}
                     >
                        <MaterialCommunityIcons name='delete-sweep-outline' size={25} />
                     </TouchableOpacity>
                  </View>
               )}
               renderItem={({ item }) => (
                  <View style={{ marginVertical: 10 }}>
                     <CardHorizentalOffline item={item} />
                  </View>
               )}
               ListFooterComponent={() => (
                  <View style={{ height: 150 }}></View>
               )}
               onEndReached={() => {
                  fetchData(offset, limit);
                  console.log('end reached')
               }}
               onEndReachedThreshold={0.5}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={() => {
                        setTimeout(() => {
                           loadData();
                           updateArticleCount();
                        }, 600);
                     }}
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