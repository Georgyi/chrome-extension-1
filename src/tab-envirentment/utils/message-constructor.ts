export function messageConstructor<T extends any[]>(...args: T) {
  console.log(`[messageConstructor] start`);

  const {
    customLinkedInExtension: {
      constants: { USER_NAME_ID, MY_NAME, MY_EMAIL, MY_PHONE },
      actions: { transformToWeight, sendLinkedinMessage },
    },
  } = window;

  const [
    isHello,
    isAbout,
    isCallToAction,
    isBye,
  ] = args;

  console.log(`args`, { args });

  const userName = document.querySelector(USER_NAME_ID)?.textContent?.trim() || 'No name';

  const textList: Array<string> = [];

  if (isHello) {
    textList.push(`
      <p>Hello ${transformToWeight({ text: userName })}</p>
    `);
  }

  if (isAbout) {
    textList.push(`
      <p>
        I see you're hiring. I’m frontend developer with ${transformToWeight({
          text: '7 years of commercial experience',
        })} in custom development.
        I've already applied for the opening position and decided to reach out here.
      </p>
    `);
  }

  if (isCallToAction) {
    textList.push(`
      <p>We could set up a meeting and discuss the open role, ${transformToWeight({ text: 'what do you think?' })}</p>
    `);
  }

  if (isBye) {
    textList.push(`
      <p>With best regards, ${transformToWeight({ text: MY_NAME })}</p>
      <p>${transformToWeight({ text: 'Phone' })}: ${MY_PHONE}</p>
      <p>${transformToWeight({ text: 'E-mail' })}: ${MY_EMAIL}</p>
    `);
  }

  sendLinkedinMessage({ text: textList.join('<p><br /></p>'), isNew: false });

  console.log(`[messageConstructor] finish`);
}
