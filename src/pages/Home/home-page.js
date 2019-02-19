import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import styles from './styles';
import sharedStyles from '../../shared/shared-styles';
import {fetchMovies} from '../../api';
import MoviesList from '../../components/MoviesList';
import SearchComponent from '../../components/SearchComponent';

class HomeScreen extends React.Component {
    state = {
        loading: false,
        data: [],
        page: 1,
        searchVal: null
    };

    componentDidMount() {
        this.findStuff();
    }

    findStuff = (query) => {
        this.setState({
            loading: true
        });

        fetchMovies(this.state.page, query)
            .then(res => {
                if (this.state.data) {
                    this.setState({data: [...this.state.data, ...res]});
                } else {
                    this.setState({data: res});
                }
                this.setState({loading: false});
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false
                });
            });
    };

    onSearchChange = (val) => {
        this.setState({
            searchVal: val
        });
    };

    submitSearch = () => {
        const {searchVal} = this.state;

        if (searchVal) {
            this.setState({data: null});
            this.findStuff(searchVal);
        }
    };

    goToMovieDetails = (id) => {
       this.props.navigation.navigate('Details', {
           id: id
       });
    };

    loadMore = () => {
        const {searchVal} = this.state;

        this.setState((state) => ({ page: state.page + 1}), searchVal? this.findStuff(searchVal) : this.findStuff());
    };

    render() {
        const {loading, data} = this.state;

        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <SearchComponent onSearchChange={this.onSearchChange} onSubmit={this.submitSearch} />
                {!data && !loading && (
                    <TouchableOpacity
                        onPress={this.findStuff}
                        style={style.button}
                    >
                        <Text style={styles.buttonText}>Find Stuff</Text>
                    </TouchableOpacity>
                )}
                <MoviesList goToDetail={this.goToMovieDetails} isLoading={loading} loadMore={this.loadMore} data={data}/>
            </View>
        );
    }
}

export default HomeScreen;