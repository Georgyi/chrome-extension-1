export function prepareTextTemplate<T extends any[]>(...args: T) {
  console.log(`[customMessageOne] start`);

  const {
    customLinkedInExtension: {
      constants: { USER_NAME_ID },
      actions: { transformToWeight, sendLinkedinMessage },
    },
  } = window;

  const userName = document.querySelector(USER_NAME_ID)?.textContent?.trim() || '';

  let text = '';


  if (args[0] === 'reach_out_firstly') {
    // В поле коннекта необходимо оставить форматирование текста как сейчас
    text = `Hey ${transformToWeight({ text: userName })}
I see you're hiring. I’m frontend developer with ${transformToWeight({ text: '5 years of commercial experience' })} in custom development.
I've already applied for the opening position and decided to reach out here.

We could set up a meeting and discuss the open role, what do you think?`;
  }

  if (args[0] === 'short_follow_up') {
    text = `
      <p>Hey ${transformToWeight({ text: userName })},</p>
      <p><br></p>
      <p>
      Just in case if you missed my previous message.
      </p>
    `;
  }

  if (args[0] === 'any_update') {
    text = `
      <p>Hey ${transformToWeight({ text: userName })},</p>
      <p><br></p>
      <p>
      I hope you are doing well.
      <p><br></p>
      <p>I’m writing to express my continued interest in the role and to ask if there are any updates on the hiring process.</p>
      <p><br></p>
      <p>Please let me know if there are any updates or further steps I should take.
</p>
    `;
  }

  sendLinkedinMessage({ text });

  console.log(`[customMessageOne] finish`);
}
