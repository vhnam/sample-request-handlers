import React, {useCallback} from 'react';
import {Button, Spin, Modal} from 'antd';
import {useDispatch, useSelector} from 'react-redux';

import {getUsers} from '../../redux/actions/users';
import {selectUsers} from '../../redux/selectors/users';

import useToggle from '../../hooks/useToggle';

import SuccessModal from '../../components/SuccessModal';

import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const successModalToggle = useToggle();

  const usersSelector = useSelector(selectUsers());

  const displayError = useCallback(() => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }, []);

  const onClick = useCallback(() => {
    dispatch(getUsers())
      .then(() => {
        successModalToggle.setActive();
      })
      .catch(() => {
        displayError();
      });
  }, [dispatch, successModalToggle, displayError]);

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={onClick}>
        {usersSelector.isLoading ? <Spin /> : 'Click me!'}
      </Button>

      <SuccessModal
        isOpen={successModalToggle.active}
        onOk={() => successModalToggle.setInActive()}
        data={usersSelector.data}
      />
    </div>
  );
};

export default Home;
