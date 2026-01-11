import { Dimensions as d } from 'react-native';

 const dimensions = {
  width: d.get('screen').width,
  height: d.get('screen').height,
  widthW: d.get('window').width,
};
export default dimensions;
