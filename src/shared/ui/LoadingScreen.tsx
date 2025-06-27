import { Spin } from 'antd';

const LoadingScreen = () => {
  return <Spin size="large" tip="Loading..." fullscreen={true} />;
};

export default LoadingScreen;
