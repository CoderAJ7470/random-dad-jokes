export const checkUserInputHasError = (
  userInput: number,
  maxNumOfPages: never
) => {
  const firstPage = 1;

  if (userInput.toString() === 'NaN') {
    return true;
  } else if (userInput < firstPage || userInput > maxNumOfPages) {
    return true;
  }

  return false;
};
