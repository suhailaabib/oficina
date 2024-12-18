
import { Schema, model } from 'mongoose'; 

const maintenanceSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    services:[
        {
            name:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            }
            }
    ],
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    }
});

export default model('Maintenance', maintenanceSchema);