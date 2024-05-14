import React from 'react';
import { Divider, Flex } from '@chakra-ui/react';

import { WeightTextarea } from './components/weight-textarea';
import { MessageForm } from './components/message-form';
import { TemplateMessages } from './components/template-messages';

export const LinkedIn = () => {
  return (
    <Flex flexDir="column">
      <WeightTextarea />
      <Divider my="0.5rem" />
      <TemplateMessages />
      <Divider my="0.5rem" />
      <MessageForm mt="1rem" />
    </Flex>
  );
};
