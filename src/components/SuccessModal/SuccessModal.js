import React from 'react';
import PropTypes from 'prop-types';
import {Button, List, Avatar} from 'antd';
import Modal from 'antd/lib/modal/Modal';

const SuccessModal = ({isOpen, onOk, data}) => {
  return (
    <Modal
      title="Users"
      visible={isOpen}
      onOk={onOk}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          OK
        </Button>,
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(user) => {
          const fullName = `${user.first_name} ${user.last_name}`;
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={fullName}
                description={user.email}
              />
            </List.Item>
          );
        }}
      />
      ,
    </Modal>
  );
};

SuccessModal.propTypes = {
  isOpen: PropTypes.bool,
  onOk: PropTypes.func,
  data: PropTypes.array,
};

export default SuccessModal;
