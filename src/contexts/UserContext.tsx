import { createContext, useContext } from "react";

type ProfileType = {
  phone_number: string;
  is_admin: boolean;
};

export interface UserResponseType {
  id?: number | string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  user_profile: ProfileType;
}

type userContextType = {
  user: UserResponseType;
  updateUser: ({}: UserResponseType) => void;
};

export const UserContext = createContext<userContextType | undefined>(
  undefined
);

export const useUser = (): userContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseUser must be used within a userProvider");
  }
  return context;
};
