import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column"
    },
    verticalCentered:{
        justifyContent:'center',
        flex:1
    },
    horizontalCentered:{ 
        justifyContent:'center',
        flex:1
    }
})

export const colors=StyleSheet.create({
    primaryButton:{
        backgroundColor:'#00308F',
        color:'white',
        
    },
    primaryTitle:{
        color:'#1974D2'
    },
    secondaryButton:{
        backgroundColor:'red',
        color:'white'
    }
})

export const controls = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    buttons: {
        //width: '70%',
        //flex: 1
    }
})