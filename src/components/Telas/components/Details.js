import { StyleSheet, Text, Image, View} from "react-native";
import MyButton from "../../Buttons/MyButton";
import Texto from '../../Texto/Texto';


const Details = ({nameCesta,janyJackFarm,farmLogo,description,price,btnComprar}) => {
    return( 
        <>
            <Texto style={styles.nameCesta}>{nameCesta}</Texto>
                <View style={styles.farmView}>
                    <Image style={styles.farmImage} source={farmLogo}/>
                    <Texto style={styles.janyJackFarm}>{janyJackFarm}</Texto>
                    </View>
                <Texto style={styles.description}>{description}</Texto>
            <Texto style={styles.price}>{price}</Texto>
            <MyButton textBtn={btnComprar} onPress={() => {}} style={styles.buttonStyle}/>
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
    },
    buttonStyle: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 7,
    },
})