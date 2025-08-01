import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address?: {
    city: string;
    postalCode: string;
    state: string;
  };
  phoneNumber?: string;
  emailVerified: boolean;
  emailVerificationToken?: string ;
  emailVerificationExpires?: Date ;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {
        city: { type: String, required: false },
        postalCode: { type: String, required: false },
        state: { type: String, required: false },
    },
    phoneNumber: { type: String, required: false },
    emailVerified: { type: Boolean, default: false },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
});
// Check if the model already exists to avoid redefining it
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
