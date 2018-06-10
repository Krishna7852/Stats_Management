export interface Stats {
  id: number;
  totalUsers: number;
  totalOrders: number;
  totalPurchase: number;
  totalEarnings: number;
  title: string;
  currency: string;
  date: string;
}
export interface StatsList {
 user: User;
  purchase: number;
  earnings: number;
  commision: string;
  isVerified: boolean;
  date: string;
  currency: string;
}
export interface User {
  id: number;
  name: string;
  employeeNo: string;
}

