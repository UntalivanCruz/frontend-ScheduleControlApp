import { FileAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'

export const AddEmployeeForm = ({ HandleNew}: any) => {

  return (
    <>
    <Button
      type="primary"
    >
      <FileAddOutlined />Create new
    </Button>
  </>
  )
}
