
export interface IData {
  total: number
  list: {
    id: string
    name: string
    remark: string
    status: string
    create_time: string
    update_time: string
    operator: string
  }[]
}


export type IParams = [
  { current: number; pageSize: number, filter?: any, sorter?: any, extra?: any },
  {
    name: string
    remark: string
    status: string
    create_time: string
  }
]

export interface IPagination {
  pageSize: number
  current: number
  total?: number
}
