
export async function queryData() {
  // return request('/api/queryData', {
  //   method: 'POST',
  //   data: params,
  // });
  return {
    total: 3,
    list: [
      {
        id: '1',
        name: '元素1',
        status: '启用',
        remark: '我是备注我是备注我是备注我是备注',
        create_time: '2023-01-01 22:10:10',
        update_time: '2023-01-02 22:10:10',
        operator: '张三'
      },
      {
        id: '2',
        name: '元素2',
        status: '启用',
        remark: '我是备注我是备注我是备注我是备注',
        create_time: '2023-01-01 22:10:10',
        update_time: '2023-01-02 22:10:10',
        operator: '张三'
      },
      {
        id: '3',
        name: '元素3',
        status: '启用',
        remark: '我是备注我是备注我是备注我是备注',
        create_time: '2023-01-01 22:10:10',
        update_time: '2023-01-02 22:10:10',
        operator: '张三'
      },
      
    ]
  }
}