import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

class Search extends Component{
    render() {
        const {value, onSubmit, onSearchChange} = this.props;

        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                           placeholder={'Search Movie'}
                           value={value}
                           onChangeText={onSearchChange}
                           placeholderTextColor={'grey'}
                />
                <TouchableOpacity onPress={onSubmit} style={styles.button}><Text>Search</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       borderWidth: 1,
       borderColor: '#E6C0E9',
       marginBottom: 10,
       borderRadius: 4,
       width: 300,
       height: 50,
       position: 'relative',
       padding: 5,
   },
    textInput: {
        fontSize: 16,
        color: '#000',
        flex: 1
    },
    button: {
        borderWidth: 1,
        borderColor: '#E6C0E9',
        position: 'absolute',
        right: 5,
        padding: 5,
        top: 5,
        height: '100%',
        color: '#000',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
       fontSize: 16,
        color: '#000'
    }
});

export default Search;