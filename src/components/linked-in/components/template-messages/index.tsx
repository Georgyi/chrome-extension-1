import React from 'react';
import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';

import { onTabAction } from '../../../../utils/tab-action';
import { prepareTextTemplate } from '../../../../tab-envirentment/utils/prepare-text-template.ts';
import { ETemplateTypes } from '../../../../enums/ETemplateTypes.ts';

const templateMessages = [
  {
    value: 'First reach out',
    type: ETemplateTypes.REACH_OUT_FIRSTLY,
  },
  {
    value: 'Short follow up',
    type: ETemplateTypes.SHORT_FOLLOW_UP,
  },
  {
    value: 'Any update',
    type: ETemplateTypes.ANY_UPDATE,
  },
];

export const TemplateMessages = (props: FlexProps) => {
  console.log(templateMessages);

  return (
    <Flex flexDir="column" {...props}>
      <Text textStyle="h3" mb="1rem">
        Templates
      </Text>
      <Flex>
        {templateMessages.map(({ value, type }) => (
          <Button
            key={type}
            mr="1rem"
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
