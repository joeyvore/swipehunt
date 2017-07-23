import React from 'react';
import AppIntro from 'react-native-app-intro';

const Onboarding = ({onDone}) => {
  const pageArray = [{
    title: 'Yup',
    description: 'Swipe to the right when you like a product and want to know more. You will find it later in your list',
    img: require('../../img/swipe_right.png'),
    imgStyle: {
      height: 200,
      width: 200,
    },
    backgroundColor: '#fa931d',
    fontColor: '#fff',
    level: 10,
  }, {
    title: 'Nope',
    description: 'Swipe to the left to ignore a product.',
    img: require('../../img/swipe_left.png'),
    imgStyle: {
      height: 200,
      width: 200,
    },
    backgroundColor: '#e17a04',
    fontColor: '#fff',
    level: 10,
  },
  {
    title: 'View on PH',
    description: 'Remember to upvote your favorite project on product hunt from your like list.',
    img: require('../../img/upvote.png'),
    imgStyle: {
      height: 200,
      width: 200,
    },
    backgroundColor: '#c76000',
    fontColor: '#fff',
    level: 10,
  }];
  return (
    <AppIntro
      customStyles={{
        nextButtonText: {
          fontSize: 25,
          fontFamily: 'Roboto'
        }
      }}
      onDoneBtnClick={onDone}
      onSkipBtnClick={onDone}
      pageArray={pageArray}
    />
  );
}

export default Onboarding;
