import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Addbook(props) {
	const [open, setOpen] = useState(false);
	const [book, setBook] = useState({
		firstname: "",
		lastname: "",
		streetaddress: "",
		postcode: "",
		city: "",
		email: "",
		phone: ""

    })};