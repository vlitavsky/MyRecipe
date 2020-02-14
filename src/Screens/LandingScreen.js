import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LandingScreen = (props) => {
    return(
        <LinearGradient
            colors={['#5779F0', '#9EB3FC']}
            style={{
                display: 'flex',
                width: "100%",
                height: "100%",
              }}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={require('../images/splash_screen.png')}></Image>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Recipe Ideas</Text>
                </View>
                <TouchableOpacity
                style={styles.loginButton}
                onPress={() => props.navigation.navigate('Search')}
                >
                <Text
                    style={{
                        textAlign: 'center',
                    }}>LOGIN</Text>
            </TouchableOpacity>      
        </LinearGradient>
    )

}

const styles = StyleSheet.create({

    imageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '70%',
        width: '100%',
        alignItems: "center"
    },
    image:{
        alignSelf: 'center',
        height: 300,
        width: 350,
        opacity: 60
    },
    touchContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 9,
        backgroundColor: 'red',
        height: 150
    },
    loginButton: {
        display: 'flex',
        alignSelf: 'center',
        fontSize: 22,
        borderRadius: 9,
        fontWeight: 'bold',
        width: '70%',
        marginVertical: '30%',
        padding: 10,
        backgroundColor: '#FDCDCD',
        shadowColor: "#000", 
        shadowOffset:{ 
        width: 0, 
        height: 6,
        }, 
        shadowOpacity: 0.39, 
        shadowRadius: 8.30, 
        elevation: 13,
    },
})




export default LandingScreen;