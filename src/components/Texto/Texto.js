import { StyleSheet, Text } from "react-native"

export default function Texto({children, style}){
    let estilo = styles.texto;
    if(estilo?.fontWeigth === "bold"){
        estilo = styles.textoNegrito;
    }
    return <Text style={[style, styles.texto]}>{ children} </Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeigth: "normal"
    },
    textoNegrito: {
        fontFamily: "MonteserratBold",
        fontWeigth: "normal",
    },
})