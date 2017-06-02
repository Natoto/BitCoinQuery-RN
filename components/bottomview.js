'user strict';

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
	TouchableHighlight,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
// import Button from 'react-native-action-button';
import Button from 'react-native-button';

class AButton extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			//Action: {()=>{alert(1);}},
		};
		this.title={};
	}
	static propTypes = {
		Action: PropTypes.func.isRequired,
	}
	render(){
		return(
			<View>
				<TouchableHighlight  onPress={this.props.Action}
									 underlayColor="rgb(210, 230, 255)">
					<Text style={styles.text}>{this.props.title}</Text></TouchableHighlight>
			</View>
		);
	}
}

export default  class BottomView extends Component{

	constructor(props){
		super(props)
	}

	render(){
		 return (
		 		<View style={styles.container}>

					<AButton style={styles.button} title="press me" Action={()=>this._handlePress()}/>
					<AButton style={styles.button} title="hello world" Action={()=>this._handlePress()}/>
		 		</View>
		 	);
	}

	_handlePress(){

		alert('按钮被点击了');
	}

}


var styles = {

	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},

	container:{
		backgroundColor:'#00dd00',
		flexDirection:'row',
		height:90,
		justifyContent:'center',
		alignItems:'center',
	},

	button:{
		fontSize: 20,
		color: 'green',
		margin:20,
	},
	text:{
		borderRadius: 8,
		color:'#ffffff',
		backgroundColor:'#ffaa00',
	}
}



// model.export = BottomView;