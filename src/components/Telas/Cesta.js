import React from "react";
import { Image, StyleSheet, Dimensions, Text, View} from "react-native";
import topo from '../../../assets/topo.png';
import farmImage from '../../../assets/logo.png';
const width = Dimensions.get('screen').width;

const Cesta = () => {
    return (
        <>
            <Image style={styles.topo} source={topo} />
            <Text style={styles.title}>Detalhes da cesta</Text>
            <View style={styles.cestaView}>
                <Text style={styles.nameCesta}>Cesta de Verduras</Text>
                <View style={styles.farmView}>
                    <Image style={styles.farmImage} source={farmImage}/>
                    <Text style={styles.janyJackFarm}>Jany Jack Farm</Text>
                </View>
                <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para sua cozinha.</Text>
                <Text style={styles.price}>$ 33,99</Text>
            </View>
        </>
    )
}

export default Cesta;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, // heigth img / width img * DIMENSIONS.WIDTH 
    },
    title:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cestaView:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    nameCesta: {
        fontSize: 24,
        lineWeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    },
    janyJackFarm:{
        fontSize: 16,
        lineHeight: 26,
        color: "#79ab78",
        fontFamily: "MontserratRegular"
    },
    description: {
      color: "#A3A3A3",
      fontSize: 16,
      lineWeight: 26  
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineWeigth: 42,
        marginTop: 8,
    },
    farmImage:{
        width: 32,
        height: 32,
        marginRight: 12
    },
    farmView: {
        flexDirection: 'row',
        paddingVertical: 12,
    }
});