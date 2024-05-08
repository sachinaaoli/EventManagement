import React from 'react'
import { Table } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../services/allProducts';
import DynamicHeadd from './DynamicHeadd';

const columns = [
  {
    title: 'Name',
    dataIndex: ['name','firstname'],
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const UserList = () => {
  const dispatch=useDispatch();
  const {users}=useSelector((state)=>state.alluser);
  console.log("user",users);

  React.useEffect(() => {
    
    dispatch (fetchUser());
    
  }, [dispatch])
  return (
    <div>
      <DynamicHeadd name="Userlist"/>
      
      <Table dataSource={users.data} columns={columns} className=' max-w-[600px]'
        rowKey={users=>users.id}
      />;
    </div>
  )
}

export default UserList;
