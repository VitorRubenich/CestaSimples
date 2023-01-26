import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from '../Texto/Texto';

const MyButton = ({ textBtn, onPressAction, style}) => {
    return(
        <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPressAction}>
            <Texto style={styles.btnText}> { textBtn }</Texto>
        </TouchableOpacity>
    )
}

export default MyButton;
const styles = StyleSheet.create({

    btnText: {
        textAlign: "center",
        color: '#FFF',
        fontSize: 16,
        lineheight: 26,
        fontWeigth: "bold",
    },
})