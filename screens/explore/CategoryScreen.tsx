import { CardSingle } from "@components/CardSingle";
import Api from "@constants/Api";
import Colors from "@constants/Colors";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, RefreshControl, Platform, ActivityIndicator } from 'react-native';


export const CategoryScreen = ({ route }) => {
   const { category } = route.params;

   const [data, setData] = useState([]);
   const [refreshing, setRefreshing] = useState(false);
   const [articles, setArticles] = useState([]);
   const [slides, setSlides] = useState([]);

   const [pagination, setPagination] = useState({
      "current_page": null,
      "last_page": null,
      "per_page": null,
      "total": null
   });
   const [loading, setLoading] = useState(true);
   const [loadingMore, setLoadingMore] = useState(false);

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

   const fetchArticles = async (page = 1) => {
      if (page === 1) setLoading(true);
      else setLoadingMore(true);

      try {
         // Replace this URL with your actual API URL
         const apiUrl = Api.base + Api.home + '?page=' + page;

         const response = await axios.get(apiUrl);
         const data = response.data;
         
         setSlides(data.slideArticles);

         if (page === 1) {
            setArticles(data.recommendedArticles);
         } else {
            setArticles([...articles, ...data.recommendedArticles]);
         }

         setPagination(data.pagination);
      } catch (error) {
         console.error('Error fetching data: ', error);
      } finally {
         setLoading(false);
         setLoadingMore(false);
      }
   };

   useEffect(() => {
      fetchArticles();
   }, []);

   const handleLoadMore = () => {
      if (!loadingMore && pagination.current_page < pagination.last_page) {
        fetchArticles(pagination.current_page + 1);
      }
   };

   return (
      <View style={{ flexDirection: 'column' }}>
         <FlatList
            data={articles}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <View style={{ marginVertical: 10 }}>
                  <CardSingle item={ item } />
               </View>
            )}
            ListFooterComponent={() => loadingMore
               ?
               (
                  <>
                     <ActivityIndicator size="small" />
                     <View style={{ height: 100 }}>
                     </View>
                  </>
               )
               :
               <View style={{ height: 111 }}>
               </View>
            }
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            refreshControl={
               <RefreshControl
                  refreshing={refreshing}
                  onRefresh={fetchArticles}
                  colors={[Colors.greenMenu, Colors.greenMenu]}
                  progressBackgroundColor="transparent"
                  tintColor={Colors.greenMenu}
                  title="get News..."
                  titleColor={Colors.greenMenu}
               />
            }

         />
      </View>
   )
}
