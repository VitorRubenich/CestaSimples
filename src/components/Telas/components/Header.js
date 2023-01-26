import { StyleSheet, Image, Dimensions} from "react-native";
import Texto from '../../Texto/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Header = ({title}) => {
    return(
        <>
            <Image style={styles.topo} source={topo} />
            <Texto style={styles.title}>{title}</Texto>
        </>
    )
}
export default Header;

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
})