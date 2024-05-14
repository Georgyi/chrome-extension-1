import React from 'react';
import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';

import { onTabAction } from '../../../../utils/tab-action';
import { customMessageOne } from '../../../../tab-envirentment/utils/custom-message-one';

export const TemplateMessages = (props: FlexProps) => {
  return (
    <Flex flexDir="column" {...props}>
      <Text textStyle="h3">Templates</Text>
      <Flex>
        <Button mt="1rem" size="xs" colorScheme="blue" onClick={() => onTabAction?.({ func: customMessageOne })}>
          Template message - 1
        </Button>
      </Flex>
    </Flex>
  );
};
