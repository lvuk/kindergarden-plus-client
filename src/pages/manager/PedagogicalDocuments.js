import React, { useContext } from 'react';
import { LayoutContext } from '../context/LayoutContext';
import { Modal } from 'antd';

const PedagogicalDocuments = () => {
  const { isModalOpen, setIsModalOpen, activeTab } = useContext(LayoutContext);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {activeTab === 'Children' && (
        <Modal
          open={isModalOpen}
          title='Add new child'
          onCancel={handleCancel}
          footer={null}
        >
          <p>CHILDREN</p>
        </Modal>
      )}
    </div>
  );
};

export default PedagogicalDocuments;
