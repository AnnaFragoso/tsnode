/* eslint-disable import/no-duplicates */
import { Schema, model, Document } from 'mongoose'

interface AddressInterface extends Document {
    street: string;
    neighborhood: string;
    number: number;
    complement?: string;
    state: string;
    city: string;
};

const AddressSchema = new Schema({
  street: String,
  neighborhood: String,
  number: Number,
  complement: String,
  state: String,
  city: String
}, {
  timestamps: true
})

export default model<AddressInterface>('Address', AddressSchema)
