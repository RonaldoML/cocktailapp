import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';

export const ButtonUtil = ({action, backgroundColor, title, titleColor}) => {
  return (
    <Button
      buttonStyle={{
        borderColor: 'transparent',
        backgroundColor: backgroundColor,
        borderRadius: 50,
      }}
      titleStyle={{color: titleColor}}
      title={title}
      type="solid"
      onPress={action}
    />
  );
};

ButtonUtil.propTypes = {
  action: PropTypes.func,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
};
