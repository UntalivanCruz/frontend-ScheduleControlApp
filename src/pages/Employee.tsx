import { message } from "antd";
import { useEffect, useState } from "react";
import { AddEmployeeForm, EmployeeTable } from "../components"
import { ApiError, EmployeeControllerService, EmployeeWithRelations,NewEmployee } from "../services";

export const Employee = () => {
  const [data, setData] = useState<EmployeeWithRelations[]>([]);
  const [error, setError] = useState<ApiError | null>();

  useEffect(() => {
    EmployeeControllerService.employeeControllerFind(
      '{"include":[{"relation":"EmployeePositions"}]}'
    )
      .then((originData) => setData(originData))
      .catch((error) => setError(error));
  }, []);

  const HandleDelete = (id: string) => {
    EmployeeControllerService.employeeControllerUpdateById(id, { status: false })
      .then(() => {
        message.success('Delete success!');
        setData(data.map(x => {
          if (x.id === id) {
            return { ...x, status: false }
          } else {
            return x
          }
        }))
      })
      .catch((error) => {
        message.error('Delete failed!');
        setError(error)
      });
  }

  const HandleNew = (item:NewEmployee):void =>{
    EmployeeControllerService.employeeControllerCreate(item)
    .then((newData) => {
      message.success('Create success!')
      setData([...data, newData]);
    })
    .catch((error) => {
      message.error('Create failed!');
      setError(error)
    });
  }

  const onUpdate = (id:string,item:NewEmployee)=>{
    EmployeeControllerService.employeeControllerUpdateById(id, item)
    .then((newData:any) => {
      message.success('Update success!')
      setData(data.map((row)=>row.id===id ? newData: row))
    })
    .catch((error) => {
      message.error('Update failed!');
      setError(error)
    });
  }
  return (
    <>
      <AddEmployeeForm HandleNew={HandleNew}/>
      <EmployeeTable data={data}  HandleDelete={HandleDelete}  edit={onUpdate}/>
      {error}
    </>
  )
}