import mongoose from 'mongoose'
import { IRole } from './role'

export interface IUser extends mongoose.Document{
  refreshToken: string
  userId: string
  email:string
  password: string
  roleId: IRole['_id']
  lastIpAddress: string
  lastTime: string
}

const UserSchema = new mongoose.Schema({
  refreshToken: { type: mongoose.Schema.Types.String, required: false, unique: true },
  userId: { type: mongoose.Schema.Types.String, required: true, unique: true },
  email: { type: mongoose.Schema.Types.String, required: true, unique: true },
  password: { type: mongoose.Schema.Types.String, required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Role' },
  lastIpAddress: { type: mongoose.Schema.Types.String, required: false },
  lastTime: { type: mongoose.Schema.Types.String, required: false }
})

UserSchema.methods.comparePassword =  function (password: string): boolean {
  return password === this.password
}

export default mongoose.model<IUser>('User', UserSchema)
