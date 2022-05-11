import { IOrder } from '../../interfaces/IOrder';

export interface IOrderService {
    createOrder(request: IOrder): Promise<IOrder>;
    getAllOrders(): Promise<IOrder[]>;
    getOrderById(id: string): Promise<IOrder | Object>;
    updateOrder(id: string, order: IOrder): Promise<IOrder | Object>;
    deleteOrder(id: string): Promise<IOrder | Object>;
}
