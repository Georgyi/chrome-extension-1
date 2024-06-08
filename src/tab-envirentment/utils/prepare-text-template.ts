import { ETemplateTypes } from '../../enums/ETemplateTypes.ts';

export function prepareTextTemplate<T extends any[]>(...args: T) {
  console.log(`[customMessageOne] start`);
  console.log(args);

  console.log(ETemplateTypes.REACH_OUT_FIRSTLY);

  const {
    customLinkedInExtension: {
      constants: { USER_NAME_ID },
      actions: { transformToWeight, sendLinkedinMessage },
    },
  } = window;

  console.log(ETemplateTypes.ANY_UPDATE);

  const userName = document.querySelector(USER_NAME_ID)?.textContent?.trim() || '';


  const text = `
      <p>Hey ${transformToWeight({ text: userName })},</p>
      <p><br></p>
      <p>
      I see you're hiring. I’m frontend developer with ${transformToWeight({
        text: '5 years of commercial experience',
      })} in custom development.
      I've already applied for the opening position and decided to reach out here.</p>
      <p><br></p>
      <p>We could set up a meeting and discuss the open role, what do you think?</p>
    `;

  sendLinkedinMessage({ text });

  console.log(`[customMessageOne] finish`);
}
