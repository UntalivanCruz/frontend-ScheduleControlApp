import { message } from 'antd';
import { useEffect, useState } from 'react';
import { AddScheduleForm, ScheduleTable } from '../components';
import { ApiError, ScheduleControllerService, ScheduleWithRelations,NewSchedule } from '../services';

export const Schedule = () => {
  const [data, setData] = useState<ScheduleWithRelations[]>([]);
  const [error, setError] = useState<ApiError | null>();

  useEffect(() => {
    ScheduleControllerService.scheduleControllerFind(
      '{"include":[{"relation":"workshift"}]}'
    )
      .then((originData) => setData(originData))
      .catch((error) => setError(error));
  }, []);

  const HandleDelete = (id: string) => {
    ScheduleControllerService.scheduleControllerUpdateById(id, { status: false })
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

  const HandleNew = (item:NewSchedule):void =>{
    ScheduleControllerService.scheduleControllerCreate(item)
    .then((newData) => {
      message.success('Create success!')
      setData([...data, newData]);
    })
    .catch((error) => {
      message.error('Create failed!');
      setError(error)
    });
  }

  const onUpdate = (id:string,item:NewSchedule)=>{
    ScheduleControllerService.scheduleControllerUpdateById(id, item)
    .then((newData:any) => {
      console.log(newData)
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
      <AddScheduleForm HandleNew={HandleNew} />
      <br />
      <ScheduleTable data={data} HandleDelete={HandleDelete} edit={onUpdate}/>
      {error}
    </>
  )
}
