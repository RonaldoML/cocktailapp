import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const DrinkCard = ({title, img}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.name}>{title}</Text>
      </View>
      <Image resizeMode="cover" source={{uri: img}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth * 0.8,
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: 70,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    color: 'black',
    fontSize: 15,
    top: 20,
    left: 70,
  },
  image: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 50,
  },
});

DrinkCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};
