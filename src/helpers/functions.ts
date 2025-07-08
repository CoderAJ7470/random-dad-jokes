export const checkUserInput = (userInput: number, maxNumOfPages: never) => {
  const firstPage = 1;

  if (userInput.toString() === 'NaN') {
    return `Please ensure your input is a number between 1 and ${maxNumOfPages} (inclusive)`;
  } else if (userInput < firstPage || userInput > maxNumOfPages) {
    return `Invalid page number. Please enter a number between 1 and ${maxNumOfPages} (inlcusive)`;
  }

  return '';
};
