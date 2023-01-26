import React from "react";
import {  StyleSheet, FlatList, View} from "react-native";
import Header from '../Telas/components/Header';
import Texto from '../Texto/Texto';
import Details from "./components/Details";
import Item from "./components/Item";

const Cesta = ({topo, details, itens}) => {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={(item) => item.nome}
                ListHeaderComponent={() => {
                    return <>
                        <Header {...topo} />
                        <View style={styles.cestaView}>
                            <Details {...details} />
                            <Texto style={styles.title}> {itens.title}</Texto>
                        </View>

                    </>
                }}
                />
        </>
    )
}

export default Cesta;

const styles = StyleSheet.create({
    cestaView:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        textAlign: "center",
        lineHeight: 32,
        fontSize: 20,
        color: "#464646",
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 16,
    },
});