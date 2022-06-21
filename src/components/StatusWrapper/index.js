import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';

import styles from './styles';
// import {statusData} from '../../helpers/defaultData';

const StatusWrapper = ({ statusData, visible, onClose }) => {
  // const [visible, setVisible] = useState(true);
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const [current, setCurrent] = useState({data: statusData[0], index: 0});

  useEffect(() => {
    const timer = setTimeout(() => {
      if(current.index === statusData.length - 1) {
        return onClose(true);
      }
      setCurrent({
        ...current,
        index: current.index + 1,
        data: statusData[current.index + 1]
      });
      console.log('time out...')
      // clearInterval(timer);
    }, 3000);
    return () => clearTimeout(timer);

  }, [current]);


const ProgressView = (props) => {
  const progressAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      progressAnim,
      {
        toValue: (width - 40) / statusData.length,
        duration: 3000,
        useNativeDriver: false
      }
    ).start();

  }, [progressAnim]);

  return (
    <Animated.Text style={{backgroundColor: '#fff', width: progressAnim}}>
    </Animated.Text>
  )
}

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <View style={styles.statusTabContainer}>
          {statusData.map((item, index) => (
            <View
              key={index}
              style={[
                styles.statusTab,
                {
                  marginHorizontal: 2,
                  backgroundColor: '#bbbbbb',
                },
              ]}>
              {/* <Text style={{width: '50%', backgroundColor: 'green'}}></Text> */}
              {current.index === index ? <ProgressView />: null}
            </View>
          ))}
        </View>
        <Pressable onPress={() => {
          onClose(true);
        }}>
          {/* <Text style={{backgroundColor: 'red', color: '#fff'}}>
            Close Status
          </Text> */}
        </Pressable>
        <View style={styles.imageContainer}>
          <Image
            source={current.data.img}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (current.index === 0) {
            return onClose(true)
          }
          setCurrent({
            ...current,
            index: current.index - 1,
            data: statusData[current.index - 1],
          });
        }}
        style={[styles.controller]}>
        {/* <Text>left</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (current.index === statusData.length - 1) {
            return onClose(true)
          }
          setCurrent({
            ...current,
            index: current.index + 1,
            data: statusData[current.index + 1],
          });
        }}
        style={[styles.controller, {right: 0}]}>
        {/* <Text>right</Text> */}
      </TouchableOpacity>
    </Modal>
  );
};

export default StatusWrapper;
