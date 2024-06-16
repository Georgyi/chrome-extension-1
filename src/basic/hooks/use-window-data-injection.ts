import { useEffect } from 'react';
import { createEvent } from '../../utils/createEvent.ts';

export const useWindowDataInjection = () => {
  // Добавляем в WINDOW вкладки методы и данные, для доступа к ним в методах
  useEffect(() => {
    chrome?.tabs?.query({ active: true, currentWindow: true })?.then(([tab]) => {
      chrome?.scripting?.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          const WEIGHT_SYMBOL_MAP: { [key: string]: string } = {
            a: '𝐚',
            b: '𝐛',
            c: '𝐜',
            d: '𝐝',
            e: '𝐞',
            f: '𝐟',
            g: '𝐠',
            h: '𝐡',
            i: '𝐢',
            j: '𝐣',
            k: '𝐤',
            l: '𝐥',
            m: '𝐦',
            n: '𝐧',
            o: '𝐨',
            p: '𝐩',
            q: '𝐪',
            r: '𝐫',
            s: '𝐬',
            t: '𝐭',
            u: '𝐮',
            v: '𝐯',
            w: '𝐰',
            x: '𝐱',
            y: '𝐲',
            z: '𝐳',
            A: '𝐀',
            B: '𝐁',
            C: '𝐂',
            D: '𝐃',
            E: '𝐄',
            F: '𝐅',
            G: '𝐆',
            H: '𝐇',
            I: '𝐈',
            J: '𝐉',
            K: '𝐊',
            L: '𝐋',
            M: '𝐌',
            N: '𝐍',
            O: '𝐎',
            P: '𝐏',
            Q: '𝐐',
            R: '𝐑',
            S: '𝐒',
            T: '𝐓',
            U: '𝐔',
            V: '𝐕',
            W: '𝐖',
            X: '𝐗',
            Y: '𝐘',
            Z: '𝐙',
            0: '𝟎',
            1: '𝟏',
            2: '𝟐',
            3: '𝟑',
            4: '𝟒',
            5: '𝟓',
            6: '𝟔',
            7: '𝟕',
            8: '𝟖',
            9: '𝟗',
          };

          function transformToWeight({ text }: { text: string }) {
            return text
              .split('')
              .map((w) => WEIGHT_SYMBOL_MAP?.[w] || w)
              ?.join('');
          }

          const CHAT_CLASS = '.msg-form__contenteditable';
          const PLACEHOLDER_CHAT_CLASS = '.msg-form__placeholder';
          const SUBMIT_CHAT_BUTTON_CLASS = '.msg-form__send-button';
          const USER_NAME_ID = '#thread-detail-jump-target';
          const MY_NAME = 'Fedor';
          const MY_EMAIL = 'kotosuetolog@gmail.com';
          const MY_PHONE = '+1 (347) 475-85-36';
          const CONNECT_TEXTAREA_ID = 'custom-message';

          const sendLinkedinMessage = async ({ isNew = true, text }: { isNew?: boolean; text: string }) => {
            console.log(`[sendLinkedinMessage] start`);

            const connectMessageInput: HTMLElement | null = document.getElementById(CONNECT_TEXTAREA_ID);
            const button = document.querySelector('[aria-label="Send invitation"]');

            if (connectMessageInput && connectMessageInput instanceof HTMLTextAreaElement && button) {
              try {
                connectMessageInput.value = text;
                connectMessageInput.dispatchEvent(createEvent('input'));
              } catch (e) {
                console.error(e);
              } finally {
                button.dispatchEvent(createEvent('click'));
              }

              console.log(`[sendLinkedinMessage] end`);
              return;
            }

            const messageInput = document.querySelector(CHAT_CLASS);

            if (messageInput) {
              if (isNew) {
                messageInput.innerHTML = text;
              } else {
                if (!(messageInput.textContent || '')?.replace(/\s+/g, '').trim()) {
                  messageInput.innerHTML = `<p>${text}</p><br />`;
                } else {
                  messageInput.innerHTML += `<p>${text}</p><br />`;
                }
              }
            }

            const placeholderElement = document.querySelector(PLACEHOLDER_CHAT_CLASS);

            if (placeholderElement) {
              placeholderElement.classList.remove(PLACEHOLDER_CHAT_CLASS);
              placeholderElement.removeAttribute('data-placeholder');
              placeholderElement.innerHTML = '';
            }

            const submitButton = document.querySelector<HTMLButtonElement>(SUBMIT_CHAT_BUTTON_CLASS);

            if (submitButton) {
              submitButton.disabled = false;
            }

            console.log(`[sendLinkedinMessage] finish`);
          };

          window.customLinkedInExtension = {
            actions: {
              sendLinkedinMessage,
              transformToWeight,
            },
            constants: {
              CHAT_CLASS,
              PLACEHOLDER_CHAT_CLASS,
              SUBMIT_CHAT_BUTTON_CLASS,
              USER_NAME_ID,
              MY_NAME,
              MY_EMAIL,
              MY_PHONE,
            },
          };
        },
      });
    });
  }, []);
};
