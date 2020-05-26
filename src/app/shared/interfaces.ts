// interfaces are optional and are a typescript feature are guardrails if you are making something big to add some rules and give guidance when you are typing. To get better code-help if you type to get compile support. So if I have a ICustomer I can only manipulate the id, name, city, orderTotal and customerSince. It's a code contract
export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number; // the question mark means that this is optional not obligated
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
