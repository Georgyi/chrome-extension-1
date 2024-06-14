import React from 'react';
import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';

import { onTabAction } from '../../../../utils/tab-action';
import { prepareTextTemplate } from '../../../../tab-envirentment/utils/prepare-text-template.ts';

const templateMessages = [
  {
    value: 'First reach out',
    type: 'reach_out_firstly',
  },
  {
    value: 'Short follow up',
    type: 'short_follow_up',
  },
  {
    value: 'Any update',
    type: 'any_update',
  },
];

export const TemplateMessages = (props: FlexProps) => {
  return (
    <Flex flexDir="column" {...props}>
      <Text textStyle="h3" mb="1rem">
        Templates
      </Text>
      <Flex flexWrap="wrap">
        {templateMessages.map(({ value, type }) => (
          <Button
            key={type}
            mb="0.5rem"
            mr="1rem"
            minWidth="50px"
            size="xs"
            colorScheme="blue"
            onClick={() => onTabAction<[string]>?.({ func: prepareTextTemplate, args: [type] })}
          >
            {value}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
