import mongoose from 'mongoose'
import moment from 'moment'
import { IUser } from './user'
import { DATEDEFAULTFORMAT } from '@/config'

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface INotification extends mongoose.Document{
  title: string;
  content: string;
  type: NotificationType
  userId: IUser['_id'];
  authorId?: IUser['_id'];
  read: boolean
  date: string;
}

const NotificationSchema = new mongoose.Schema({
  title: { type: mongoose.Schema.Types.String, required: true },
  content: { type: mongoose.Schema.Types.String, required: true },
  type: { type: mongoose.Schema.Types.String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  authorId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' },
  read: { type: mongoose.Schema.Types.String, required: true, default: false },
  date: {
    type: mongoose.Schema.Types.String, required: true,
    default: moment().format(DATEDEFAULTFORMAT)
  },
})

export default mongoose.model<INotification>('Notification', NotificationSchema)
