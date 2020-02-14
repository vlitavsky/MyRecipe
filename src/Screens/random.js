<LinearGradient
colors={['#5779F0', '#9EB3FC']}
style={{
    display: 'flex',
    width: "100%",
    height: '26%'
}}>
<View style={styles.viewContainer}>
    <View style={styles.imageContainer}>

    </View>
    <Text style={styles.textContainer}>Recipe Ideas</Text>
</View>
<Text 
    style={styles.recipeTitle}>Recipe Ideas</Text>
</LinearGradient>


{/* INPUT FIELD */}
<View>
<TextInput
    autoCapitalize= "none"
    term={term}
    onChangeText={newTerm => setTerm(newTerm)}
    style={styles.inputField}
    onEndEditing={searchApi}></TextInput>

</View>