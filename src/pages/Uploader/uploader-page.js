import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import sharedStyles from '../../shared/shared-styles';
import ImagePicker from 'react-native-image-picker';

class Uploader extends Component {
    state = {
        imageSource: null
    };

    handleImagePicker = (response) => {
        console.log('Response = ', response);

        if (response && response.uri) {
            this.setState({
                imageSource: {uri: response.uri}
            });
        }
    };

    openImagePicker = () => {
        ImagePicker.launchImageLibrary({}, this.handleImagePicker)
    };

    render() {
        const {imageSource} = this.state;

        return (
            <View style={sharedStyles.container}>
                {imageSource ?
                    <Image style={styles.image} source={imageSource} />:
                    <TouchableOpacity onPress={this.openImagePicker} style={styles.button}>
                        <Text style={styles.buttonText}>Click here to upload image</Text>
                    </TouchableOpacity>

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    },
    image: {
       width: 300,
       height: 250
    }
});

export default Uploader;