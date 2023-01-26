import React from "react";
import {  StyleSheet, ScrollView, Text, View} from "react-native";
import Header from '../Telas/components/Header';
import Details from "./components/Details";
import Itens from "./components/Itens";
const Cesta = ({topo, details, itens}) => {
    return (
        <ScrollView>
            <Header {...topo} />
            <View style={styles.cestaView}>
                <Details {...details} />
                <Itens {...itens}/>
            </View>
        </ScrollView>
    )
}

export default Cesta;

const styles = StyleSheet.create({
    cestaView:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});