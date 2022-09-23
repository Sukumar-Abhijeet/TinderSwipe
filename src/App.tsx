import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainSurface from './surfaces/main';
import Header from './components/header';
import Footer from './components/footer';
import useTheme from './hooks/useTheme';

const App: () => Node = () => {

  const {AppTheme:{colors}} = useTheme();

  return (
    <SafeAreaView style={[styles.container,{backgroundColor:colors.surfaces.background}]}>
      <Header />
        <MainSurface />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;
