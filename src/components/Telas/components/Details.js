import { StyleSheet, Text, Image, View} from "react-native";
import farmImage from '../../../../assets/logo.png';
import Texto from '../../Texto/Texto';


const Details = () => {
    return( 
        <>
            <Texto style={styles.nameCesta}>Cesta de Verduras</Texto>
                <View style={styles.farmView}>
                    <Image style={styles.farmImage} source={farmImage}/>
                    <Texto style={styles.janyJackFarm}>Jany Jack Farm</Texto>
                    </View>
                <Texto style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Texto>
            <Texto style={styles.price}>$ 33,99</Texto>
        </>
    )
}
export default Details;

const styles = StyleSheet.create({
    farmImage:{
        width: 32,
        height: 32,
        marginRight: 12
    },
    janyJackFarm:{
        fontSize: 16,
        lineHeight: 26,
        color: "#79ab78",
        fontFamily: "MontserratRegular"
    },
    nameCesta: {
        fontSize: 24,
        lineWeight: 42,
        color: "#464646",
        fontFamily: "MontserratRegular",
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

    farmView: {
        flexDirection: 'row',
        paddingVertical: 12,
    }
})