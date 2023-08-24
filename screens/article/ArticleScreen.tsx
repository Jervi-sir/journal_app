import Colors from "@constants/Colors";
import { Image, View, Text, TouchableOpacity, Dimensions, Share, RefreshControl, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { FlatList } from 'react-native';
import axios from 'axios'; // <-- Import Axios
import RenderHTML from 'react-native-render-html';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from "@constants/Api";
import { CardHorizental } from "@components/CardHorizental";

const { width } = Dimensions.get('window');

export const ArticleScreen = ({ route }) => {
   const { slug } = route.params;

   const navigation = useNavigation();
   const [hideHeader, setHideHeader] = useState(false);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const [share, setShare] = useState('');
   const [articles, setArticles] = useState([]);
   const [article, setArticle] = useState('');
   const [comments, setComments] = useState([]);
   const [relatedPosts, setRelatedPosts] = useState([]);

   const [articleText, setArticleText] = useState(`
   مرحباً بكم في مدينتنا الجميلة! نأمل أن تستمتعوا بزيارتكم وأن تشعروا بالراحة هنا. لا تترددوا في طرح الأسئلة إذا احتجتم أي مساعدة.
   `);

   const onRefresh = () => {
      setIsRefreshing(true);
      navigation.goBack();
   }

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(Api.base + Api.article + slug);
            const data = response.data;
            console.log(data);
            setArticles(data.articles);
            setArticle(data.articles[0]);
            setComments(data.comments);
            setRelatedPosts(data.relatedPosts);
         } catch (error) {
            console.error('Error fetching articles:', error);
         }
      };

      fetchData();
   }, []);


   return (
      <View style={{ minHeight: '100%', backgroundColor: Colors.white }}>
         <ArticleAction article_id={article.id} likes={article.likes} nb_comments={article.nb_comments} />
         <FlatList
            data={articles}
            progressViewOffset={10}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <View>
                  <ArticleDetails item={item} navigation={navigation} />
                  <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                     <View style={{backgroundColor: Colors.green, height: 2, width: '100%'}}></View>
                  </View>
               </View>
            )}
            ListFooterComponent={() => (
               <View style={{ marginHorizontal: 20 }}>
                  <Text style={{fontSize: 18, fontWeight: '700'}}>Read More</Text>
                  <ArticleRelated items={relatedPosts} navigation={navigation} />
                  <View style={{ width: '100%', backgroundColor: Colors.white }}>
                     <Text style={{ textAlign: 'center' }}>Elwa3y</Text>
                     <View style={{ height: 123, }}>
                     </View>
                  </View>
               </View>
            )}
            refreshControl={
               <RefreshControl
                  refreshing={false}
                  colors={['transparent', 'transparent']}
                  progressBackgroundColor="transparent"
                  tintColor="transparent"
                  titleColor="transparent"
                  onRefresh={onRefresh}
               />
            }

         />
      </View>
   );
}

const ArticleDetails = ({ item, navigation }) => {
   const onShare = async () => {
      try {
         const result = await Share.share({
            message: 'React Native | A framework for building native apps using React',
         });
         if (result.action === Share.sharedAction) {
            if (result.activityType) {
               // shared with activity type of result.activityType
            } else {
               // shared
            }
         } else if (result.action === Share.dismissedAction) {
            // dismissed
         }
      } catch (error) {
         Alert.alert(error.message);
      }
   };

   return (
      <>
         <View style={{ width, height: width, position: 'relative' }}>
            <View style={{ position: 'absolute', top: 15, left: 0, zIndex: 99, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
               <TouchableOpacity
                  style={{ backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5, transform: [{ rotate: '-90deg' }] }}
                  onPress={() => {
                     navigation.goBack();
                  }}
               >
                  <Image source={require('@assets/icons/backArrow.png')} style={{ width: 30, height: 30, tintColor: Colors.white }} />
               </TouchableOpacity>
               <TouchableOpacity
                  style={{ backgroundColor: Colors.darkOverlayColor, borderRadius: 100, padding: 5 }}
                  onPress={onShare}
               >
                  <Icon name='share' size={30} color={Colors.white} />
               </TouchableOpacity>
            </View>
            <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: '100%' }} />
         </View>
         <View style={{ backgroundColor: Colors.white, flex: 1, marginTop: -25, padding: 20 }}>
            <View>
               <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '600' }}>{item.title}</Text>
               <Text style={{ color: Colors.black, fontSize: 15, fontWeight: '400' }}>{item.category}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
               <View>
                  <Text style={{ color: Colors.darkGrey }}>{item.duration} read</Text>
               </View>
               <View>
                  <Text style={{ color: Colors.darkGrey }}>{item.uploaded_since}</Text>
               </View>
            </View>
            <View style={{ flex: 1 }}>
               <Text>
                  <RenderHTML contentWidth={100} source={{ html: item.content }} />
               </Text>
            </View>
         </View>
      </>
   );
}

const ArticleAction = ({ article_id = 0, likes = 0, nb_comments = 0 }) => {
   const [isReading, setIsReading] = useState(false);

   return (
      <View style={{
         position: 'absolute', bottom: 50, width: '100%', zIndex: 99,
         justifyContent: 'center', alignItems: 'center',
      }}>
         <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            paddingHorizontal: 20, paddingVertical: 10, width: '80%',
            backgroundColor: Colors.white,
            borderRadius: 100
         }}
         >
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="heart" size={25} color={Colors.black} />
               <Text >{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="comment" size={25} color={Colors.black} />
               <Text >{nb_comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ flexDirection: 'row', alignItems: 'center' }}
               onPress={() => setIsReading(!isReading)}
            >
               <Icon name="headphones" size={25} color={isReading ? Colors.green : Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Icon name="bookmark-outline" size={25} color={Colors.black} />
            </TouchableOpacity>
         </View>
      </View>
   )
}

const ArticleRelated = ({ items, navigation }) => {
   return (
      <View >
         {items.map((item, index) => {
            return (
               <View style={{marginVertical: 10}}>
                  <CardHorizental key={index} item={item}  />
               </View>
            )
         })}
      </View>

   )
}

