import React from 'react';
import {Layout} from 'antd';

import styles from './Header.module.css';

const CustomHeader = () => {
  const {Header} = Layout;

  return (
    <Header>
      <div className={styles.brandName}>Sample</div>
    </Header>
  );
};

export default CustomHeader;
