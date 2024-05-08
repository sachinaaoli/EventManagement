import { Card } from "antd";
import React from "react";
import { Button, Form, Input } from 'antd';
import { ContactsOutlined,  HomeOutlined,  } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="flex justify-center py-9">
      <Card className="w-[570px] min-h-96 bg-orange-200" style={{ backgroundColor: "#fefce8" }}>
        <h1 className="font-madimi d pb-2 text-center font-bold text-base mb-3">
        <ContactsOutlined style={{ fontSize: "25px", }} /> Contact Us
        </h1>
        <div>
          <Form onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-12 gap-x-2">
              <div className="col-span-12">
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]} className="my-2">
                  <Input className="w-64" />
                </Form.Item>
              </div>
              <div className="col-span-12">
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]} className="my-2">
                  <Input className="w-64" />
                </Form.Item>
              </div>
              <div className="col-span-12">
                <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please input your message!' }]} className="my-2">
                  <Input.TextArea rows={4} className="w-64" />
                </Form.Item>
              </div>
            </div>
            <section className="flex text-left gap-4">
              <Form.Item>
                <Button className="bg-black text-white border-none flex justify-center" htmlType="submit">
                  <p className="font-varela">Submit</p>
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/">
                  <p><HomeOutlined /></p>
                </Link>
              </Form.Item>
            </section>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default Contact;
