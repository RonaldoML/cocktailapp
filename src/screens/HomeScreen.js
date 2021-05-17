import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonUtil} from '../components/ButtonUtil';

export const HomeScreen = () => {
  const navigator = useNavigation();

  const handleSearchButton = () => {
    navigator.navigate('SearchScreen');
  };
  return (
    <>
      <View style={styles.home}>
        <View style={styles.searchButtonContainer}>
          <ButtonUtil
            action={handleSearchButton}
            backgroundColor="white"
            title="Search"
            titleColor="black"
          />
        </View>
      </View>
    </>
  );
};
