import React, { useState } from 'react';
import {Image, TouchableOpacity, View, Text, Pressable} from 'react-native';

import ProfileImage from '../../assets/images/profile.png';
import * as SCREENS from '../../constants/screens';
import StatusWrapper from '../StatusWrapper';

const Profile = ({ profile }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <Pressable onPress={() => {
      console.log('profile pressed')
      setVisible(true);
      console.log('visible: ', visible)
    }}>
      <View>
        <View style={{borderWidth: 3, borderColor: 'yellow', borderRadius: 40, padding: 5, marginRight: 10}}>
          <Image style={{width: 65, height: 65}} source={ProfileImage} />
        </View>
        <Text>John Doe</Text>
      </View>
    </Pressable>
    {visible && <StatusWrapper statusData={profile.statusData} visible={visible} onClose={data => setVisible(false)} />}
    </>
  );
};

export default Profile;
