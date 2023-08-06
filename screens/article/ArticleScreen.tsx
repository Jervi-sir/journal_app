import { icons } from "@constants/icons";
import { Image, View, Text, TouchableOpacity,  } from "react-native";

export const ArticleScreen = () => {
    return (
        <>
            <View>
                <Image source={require('@assets/previews/preview4.png')} />
                <View>
                    <Text>
                        Title of the article
                    </Text>
                    <Text>
                        date
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text>Feb 22, 2023</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={icons.COMMENT} />
                        </TouchableOpacity>
                        <Text>1.3k</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={icons.ARROWUP} />
                        </TouchableOpacity>
                        <Text>1.3k</Text>
                        <TouchableOpacity>
                            <Image source={icons.ARROWDOWN} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolore vitae! Aspernatur, doloremque ad voluptas at id iste quas facere commodi reprehenderit, odio labore molestiae. Officia quisquam fugit eum provident.
                </View>
            </View>
        </>
    );
}