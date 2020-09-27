import mongoose from 'mongoose'
import { IRole } from '@/schemas/role'

export type MenuType = 'desktop' | 'mobile' | 'touch'
/**
 * parentMenuId: IMenu['_id'],
 * name: string,
 * filePath: string,
 * icon: string,
 * description: string
 */
export interface IMenu extends mongoose.Document{
  parentMenuId: IMenu['_id'],
  title: string,
  menuType: MenuType
  filePath: string,
  path: string,
  hidden: boolean
  icon: string,
  roleId: IRole['_id']
  margin?: number
  description?: string
  isForGroup: boolean;
}

const MenuSchema = new mongoose.Schema({
  parentMenuId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Menu' },
  roleId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Role' },
  title: { type: mongoose.Schema.Types.String, required: true, unique: true },
  menuType: { type: mongoose.Schema.Types.String, default: 'desktop' as MenuType, required: true },
  filePath: { type: mongoose.Schema.Types.String, required: true, unique: true },
  hidden: { type: mongoose.Schema.Types.Boolean, default: false, required: true },
  path: { type: mongoose.Schema.Types.String, required: true, unique: true },
  icon: { type: mongoose.Schema.Types.String, required: true },
  margin: { type: mongoose.Schema.Types.Number, required: false },
  description: { type: mongoose.Schema.Types.String, required: false },
  isForGroup: { type: mongoose.Schema.Types.Boolean, default: false, required: true }
})

MenuSchema.methods.createTree =  function (): Array<IMenu> {
  return []
}

export default mongoose.model<IMenu>('Menu', MenuSchema)
