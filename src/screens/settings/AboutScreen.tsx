import React from 'react';
import {Center, Heading, VStack} from 'native-base';

const AboutScreen = () => (
  <Center px={4} flex={1}>
    <VStack space={5} alignItems="center">
      <Heading size="lg">Welcome to about screen</Heading>
    </VStack>
  </Center>
);

export default AboutScreen;
