import { Text, View, Image, useWindowDimensions, Pressable } from "react-native";
import React from "react";

import Card from "./Card";
import { styles } from "../Assets/Styles/Styles"

const ProductItem = ({ item, navigation }) => {
  
    const { height, width } = useWindowDimensions();

    const onSelect = () => { navigation.navigate('Detail', {productId: item.id, title: item.title})};

    return (
      <Pressable onPress={() => onSelect(item.id)}>
        <Card additionalStyle={styles.additionalStylesCardProductItem}>
          <Text style={width > 350 
                      ?
                      styles.textCategoryProductItem
                      :
                      styles.textCategorySmProductItem}>
            {item.title}
          </Text>
  
          <Image resizeMode="cover"
                 style={styles.imageProductItem}
                 source={{ uri: item.images[0] }} />

          <View style={styles.containerProduct}>
              <Text style={styles.textTitleProductItem}>{item.title}</Text>
              <Text style={styles.textPriceProductItem}>${item.price}</Text>
          </View> 
        </Card>
      </Pressable>
)  }
  
  export default ProductItem; 
