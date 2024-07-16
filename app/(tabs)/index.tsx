import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const index = () => {
  const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const [currentColor, setCurrentColor] = useState(rainbowColors[0]);
  let colorIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor(rainbowColors[colorIndex % rainbowColors.length]);
      colorIndex++;
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: currentColor, fontSize: 32 }}>Meri baggi mera ghoda, jo isme contribute naa kiya uski bkl</Text>
      <Text style={{ color: currentColor, fontSize: 32 }}>*dhol noises*</Text>
      <Image
        source={{ uri: 'https://gifdb.com/images/high/corgie-dancing-dog-hbcedhqqt57l9tsx.webp' }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default index;