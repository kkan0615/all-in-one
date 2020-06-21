export interface FormInterface {
  valid: boolean
  fields ?: Array<FieldInterface>
}

export interface FieldInterface {
  code: string,
  value: any
  rules: object
}

export class FormClass implements FormInterface {
  public valid !: boolean
  public fields !: Array <FieldInterface>

  public constructor(params: FormInterface) {
    this.valid = params.valid || false
    this.fields = params.fields || []
  }

  public createFieldAsObject() {
    const obj: Record<string, any> = {}
    this.fields.forEach(field => {
      obj[field.code].value = field.rules
      obj[field.code].rules = field.rules
    })

    return obj
  }

  public getFieldfByCode(code: string) {
    return this.fields.find(e => e.code === code)
  }

  /**
   * get
   */
  public getRulesByCode(code: string) {
    const found = this.fields.find(e => e.code === code)
    if (found) {
      return Object.values(found.rules)
    } else {
      return []
    }
  }
}
