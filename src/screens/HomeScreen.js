import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const navigator = useNavigation();

  const handleSearchButton = () => {
    navigator.navigate('SearchScreen');
  };
  return (
    <>
      <View style={styles.home}>
        <View style={styles.searchButtonContainer}>
          <Button
            buttonStyle={{
              borderColor: 'transparent',
              backgroundColor: 'white',
              borderRadius: 50,
            }}
            titleStyle={{color: 'black'}}
            title="Search"
            type="solid"
            icon={<Icon name="search" size={14} color="#841569" />}
            onPress={handleSearchButton}
          />
        </View>
      </View>
    </>
  );
};
