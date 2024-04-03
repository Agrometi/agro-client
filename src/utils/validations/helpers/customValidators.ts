const regex = {
  is_valid_password: /^([a-zA-Z0-9-_.]{8,})*$/,
  is_latin_letters: /^[A-Za-z\s]*$/,
  is_georgian_letters: /^[ა-ჰ\s]*$/,
  is_base_64_str: /^[A-Za-z0-9+/]+={0,2}$/,
  is_numeric: /^[0-9]*$/,
  is_valid_url: /^(ftp|http|https):\/\/[^ "]+$/,
};

export const isValidPassword = {
  validator: (password: string) => regex.is_valid_password.test(password),
  message:
    "Password must contain min 8 symbol. Use latin letters and symbols ( . - _ )",
};

export const isLatinLetters = {
  validator: (value: string) => regex.is_latin_letters.test(value),
  message: (key: string) => `Please enter ${key} with latin letters`,
};

export const isGeorgianLetters = {
  validator: (value: string) => regex.is_georgian_letters.test(value),
  message: (key: string) => `Please enter ${key} with Georgian letters`,
};

export const isBase64Str = {
  validator: (value: string) => {
    const base64String = value.split(",")[1] || value;
    return (
      regex.is_base_64_str.test(base64String) && base64String.length % 4 === 0
    );
  },
  message: "Please select valid image",
};

export const isOptionalBase64Str = {
  validator: (value: string) => {
    const base64String = value.split(",")[1] || value;

    return value
      ? regex.is_base_64_str.test(base64String) && base64String.length % 4 === 0
      : false;
  },
  message: "Please select valid image",
};

export const isNumeric = {
  validator: (value: string) => regex.is_numeric.test(value),
  message: "Please enter only numbers",
};

export const greaterThanZero = {
  validator: (value: string) => parseFloat(value) > 0,
  message: (key: string) => `${key} must be greater than 0`,
};

export const confirmPasswordValidation = {
  validator: (password: string, candidatePassword: string) =>
    password === candidatePassword,
  message: "confirm password must match password field",
};

export const isURL = {
  validator: (value: string) => regex.is_valid_url.test(value),
  message: (key: string) => `${key} must be valid URL.`,
};

export const isOptionalURL = {
  validator: (value: string) => (value ? regex.is_valid_url.test(value) : true),
  message: (key: string) => `${key} must be valid URL.`,
};
