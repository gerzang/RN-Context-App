import { StyleSheet } from "react-native";



export const globalColors = {
    primary: '#7037EB',
    secondary: '#F72585',
    tertiary: '#3A0CA3',
    success: '#4CC9F0',
    warning: '#FCA311',
    danger: '#E71D36',
    dark: '#22223B',
    background: '#FFFFFF',

}


export const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        marginTop:10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:"#000",        
    },
    primaryButton:{
        backgroundColor: globalColors.primary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    }
})