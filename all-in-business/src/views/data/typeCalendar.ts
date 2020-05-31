// id: 0,
// name: '곽영진',
// start: '2020-2-16 19:15',
// end: '2020-2-16 20:15',
// color: 'indigo',
// details: '가게일돕기'

interface CalendarDataInterface {
  id :number
  name :string
  start :string
  end :string
  color :string
  detail :string
}

class CalendarData {
  private id :number
  private name :string
  private start :string
  private end :string
  private color :string
  private detail :string

  constructor(id:number, name :string, start :string, end:string, color :string, detail :string) {
    this.id = id
    this.name = name
    this.start = start
    this.end = end
    this.color = color
    this.detail = detail
  }
}

const eventsSample :Array<CalendarData> = []
eventsSample.push(new CalendarData(0, '곽영진', '2020-2-16 19:15', '2020-2-16 20:15', 'indigo', '집청소하기'))
eventsSample.push(new CalendarData(1, '코이즈미 하나요', '2020-2-22 3:15', '2020-2-26 13:15', 'green', '디테일'))
eventsSample.push(new CalendarData(1, '코이즈미 하나요', '2020-2-02 3:15', '2020-2-05 18:15', 'green', '디테일'))
eventsSample.push(new CalendarData(2, '히구치 카데오', '2020-2-24 3:15', '2020-2-25 13:15', 'grey', '디테일'))

export { eventsSample, CalendarData }
