const camelToSentenceCase = (camelCase) => {
  return capitalizeFirstLetter(camelCase.split(/(?=[A-Z])/).join(' '))
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  camelToSentenceCase,
  capitalizeFirstLetter
}