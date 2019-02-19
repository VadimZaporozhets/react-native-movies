import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import sharedStyle from  '../../shared/shared-styles';

const imageUri = 'https://media.scufgaming.com/pub/media/catalog/product/cache/image/1500x1200/e9c3970ab036de70892d86c6d221abfe/b/o/botg-spinner.png';

class Spinner extends Component<Props, State> {
    rotate = new Animated.Value(0);

    componentDidMount() {
        Animated.loop(
            Animated.timing(this.rotate, {
                toValue: 360,
                duration: 1500,
                easing: Easing.linear(),
            }),
            {
                iterations: 10
            }
        ).start()
    }

    render() {
        return (
            <Animated.View style={[
                sharedStyle.container,
            ]}>
                <Animated.Image
                    source={{ uri: imageUri }}
                    style={{
                        height: 100,
                        width: 100,
                        transform: [{ rotate: this.rotate.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg'],
                            }) }],
                    }}
                />
            </Animated.View>
        );
    }
}

export default Spinner;