import { EditOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'

export const EditEmployeeForm = ({ HandleEdit, data }: any) => {

  return (
    <><Typography.Link  style={{ marginRight: 8 }}>
      <EditOutlined /> Edit
    </Typography.Link>
    </>
  )
}
