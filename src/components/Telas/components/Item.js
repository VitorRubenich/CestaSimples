import Texto from '../../Texto/Texto';
import { StyleSheet, View, Image} from 'react-native';

const Item = ( {item: {nome, img}} ) => {
   
    return  (
        <View style={styles.exibeItem}>
            <Image style={styles.imgTam} source={img} />
            <Texto style={styles.itemName}>{nome}</Texto>
        </View>
    )

}

export default Item;

const styles = StyleSheet.create({
    exibeItem: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderbottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
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