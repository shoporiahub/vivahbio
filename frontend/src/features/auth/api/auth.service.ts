import api from "../../../services/api";

export interface RegisterRequest {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

export interface LoginRequest {
  mobile: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    name: string;
    email: string;
    mobile: string;
  };
}

export const register = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};