import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import {FlatList } from 'react-native-gesture-handler';


const SearchList = ({results, navigation}) => {


    return(
            <View
                style={{
                    flex: 1,
                }}>
                <FlatList
                    style={styles.container}
                    data={results}
                    keyExtractor={results => results.id.toString()}
                    renderItem={({ item }) => {
                        return(
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Detail')}
                            style={{
                                margin: 7,
                                backgroundColor: '#E8E8E8',
                                width: '90%',
                                padding: 7,
                                borderRadius: 9,
                                alignSelf: 'center',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 2,

                                elevation: 3,
                        }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}>{item.title}</Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: "wrap",
                                    padding: 3
                                }}>
                                <Image source={{uri: 
                                        'https://spoonacular.com/recipeImages/' + item.image}}
                                        style={{
                                            height: 100,
                                            width: 100}}/>
                                <View
                                    style={{
                                        marginLeft: 5,
                                        padding: 7,
                                    }}>
                                    <Text
                                        style={{
                                            width: '100%'
                                        }}>This will take {item.readyInMinutes} minutes.</Text>
                                    <Text>Servings {item.servings}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>)
                    }}>
                </FlatList>

            </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10


    }
})  

export default SearchList;