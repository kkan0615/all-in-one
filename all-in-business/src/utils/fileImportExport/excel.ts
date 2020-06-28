import xlsx, { BookType } from 'xlsx'
import { saveAs } from 'file-saver'

const s2ab = (s: any) => {
  const buf = new ArrayBuffer(s.length) // convert s to arrayBuffer
  const view = new Uint8Array(buf) // create uint8array as viewer
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF // convert to octet
  return buf
}

/**
 * @description Export excel file
 * @param excelData - Data to export
 * @param fileName  - name of file
 * @param bookType  - Type of extention
 */
export const exportExcel = (excelData: Array<any>, fileName: string, bookType: BookType) => {
  const workbook = xlsx.utils.book_new()
  const newWorksheet = xlsx.utils.aoa_to_sheet(excelData)

  xlsx.utils.book_append_sheet(workbook, newWorksheet, fileName)

  const wbout = xlsx.write(workbook, { bookType: bookType, type: 'binary' })

  saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName)
}

