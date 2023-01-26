import Texto from '../../Texto/Texto';
import { StyleSheet, View, Image} from 'react-native';

const Itens = ({ title, lista }) => {
    return(
        <>
            <Texto style={styles.title} >{title}</Texto>
            { lista.map( ({nome, img}) => {
                return <View style={styles.exibeItem} key={nome}>
                        <Image style={styles.imgTam} source={img} />
                        <Texto style={styles.itemName} >{nome}</Texto>
                    </View>
            })}
        </>
    )
}

export default Itens;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        lineHeight: 32,
        fontSize: 20,
        color: "#464646",
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 16,
    },
    exibeItem: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderbottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imgTam: {
        width: 64,
        height: 64,
    },
    itemName:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
})