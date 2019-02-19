import React from 'react';
import {Text, View, ActivityIndicator, Image, ScrollView} from "react-native";
import sharedStyles from '../../shared/shared-styles';
import styles from './styles';
import {loadDetails} from '../../api';

class DetailsScreen extends React.Component {
    state = {
        isLoading: true,
        imgUrl: '',
        title: '',
        genre: '',
        director: '',
        releaseDate: '',
        plot: ''
    };

    componentDidMount() {
        this.fetchDetails();
    }

    fetchDetails = () => {
        const {navigation} = this.props;
        const movieId = navigation.getParam('id');

        this.setState({
            isLoading: true,
        });

        loadDetails(movieId)
            .then(res => {
                this.setState({
                    isLoading: false,
                    title: res.Title,
                    imgUrl: res.Poster,
                    genre: res.Genre,
                    director: res.Director,
                    releaseDate: res.Released,
                    plot: res.Plot
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isLoading: false
                });
            });
    };

    render() {
        const {isLoading, imgUrl, title, genre, director, releaseDate, plot} = this.state;

        return (
            <View style={sharedStyles.container}>
                {isLoading ?
                    <ActivityIndicator size="large" color="#E6C0E9"/>:
                    <ScrollView style={styles.content}>
                        <Image source={{uri: imgUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.plot}>{plot}</Text>
                        <Text style={styles.text}>{genre}</Text>
                        <Text style={styles.text}>{director}</Text>
                        <Text style={styles.text}>{releaseDate}</Text>
                    </ScrollView>
                }
            </View>
        );
    }
}

export default DetailsScreen;