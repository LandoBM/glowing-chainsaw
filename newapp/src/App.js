import logo from './logo.svg';
import React, {Component }from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native'
import Header from '../components/header'
import Timeline from '../components/timeline'
//import './App.css';

export default function App() {
  return (
    <View>
      <Header />
      <Timeline />
    </View>
  );
}



