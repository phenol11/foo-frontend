export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface DashboardStats {
  notifications: number;
  lastLogin: string;
}

export interface ProtectedResponse {
  message: string;
  user: User;
  stats: DashboardStats;
}
