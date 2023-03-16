import React, { forwardRef } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import styles from './index.module.css' 

const { RangePicker } = DatePicker;
const { Option } = Select;

const STATUS = [{
  value: 1,
  label: '开启'
},{
  value: 0,
  label: '关闭'
}]

const Search = ({
  form,
  reset,
  submit
}: {
  form: any
  reset: () => void,
  submit: () => void
}) => {
  return (
    <Form
      className={styles.wrapper}
      form={form}
      name="search"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Row key={1}>
        <Col span={8} key={1}>
          <Form.Item name="name" label="元素名称">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={8} key={2}>
          <Form.Item name="remark" label="元素备注">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={8} key={3}>
          <Form.Item name="status" label="状态">
            <Select showSearch optionFilterProp="children" placeholder="请输入">
              {
                STATUS.map(item => (
                  <Option key={item.value} value={item.value}>{item.label}</Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row key={2}>
        <Col span={8} key={2}>
          <Form.Item name="update_date" label="更新日期">
            <RangePicker showTime />
          </Form.Item>
        </Col>
        <Col offset={6} span={8} key={3} style={{ textAlign: 'right' }}>
          <Button
            style={{ margin: '0 8px' }}
            key={1}
            onClick={reset}
          >
            重置
          </Button>
          <Button
            type="primary"
            // htmlType="submit"
            key={2}
            onClick={submit}
          >
            查询
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default React.memo(Search);
