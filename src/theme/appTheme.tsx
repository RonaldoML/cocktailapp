import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  globalColor: {backgroundColor: '#841584'},
  home: {
    flex: 1,
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitle: {
    color: 'white',
  },
  searchScreenContainer: {
    backgroundColor: '#841584',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 50,
  },
  searchButtonContainer: {
    width: 200,
    margin: 10,
  },
  searchButton: {
    alignSelf: 'center',
  },
  backButtonContainer: {
    width: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noContentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContentText: {
    textAlign: 'center',
    color: 'white',
  },
  resultsContainer: {
    marginTop: 55,
    alignItems: 'center',
  },
});
