import { Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import { styles } from "../Assets/Styles/Styles";


const OrderItem = ({ order, updatedAt, item, }) => {
    
    const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0 )
    
    return (
        <View style={styles.containerCardOrderItem}
              onPress={() => {} } >
        
            <View>
                <Text style={styles.textOrderItem}> {new Date(order.createdAt).toLocaleString()} </Text>
                <Text style = { styles.text2OrderItem } > Cant: 01 </Text>
                <Text style = { styles.text2OrderItem } > $ { total } </Text>
                <Text style = { styles.text2OrderItem } > Total ${parseFloat(total).toFixed(2)} </Text>
                <Text >{updatedAt}</Text>

                <FlatList
                    data={order}
                    keyExtractor={(cartItem) => cartItem.id}
                    renderItem={({ item }) => {
                        return <View >
                                    <Text> Nombre:  </Text>
                                    <View >
                                        <Image source={{ uri: item.images[0] }}
                                                style={styles.imageOrderItem}
                                                resizeMode="cover"  /> 
                                        <Text> precio </Text>
                                    </View>
                                </View>;
                            }}
                            showsVerticalScrollIndicator={false} />

            </View>
            
            <Feather name="search" size={30} color="black" />
                
        </View>
    );
};

export default OrderItem;
