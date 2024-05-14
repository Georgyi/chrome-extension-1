import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { onTabAction } from '../../../../../utils/tab-action';
import { messageConstructor } from '../../../../../tab-envirentment/utils/message-constructor';
import { FormType } from '../types';

export const useSubmitForm = (formProps: Partial<UseFormReturn<FormType>>) => {
  const onSubmit: SubmitHandler<FormType> = (data) => {
    onTabAction?.({
      func: messageConstructor,
      args: [
        !!data.isHello,
        !!data.isAbout,
        !!data.isCallToAction,
        !!data.isBye,
      ],
    });

    formProps?.reset?.();
  };

  return { onSubmit };
};
