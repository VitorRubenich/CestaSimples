import React from "react";
import {  StyleSheet, Dimensions, Text, View} from "react-native";
import Header from '../Telas/components/Header';
import Details from "./components/Details";
const Cesta = () => {
    return (
        <>
            <Header/>
            <View style={styles.cestaView}>
                <Details />
            </View>
        </>
    )
}

export default Cesta;

const styles = StyleSheet.create({
    cestaView:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});