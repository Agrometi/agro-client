type UserT = {
  _id: string;
  email: string;
  fullname: string;
  avatar: string;
};

// API

type GetUserDetailsArgsT = {
  userID: string;
};

export type {
  UserT,
  // API
  GetUserDetailsArgsT,
};
