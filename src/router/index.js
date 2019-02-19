import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../pages/Home/home-page';
import SpinnerScreen from '../pages/Spinner/spinner-page';
import DetailsScreen from '../pages/Details/details-page';
import UploaderScreen from '../pages/Uploader/uploader-page';
import tabBarOptions from './router-styles';

const MoviesNavigation = createStackNavigator(
    {
        Feed: HomeScreen,
        Details: DetailsScreen
    }
);

const BottomTabNavigation = createBottomTabNavigator(
    {
        Movies: MoviesNavigation,
        Spinner: SpinnerScreen,
        Uploader: UploaderScreen
    },
    {
        initialRouteName: "Movies",
        tabBarOptions
    }
);

export default createAppContainer(BottomTabNavigation);