// import { Button, Checkbox, Form, Input } from 'antd';
// import React from 'react';

// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// const Login = () => {
//   return (
//     <div style={{ 
    
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh', // Adjust this as needed
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//           backgroundColor: '#fef3c7', // Adjust opacity as needed
//           padding: '20px', // Add padding for better visibility
//           borderRadius: '10px', // Add border radius for rounded corners
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password/>
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button className='bg-black text-white' type="primary" htmlType="submit">
//             Submit
//           </Button> <br/>
//          <a style={{ color:"Black", position:"absolute", left:"90px"}}href="SignUp">OR SignUp!</a>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Login;

import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined, HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { userLogin } from "../../services/LoginAction";
import {useSelector} from "react-redux";
//import { data } from "autoprefixer";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { Card } from "antd";


// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

const Login = () => {
  const dispatch=useDispatch();
  const onFinish =async (values) => {
    console.log("val:", values)
    await userLogin(values)(dispatch).unwrap();
    navigate("/");

  };
  const navigate=useNavigate();

  const [isModalOpen,setIsModalOpen] =useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data=useSelector((state)=>state.authinfo)
  
  
  useEffect(()=>{
    if(data.userToken){
         navigate("/");
    }
  })
  return (
    <div className=" flex justify-center py-5">
    <Card style={{ 
        width: '540px',
        minHeight: '80px',
        fontFamily: 'Varela Round, sans-serif',
        border: 'none',
       backgroundColor:'#fef3c7' }} >
      <h1 className= "font-madimi d pb-2 text-center font-bold text-base mb-3"> <ExclamationCircleOutlined /> Login</h1>
      <div className=" flex">
        <div>
          <Form
            onFinish={onFinish} layout="vertical">
            <section className=" text-left">
              <Form.Item label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]} className=" my-2">
                
                <Input className=" w-64" />
              </Form.Item>

              <Form.Item label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]} className=" my-2">
                
                <Input.Password className=" w-64 " />
              </Form.Item>
            </section>

            <section className=" text-left ">
              <Form.Item className=" my-2">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <section className="flex gap-2">
                <Form.Item>
                  <Button className=" bg-black text-white border-none " htmlType="submit"
                  loading={data.loading}>
                    Submit
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button className=" bg-black text-white border-none " htmlType="submit">
                    <Link to="/auth/signup"> <p className=" font-varela">SignUp</p></Link>
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Link to="/"> <p> <HomeOutlined /></p> </Link>
                </Form.Item>
              </section>
              <section>
                <div className='cursor-pointer underline text-black' onClick={showModal}>
                 ForgetPassword   </div>
              </section>
            </section>
          </Form>
        </div>

        <Modal title="Get a code"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      
    </Modal>
      </div>
    </Card>

  </div>
  );
};

export default Login;