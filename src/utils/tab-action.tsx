export function onTabAction<T extends any[]>({ func, args }: { func: (...args: T) => void; args?: T }) {
  chrome?.tabs?.query({ active: true, currentWindow: true })?.then(([tab]) => {
    chrome?.scripting?.executeScript({ target: { tabId: tab.id! }, func, args });
  });
}
