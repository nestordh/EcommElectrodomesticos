import { Text, View, Image, useWindowDimensions, Pressable } from "react-native";
import React from "react";

import Card from "./Card";
import { styles } from "../Assets/Styles/Styles"

const ProductItem = ({ 
        item, 
        navigation
     }) => {
  
    const { height, width } = useWindowDimensions();

    const onSelect = (id) => {
     navigation.navigate('Detail', {productId: item.id, title: item.title})
      
    };

    return (
      <View>

      <Pressable onPress={() => onSelect(item.id)}>
        <Card additionalStyle={styles.additionalStylesCardProductItem}>
          <Text style={width > 350 
                      ?
                      styles.textCategoryProductItem
                      :
                      styles.textCategorySmProductItem}>
            {item.title}
          </Text>
  
          <Image
            resizeMode="cover"
            style={styles.imageProductItem}
            source={{ uri: item.images[0] }}
            />
        </Card>
      </Pressable>

      <View style={styles.containerProduct}>
                      <View>
                          <Text style={styles.textTitleProductItem}>{item.title}</Text>
                          <Text style={styles.textPriceProductItem}>${item.price}</Text>
                      </View>
                      <Image 
                        resizeMode='cover'
                        style = {styles.imageProductItem}
                        source={{uri: item.images[0]}}
                      />
                  </View> 
      </View>
    );
  };
  
  export default ProductItem; 
