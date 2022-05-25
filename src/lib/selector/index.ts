

import $  from 'jquery'

class FormItem {
  dom: JQuery
  constructor(args?: Partial<FormItem>){
    if (args) {
      Object.assign(this, args)
    }
  }
  setValue (dom: JQuery, value: any) {
    dom.val(value)
  }
  getValue (dom: JQuery) {
    return dom.val()
  }
}

export const getInputItem = () => {
  return new FormItem({
    dom: $('input[type="text"]')
  })
}

export const getPasswordItem = () => {
  return  new FormItem({
    dom: $('input[type="password"]')
  })
}

export const getRadioItem = () => {
  return  new FormItem({
    dom: $('input[type="radio"]')
  })
}

export const getCheckboxItem = () => {
  return  new FormItem({
    dom: $('input[type="checkbox"]')
  })
}

export const getNumberItem = () => {
  return  new FormItem({
    dom: $('input[type="number"]')
  })
}

const getAllFormItem = () => {
  return [getInputItem(),getPasswordItem(),getRadioItem(),getCheckboxItem(),getNumberItem()]
}

export const getAllFormItemValues = () => {
  return getAllFormItem().reduce((last, current) => {
    const valuesMap = {
    }
    current.dom.each((i, e) => {
      valuesMap[$(e).attr('name')] = current.getValue($(e))
    })
    return Object.assign(last, valuesMap)
  }, {})
}

export const setAllFormItem = (valuesMap) => {
  getAllFormItem().forEach((item) => {
    item.dom.each((i, e) => {
      item.setValue($(e), valuesMap[$(e).attr('name')])
    })
  })
}