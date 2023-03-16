import React, { useEffect, useState } from 'react';
import {
  Card,
  Table,
  Button,
  Divider,
  Tooltip,
  Form
} from 'antd';
import { useAntdTable } from 'ahooks';
import * as service from './service'
import type { IData, IParams } from './interface'
import styles from './index.module.css'
import Search from './components/Search';


const Push: React.FC<any> = () => {
  const [form] = Form.useForm();
  const getTableData = ({ current, pageSize }: { current: number, pageSize: number }, formData: Object): Promise<IData> => {
    // return service.queryData({
    //   current,
    //   pageSize,
    //   ...formData
    // })
    return service.queryData()
  };
  const { tableProps, search } = useAntdTable<IData, IParams>(getTableData, {
    // defaultPageSize: 5,
    defaultParams: [{
      current: 1,
      pageSize: 10
    }, {
      name: '',
      remark: '',
      status: '',
      create_time: ''
    }],
    form,
  });

  console.log('tableProps', tableProps)

  const { type, changeType, submit, reset } = search;

  const columns = [
    {
      width: 100,
      title: '元素名称',
      dataIndex: 'name',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (text: string) => (
        text ?
          <Tooltip placement="topLeft" title={text}>
            <span className={styles.noteEllipsis}>{text}</span>
          </Tooltip> :
          '-'
      ),
    },
    {
      width: 100,
      title: '状态',
      dataIndex: 'status',
    },

    {
      width: 200,
      title: '修改时间',
      dataIndex: 'update_time',
    },
    {
      title: '修改人',
      dataIndex: 'opt_name',
      width: 80,
    },
    {
      width: 200,
      title: '创建时间',
      dataIndex: 'create_time',
    },
    {
      fixed: 'right',
      width: 200,
      title: '操作',
      render: (record: IData) => (
        <>
          <a onClick={() => { console.log(record) }}>详情</a>
          <Divider type="vertical" />
          <a onClick={() => { console.log(record) }}>修改</a>
          <Divider type="vertical" />
        </>
      ),
    },
  ];

  return (
    <div>
      <Search
        form={form}
        reset={reset}
        submit={submit}
      />
      <Card bordered={false} style={{ marginTop: 20 }}>
        <div className="topbar">
          <div className="actions">
            <Button type="primary" onClick={() => { }}>
              创建元素
            </Button>
          </div>
        </div>
        <Table
          bordered
          columns={columns}
          scroll={{
            x: 'max-content',
            y: 'max-content',
          }}
          rowKey="id"
          style={{ marginTop: 30 }}
          // pagination={{
          //   showSizeChanger: true,
          //   showQuickJumper: true,
          //   ...pagination,
          //   showTotal: (total) => `共${total}条`,
          // }}
          {...tableProps}
        />
      </Card>
    </div>
  )
}

export default Push
