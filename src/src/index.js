import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// Components
import Hello from "./components/Hello.component";


class App extends React.Component {
	render() {
		return (
			<View style={styles.box}>
				<Text style={styles.text}>Styles text</Text>
				<Hello />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: { padding: 10 },
	text: { fontWeight: 'bold' }
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });