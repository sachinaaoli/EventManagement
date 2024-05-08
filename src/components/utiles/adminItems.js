import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";

const getItem=(label, key, icon, children, type)=> {
  
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
export const adminItems = [
    getItem('Dashboard', '/admin/dashboard', <PieChartOutlined/>),
    getItem('User List', '/admin/userlist', <DesktopOutlined/>),
    getItem('Profile', '/admin/profile', <ContainerOutlined/>),
    getItem('Hot Product', '/admin/hotproduct', <MailOutlined/>),
    getItem('Navigation Two', '/admin/appstore', <AppstoreOutlined/>), 
  ];
  export default adminItems