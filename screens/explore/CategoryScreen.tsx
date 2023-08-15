import { CardSingle } from "@components/CardSingle";
import Colors from "@constants/Colors";
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, RefreshControl, Platform } from 'react-native';


export const CategoryScreen = ({route}) => {
  const { category } = route.params;
  
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    // Replace this with your data fetching logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'Item 1' },
          { id: '2', name: 'Item 2' },
          // ...
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
    <View style={{ flexDirection: 'column' }}>
      <FlatList
          data={[0,1,2,3]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
              <View style={{marginVertical: 10}}>
                  <CardSingle />
              </View>
          )}
          ListFooterComponent={() => (
              <View style={{height: 150}}></View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={loadData}
              colors={[Colors.greenMenu, Colors.greenMenu]}
              progressBackgroundColor="transparent"
              tintColor= {Colors.greenMenu}
              title="get News..."
              titleColor= {Colors.greenMenu}
            />
          }
    
      />
    </View>
  )
}
