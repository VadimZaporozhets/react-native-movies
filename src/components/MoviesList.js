import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import MovieTile from './MovieTile';

class MoviesList extends Component {
    renderMovieThumbnail = ({item}) => {
        const {goToDetail} = this.props;
        const {Title, Poster, Year, imdbID} = item;
        return <MovieTile goToDetail={goToDetail} key={imdbID} imdbID={imdbID} imgUrl={{uri: Poster}} title={Title} year={Year} />;
    };

    keyExtractor = (item) => item.imdbID;

    render(){
        const {data, loadMore} = this.props;

        return (
            <View>
                {
                    data && (data.length > 0) &&
                    <FlatList data={data}
                              scrollable
                              keyExtractor={this.keyExtractor}
                              renderItem={this.renderMovieThumbnail}
                              style={{
                                  flex: 1,
                                  width: '100%'
                              }}
                              onEndReached={loadMore}/>
                }
            </View>
        );
    }
}

export default MoviesList;

{/*<View>*/}
    {/*{isLoading ?*/}
        {/*<ActivityIndicator size={"large"} color={"#FAC9B8"}/>:*/}
        {/*data && data.length &&*/}
        {/*<View>*/}

        {/*</View>*/}
    {/*}*/}
{/*</View>*/}