import React from 'react';
import { Checkbox, Flex, FlexProps } from '@chakra-ui/react';
import { useController, UseControllerProps } from 'react-hook-form';

export function CheckboxForm<T extends object>({
  label,
  inputProps,
  ...props
}: { label: string; inputProps: UseControllerProps<T> } & FlexProps) {
  const {
    field: { value, ...rest },
  } = useController(inputProps);

  return (
    <Flex {...props}>
      <Checkbox {...rest} isChecked={!!value}>
        {label}
      </Checkbox>
    </Flex>
  );
}
