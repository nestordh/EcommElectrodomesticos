import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";
import { styles } from "../Assets/Styles/Styles";

const ItemDetail = ({ navigation, route }) => {
   
    const { productId: idSelected } = route.params
    
    const dispatch = useDispatch()
    
    const [product, setProduct] = useState(null);
    
    const [orientation, setOrientation] = useState("portrait")
   
    const {width, height} = useWindowDimensions()

    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

    useEffect(() => {
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
        );
        setProduct(productSelected);
    }, [idSelected]);

    const onAddCart = () => {
        dispatch(addCartItem({
            ...product,
            quantity: 1
            //agraegar un counter esta el 1 hardcodeado
        }))
    }

   return (
        <View style={styles.containerItemDetail}>
            {product ? (
                <View style={ orientation === "portrait"
                            ? styles.mainContainerItemDetail
                            : styles.mainContainerLandscapeItemDetail
                    } >

                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.imageItemDetailItemDetail}
                        resizeMode="cover" />

                    <View style={styles.textContainer}>
                        <Text style = {styles.textItemDetail}>Modelo: {product.title}</Text>
                        <Text style = {styles.textItemDetail}>Descripcion del Producto: {product.description}</Text>
                        <Text style = {styles.textItemDetail}>Costo por unidad :${product.price}</Text>
                        <Text style = {styles.textItemDetail}>Cantidad: 01{product.quantity}</Text>
                        <Text style = {styles.textItemDetail}>Precio Total: ${product.price}</Text>
                        <Button title="Agregar al carrito"
                                onPress={{onAddCart}}
                        ></Button>
                    </View>
                
                </View>

            ) : null}
            
        </View>
        
    );
};

export default ItemDetail;

// const styles = StyleSheet.create({
//     containerItemDetail: {
//         height:580,
//         borderRadius: 8,
//         padding: 20,
//         paddingLeft: 10,
//         margin: 15,
//         borderWidth: 2,
//         borderColor: "gray",
//         alignItems:"center",
//     },
//     mainContainerItemDetail: {
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         padding: 10,
//     },
//     mainContainerLandscapeItemDetail: {
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       padding: 10,
//   },
//     imageItemDetail: {
//         width: 300,
//         height: 250,
//     },
//     textContainerItemDetail: {
//       flexDirection: 'column'
//     },
//     textItemDetail:{
//         fontSize: 20,
//     },
// });
