import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';

import { CheckboxForm } from '../../../form/checkbox';

import { useSubmitForm } from './hooks/use-submit-form';
import { FormType } from './types';

export const MessageForm = (props: FlexProps) => {
  const formData = useForm<FormType>();
  const { onSubmit } = useSubmitForm(formData);

  const { handleSubmit, control } = formData;

  return (
    <Flex flexDir="column" {...props}>
      <Text textStyle="h3">Greeting Form</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxForm label="Приветствие" inputProps={{ name: 'isHello', control }} />
        <CheckboxForm label="Рассказать обо мне" inputProps={{ name: 'isAbout', control }} />
        <CheckboxForm label="Call to action" inputProps={{ name: 'isCallToAction', control }} />
        <CheckboxForm label="Прощание" inputProps={{ name: 'isBye', control }} />

        <Button mt="1rem" size="xs" colorScheme="blue" type="submit">
          Generate message
        </Button>
      </form>
    </Flex>
  );
};
