import { httpClient } from './httpClient';

export interface ISignup {
  email: string;
  password: string;
}
interface ISignupResponse {
  token: string;
}
export interface IForgotPasswordDTO {
  credential: string;
}

interface IForgotPasswordResponse {
  message: string;
  code: string;
  error: string;
}

export interface IResetPasswordDTO {
  credential: string;
  code: string;
  password: string;
  confirmPassword: string;
}

export interface ICheckCodeResponseDTO {
  message: string;
  code: string;
  error: string;
}

export const signup = async(body: ISignup) => {
  const { data } = await httpClient.post<ISignupResponse>('/auth/signup', body);

  return data;
};

export const forgotPassword = async(body: IForgotPasswordDTO) => {
  const { data } = await httpClient.post<IForgotPasswordResponse>(
    '/auth/forgot-password',
    body,
  );
  return data;
};

export const resetPassword = async(body: IResetPasswordDTO) => {
  const { data } = await httpClient.post<ICheckCodeResponseDTO>(
    '/auth/reset-password',
    body,
  );

  return data;
};

export const authService = {
  signup,
  forgotPassword,
  resetPassword,
};
