import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {noContentAction} from '../redux/actions/search';

const windowWidth = Dimensions.get('window').width;

export const SearchInput = ({term, setTerm}) => {
  const dispatch = useDispatch();
  const handleChange = async e => {
    setTerm(e.nativeEvent.text);
  };

  useEffect(() => {
    if (!term) {
      dispatch(noContentAction(false));
    }
  }, [term]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          value={term}
          onChange={handleChange}
        />
        <Icon
          name="close-sharp"
          size={20}
          color="grey"
          onPress={() => setTerm('')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: '#F3F1F3',
    borderRadius: 30,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

SearchInput.propTypes = {
  term: PropTypes.string,
  setTerm: PropTypes.func,
};
