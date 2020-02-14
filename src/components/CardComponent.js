import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardComponent = ({cookingTime, title, image}) => {

    return(
            <View style={styles.cardContainer}>
                <TouchableOpacity
                    style={styles.card}>
                    <View style={styles.imageContainer}>
                    </View>

                    {/* WRAPPER OF API TEXT */}
                    <View style={styles.recipeWrapper}>
                        <Text style={styles.recipeTitle}>{title}</Text>
                        <View style={{
                            borderRadius: 9,
                            backgroundColor: '#5779F0',
                            width: '60%'
                        }}>
                            <Text style={styles.cookTime}>Time: {cookingTime} min</Text>
                        </View>
                        <Text style={styles.descriptionText}>{image}</Text>
                    </View>

                </TouchableOpacity>
            </View>
    )

}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: 'white',
        height: '100%',
        zIndex: -9,
        display: "flex",
        paddingTop: 15
    },
    card:{
        height: 150,
        width: '90%',
        backgroundColor: 'rgba(196, 196, 196, 0.4)',
        alignSelf: 'center',
        borderRadius: 9,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    recipeTitle:{
        position: 'absolute',
        width: 200,
        height: 38,
        left: 18,
        top: 89,
        fontSize: 32,
        letterSpacing: -0.333333,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    imageContainer: {
        height: '80%',
        width: '40%',
        backgroundColor: 'black',
        margin: 15
    },
    recipeWrapper:{
        display: "flex",
        flexWrap: 'wrap',
        flex: 0,
    },
    recipeTitle: {
        width: '100%',
        height: 24,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.33333,
    },
    cookTime: {
        color: 'white',
        alignSelf: "center",
    },
    descriptionText: {
        width: 180,
        padding: 3,
        marginTop: 10
    }
})  

export default CardComponent;