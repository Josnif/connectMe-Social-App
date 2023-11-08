import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 10,
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    input: {
        marginBottom: "auto",
    },
    buttonContainer: {
        marginTop: "auto",
        marginVertical: 10,
    },
    icon: {
        marginLeft: "auto",
    },
    image: {
        width: "100%",
        aspectRatio: 4 / 3,
        alignSelf: "center",
    },
});


export default styles;
