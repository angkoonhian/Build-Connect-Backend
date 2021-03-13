import * as mongoose from "mongoose";

export interface Iuser extends mongoose.Document {
    _username: string;
    _password: string;
};

export const UserSchema = new mongoose.Schema({
    _username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        unique: true
    },
    _password: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
});

const User = mongoose.model<Iuser>('user', UserSchema);
export default User