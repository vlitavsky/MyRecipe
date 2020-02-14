import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchList from '../components/SearchList';
import recipe from '../api/recipe';

const SearchScreen = (props) => {
    const [results, setResults] = useState([]);
    const [term, setTerm] = useState('');
    const [baseUri, setBaseUri] = useState('')

    console.log(baseUri)

    const searchApi = async () => {
        try {
            const response = await recipe.get('/search', {
                params: {
                    query: term,
                    number: 30,
                }
            });
        setResults(response.data.results)
        setBaseUri(response.data.baseUri)
        } catch (err) {
            console.log(err);
        }
    };

    
    console.log(results)
    console.log(baseUri)

    return(
        <View
            style={{
                display: 'flex',
                flex: 1,
                borderRadius: 9
            }}>
            <LinearGradient
                colors={['#5779F0', '#9EB3FC']}
                style={{
                    borderRadius: 9
                }}>
                <View>
                    <TextInput
                        autoCapitalize= "none"
                        autoCorrect={false}
                        term={term}
                        onChangeText={newTerm => setTerm(newTerm)}
                        onEndEditing={searchApi}
                        style={{
                            left: 20,
                            top: 30,
                            height: 150,
                            fontSize: 32,
                            color: 'white',
                            fontWeight: 'bold',
                            paddingTop: 10
                        }}>
                    </TextInput>
                </View>                  
            </LinearGradient>
            {/* THIS IS TOP BAR  */}


            {/* CONTAINER FOR CARDS */}
            <SearchList
                navigation={props.navigation}
                results={results}
                title="Results"
                baseUri={baseUri}
                style={{ flexGrow: 1 }}/>
        </View>
    )

}

const styles = StyleSheet.create({

})  

export default SearchScreen;