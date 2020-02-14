import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchScreen from './SearchScreen';


const DetailScreen = (props) => {

    console.log("This is Detail props:" + props)
    return(
        <View>

            {/* THIS IS TOP BAR  */}
            <LinearGradient
                colors={['#5779F0', '#9EB3FC']}
                style={{
                    display: 'flex',
                    width: "100%",
                    height: 300
                }}>
            </LinearGradient>


        </View>
    )

}

const styles = StyleSheet.create({
    viewContainer:{
        display: 'flex',
        height: 500,
        width: '100%'
    },
    textContainer: {
        fontSize: 32,
        lineHeight: 38,
        textAlign: 'center',
        letterSpacing: 0.33333,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginTop: 10
    },
    imageContainer: {
        display: 'flex',
        marginTop: '70%',
        height: 175,
        width: '100%',
        alignItems: "center"
    },
    image:{
        height: 175,
        width: 155,
    }
})  

export default DetailScreen;