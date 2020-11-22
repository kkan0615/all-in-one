import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import mime from 'mime'
import app from '@/app'

class FileController {
  public static async getImage (req: Request, res: Response) {
    const { fileName, fileDirectory } = req.params
    console.log('fileName', fileName)
    console.log('fileDirectory', fileDirectory)
    res.sendFile(`${app.get('appPath')}/public/${fileDirectory}/${fileName}`)
  }

  public static async loadImageByPost (req: Request, res: Response) {
    const { fileName, fileDirectory } = req.body
    res.sendFile(`${app.get('appPath')}/public/${fileDirectory}/${fileName}`)
  }

  public static async downloadFile (req: Request, res: Response) {
    const { fileName, fileDirectory } = req.params
    console.log('downloading...')
    //
    // // const file =
    res.download(`${app.get('appPath')}/public/${fileDirectory}/${fileName}`, (error) => {
      console.error(error)
    })

    // const file = `${app.get('appPath')}/public/${fileDirectory}/${fileName}`
    // const mimetype = mime.getType(file)
    //
    // if (!mimetype) {
    //   res.status(409).json({
    //     message: 'fail'
    //   })
    //   return
    // }
    //
    // res.setHeader('Content-disposition', 'attachment; filename=' + fileName)
    // res.setHeader('Content-type', mimetype)
    //
    // const filestream = fs.createReadStream(file)
    // filestream.pipe(res)
  }
}

export default FileController
