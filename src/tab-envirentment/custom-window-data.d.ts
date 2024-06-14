interface Window {
  customLinkedInExtension: {
    actions: {
      sendLinkedinMessage: ({ isNew = true, text }: { isNew?: boolean; text: string }) => void;
      transformToWeight: ({ text }: { text: string }) => string;
    };
    constants: {
      CHAT_CLASS: string;
      PLACEHOLDER_CHAT_CLASS: string;
      SUBMIT_CHAT_BUTTON_CLASS: string;
      USER_NAME_ID: string;
      MY_NAME: string;
      MY_EMAIL: string;
      MY_PHONE: string;
    };
  };
}
