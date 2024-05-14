export function customMessageOne() {
  console.log(`[customMessageOne] start`);

  const {
    customLinkedInExtension: {
      constants: { USER_NAME_ID },
      actions: { transformToWeight, sendLinkedinMessage },
    },
  } = window;

  const userName = document.querySelector(USER_NAME_ID)?.textContent?.trim() || 'No name';

  const text = `
      <p>Hello ${transformToWeight({ text: userName })},</p>
      <p><br></p>
      <p>
      I see you're hiring. I’m frontend developer with ${transformToWeight({
    text: '7 years of commercial experience',
  })} in custom development.
      I've already applied for the opening position and decided to reach out here.</p>
      <p><br></p>
      <p>We could set up a meeting and discuss the open role, what do you think?</p>
    `;

  sendLinkedinMessage({ text });

  console.log(`[customMessageOne] finish`);
}
