const ERROR_MESSAGE_KEY = 'error-message';
const ERROR_STACK_KEY = 'error-stack';

export const getErrorFromStorage = () => ({
  errorMessage: localStorage.getItem(ERROR_MESSAGE_KEY),
  errorStack: localStorage.getItem(ERROR_STACK_KEY),
});

export const setErrorFromStorage = ({
  errorMessage,
  errorStack,
}: ReturnType<typeof getErrorFromStorage>) => {
  if (errorMessage && errorStack) {
    localStorage.setItem(ERROR_MESSAGE_KEY, errorMessage);
    localStorage.setItem(ERROR_STACK_KEY, errorStack);
  }
};

export const removeErrorFromStorage = () => {
  localStorage.removeItem(ERROR_MESSAGE_KEY);
  localStorage.removeItem(ERROR_STACK_KEY);
};
