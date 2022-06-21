import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import Profile from '../Profile';

const Status = ({statusData}) => {
  return (
    <>
      {statusData ? (
        <View pl={5}>
          <ScrollView horizontal={true}>
            {statusData.map((item, index) => (
              <Profile key={index} profile={item} />
            ))}
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};

export default Status;
