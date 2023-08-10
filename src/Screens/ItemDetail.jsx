import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
// import allProducts from "../Data/products.json";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";


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
        <View style={styles.container}>
            {product ? (
                <View style={ orientation === "portrait"
                            ? styles.mainContainer
                            : styles.mainContainerLandscape
                    } >

                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="cover" />

                    <View style={styles.textContainer}>
                        <Text style = {styles.text}>Modelo: {product.title}</Text>
                        <Text style = {styles.text}>Descripcion del Producto: {product.description}</Text>
                        <Text style = {styles.text}>Costo por unidad :${product.price}</Text>
                        <Text style = {styles.text}>Cantidad: 01{product.quantity}</Text>
                        <Text style = {styles.text}>Precio Total: ${product.price}</Text>
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

const styles = StyleSheet.create({
    container: {
        height:580,
        borderRadius: 8,
        padding: 20,
        paddingLeft: 10,
        margin: 15,
        borderWidth: 2,
        borderColor: "gray",
        alignItems:"center",
    },
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
  },
    image: {
        width: 300,
        height: 250,
    },
    textContainer: {
      flexDirection: 'column'
    },
    text:{
        fontSize: 20,
    },
});
