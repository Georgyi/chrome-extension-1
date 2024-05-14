import React, { useState } from 'react';
import { Button, Flex, Textarea, Text, FlexProps } from '@chakra-ui/react';

import { onTabAction } from '../../../../utils/tab-action';

export const WeightTextarea = (props: FlexProps) => {
  const [value, setValue] = useState('');

  return (
    <Flex flexDir="column" {...props}>
      <Text textStyle="h3">
        To add weight text
      </Text>
      <Textarea
        mt="1rem"
        value={value}
        onChange={(e) => {
          setValue(e?.target?.value || '');
        }}
      />
      <Button
        mt="1rem"
        size="xs"
        colorScheme="green"
        onClick={() => {
          onTabAction<[string]>({
            func: (text) => {
              const {
                customLinkedInExtension: {
                  actions: { transformToWeight, sendLinkedinMessage },
                },
              } = window;

              sendLinkedinMessage({ text: transformToWeight({ text }), isNew: false });
            },
            args: [value],
          });
          setValue('');
        }}
      >
        Send
      </Button>
    </Flex>
  );
};
