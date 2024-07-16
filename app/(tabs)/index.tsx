import { Image } from 'react-native';
import { Text, View } from 'react-native';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 32 }}>Meri baggi mera ghoda, jo isme contribute naa kiya uski bkl</Text>
      <Text style={{ color: 'white', fontSize: 32 }}>*dhol noises*</Text>
<Image
  source={{ uri: 'https://gifdb.com/images/high/corgie-dancing-dog-hbcedhqqt57l9tsx.webp' }}
  style={{ width: 100, height: 100 }}
/>
    </View>
  );
};

export default index;