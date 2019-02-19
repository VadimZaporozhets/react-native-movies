import React, {Component} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class MovieTile extends Component{
    render() {
        const {imgUrl, title, year, goToDetail, imdbID} = this.props;
        return (
            <TouchableOpacity onPress={() => {goToDetail(imdbID)}} style={styles.tile}>
                <Image source={imgUrl} style={styles.image}/>
                <Text style={{...styles.text, ...styles.title}}>{title}</Text>
                <Text style={styles.text}>{year}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tile: {
        borderWidth: 1,
        borderColor: '#E6C0E9',
        marginBottom: 10,
        borderRadius: 4,
        flex: 1,
        width: 300
    },
    image: {
        flex: 1,
        height: 150,
        width: '100%'
    },
    title: {
      fontSize: 20
    },
    text: {
        padding: 10,
        color: '#272635',
        fontSize: 16
    }
});

export default MovieTile;