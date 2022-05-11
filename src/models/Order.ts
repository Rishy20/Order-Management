import { IOrder } from '../interfaces/IOrder';
import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema({
    orderId: {
        type: Number,
        unique: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers',
        required: true
    },
    products: [{
        type: Object,
        required: true
    }],
    paymentStatus: {
        type: String,
        enum: ['unpaid', 'processing', 'paid', 'refunded'],
        default: 'unpaid'
    },
    fulfillmentStatus: {
        type: String,
        enum: ['unfulfilled', 'fulfilled', 'cancelled'],
        default: 'unfulfilled'
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model<IOrder & mongoose.Document>('orders', OrderSchema);
