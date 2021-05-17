import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DrinksGrid} from '../components/DrinksGrid';
import {SearchInput} from '../components/SearchInput';
import {
  endLoadingAction,
  noContentAction,
  startLoadingAction,
} from '../redux/actions/search';
import {styles} from '../theme/appTheme';

export const SearchScreen = () => {
  const dispatch = useDispatch();

  const {search} = useSelector(state => state);
  const {loading, noContent} = search;

  const [term, setTerm] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (term) {
        try {
          dispatch(startLoadingAction());
          dispatch(noContentAction(false));
          const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;
          const resp = await fetch(url);
          const data = await resp.json();
          if (data.drinks === null) {
            dispatch(noContentAction(true));
          }
          dispatch(endLoadingAction());

          setResult(data.drinks);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [term]);

  return (
    <View style={styles.searchScreenContainer}>
      <View>
        <SearchInput term={term} setTerm={setTerm} />
      </View>
      {noContent && (
        <View style={styles.noContentView}>
          <Text style={styles.noContentText}>
            Can't find any drink. {'\n'} Please! enter another term.
          </Text>
        </View>
      )}
      {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="small" color="white" />
        </View>
      )}
      {!loading && (
        <View style={styles.resultsContainer}>
          <DrinksGrid results={result} />
        </View>
      )}
    </View>
  );
};
