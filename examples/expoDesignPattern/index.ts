import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

function Main() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    React.useEffect(() => {
        Font.loadAsync({
            'BrightlayerUIIcons': require('@brightlayer-ui/react-native-vector-icons/Fonts/BrightlayerUIIcons.ttf'),
            'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
            'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
            'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
        }).then(() => setFontsLoaded(true));

        // Remove default input border on web
        if (typeof document !== 'undefined') {
            const style = document.createElement('style');
            style.innerHTML = `
                input, textarea {
                    outline: none !important;
                    box-shadow: none !important;
                    border: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    if (!fontsLoaded) return null;

    return React.createElement(App);
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
