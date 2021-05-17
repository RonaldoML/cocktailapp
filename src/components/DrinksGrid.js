import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import {DrinkCard} from './DrinkCard';

export const DrinksGrid = ({results}) => {
  return (
    <FlatList
      data={results}
      keyExtractor={result => result.idDrink}
      renderItem={({item}) => (
        <DrinkCard
          key={item.idDrink}
          title={item.strDrink}
          img={item.strDrinkThumb}
        />
      )}
    />
  );
};

DrinksGrid.propTypes = {
  results: PropTypes.array,
};
