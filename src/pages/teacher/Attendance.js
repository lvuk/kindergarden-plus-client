import { Button, Select, Table } from 'antd';
import React, { useState } from 'react';
import '../../stylesheets/teacher/attendance.scss';
const { Option } = Select;

const Attendance = () => {
  const [record, setRecord] = useState(null);
  const [childAttendance, setChildAttendance] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      isPresent: false,
      category: 'absent',
    },
  ]);
  const [isHidden, setIsHidden] = useState(true);

  const handleViewClick = (record) => {
    setRecord(record);
    setIsHidden(false);
  };

  const handleSaveAttendance = () => {
    console.log(childAttendance);
  };

  const data = [
    {
      id: 1,
      date: '17-09-2024',
    },
    {
      id: 2,
      date: '16-09-2024',
    },
    {
      id: 3,
      date: '15-09-2024',
    },
    {
      id: 4,
      date: '14-09-2024',
    },
    {
      id: 5,
      date: '13-09-2024',
    },
    {
      id: 6,
      date: '12-09-2024',
    },
    {
      id: 7,
      date: '11-09-2024',
    },
    {
      id: 8,
      date: '10-09-2024',
    },
    {
      id: 9,
      date: '9-09-2024',
    },
    {
      id: 10,
      date: '8-09-2024',
    },
    {
      id: 11,
      date: '7-09-2024',
    },
  ];

  const attendancesColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      render: (record) => (
        <Button onClick={() => handleViewClick(record)} className='btn'>
          View
        </Button>
      ),
    },
  ];

  const handleTagChange = (value, record) => {
    const newData = childAttendance.map((item) => {
      if (item.id === record.id) {
        return { ...item, category: value }; // Update category based on selected value
      }
      return item;
    });
    setChildAttendance(newData); // Update table with the new tag
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category, record) => (
        <Select
          value={category}
          onChange={(value) => handleTagChange(value, record)}
          style={{ width: 100 }}
          disabled={!record.isPresent} // Disable dropdown when not present
        >
          {record.isPresent ? (
            <>
              <Option value='long'>Long</Option>
              <Option value='short'>Short</Option>
            </>
          ) : (
            <Option value='absent'>Absent</Option>
          )}
        </Select>
      ),
    },
  ];

  const handleSelectionChange = (selectedRowKeys) => {
    const newData = childAttendance.map((item) => {
      if (selectedRowKeys.includes(item.id)) {
        // If checkbox is checked, allow user to select 'long' or 'short'
        return {
          ...item,
          isPresent: true,
          category:
            item.category === 'absent' || item.category === 'sick'
              ? 'long'
              : item.category,
        };
      } else {
        // If checkbox is unchecked, automatically set to 'absent' or 'sick'
        return {
          ...item,
          isPresent: false,
          category:
            item.category === 'long' || item.category === 'short'
              ? 'absent'
              : item.category,
        };
      }
    });
    setChildAttendance(newData);
  };

  const rowSelection = {
    selectedRowKeys: childAttendance
      .filter((item) => item.isPresent)
      .map((item) => item.id), // Select rows where isPresent is true
    onChange: handleSelectionChange,
    columnTitle: false, // This removes the header checkbox
  };

  return (
    <div className='attendance'>
      <Table
        dataSource={data}
        columns={attendancesColumns}
        className='table'
        size='small'
        pagination={{
          pageSize: 5,
        }}
      />

      <Table
        title={() => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2>
              {record ? `Attendance for ${record.date}` : 'Attendance Details'}
            </h2>
            <Button
              type='primary'
              onClick={handleSaveAttendance}
              className='btn'
            >
              Save
            </Button>
          </div>
        )} // Updated title to include a button
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={childAttendance}
        columns={columns}
        className={`table ${isHidden ? 'hidden' : ''}`}
        rowKey={'id'}
        size='small'
      />
    </div>
  );
};

export default Attendance;
