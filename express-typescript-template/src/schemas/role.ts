import mongoose from 'mongoose'

export interface IRole extends mongoose.Document{
  name: string
  grade: number
  remark: string
}

const RoleSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: true, unique: true },
  grade: { type: mongoose.Schema.Types.Number, required: true, unique: true },
  remark: { type: mongoose.Schema.Types.String, required: false }
})

export default mongoose.model<IRole>('Role', RoleSchema)
