
import { getAllFormItemValues } from '../selector/index'

export const formRecord = () => {
    const values = getAllFormItemValues()
    console.dir(values)
}