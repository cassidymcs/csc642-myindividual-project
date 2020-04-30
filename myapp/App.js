import React from 'react';
import { StyleSheet } from 'react-native';
import Drawer from './navigators/drawer-navigator';

export default class App extends React.Component {
    render() {
        return (
            <Drawer />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});