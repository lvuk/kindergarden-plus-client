import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    setGroup({
      id: 1,
      name: 'UPDATED2: zerlena grupa',
      kindergardenId: 1,
      createdAt: '2024-08-08T10:30:51.828+00:00',
      updatedAt: '2024-08-27T11:18:22.808+00:00',
      kindergarden: {
        id: 1,
        name: 'Updated DV Osijek',
        address: 'Trg Mladenaca 5',
        createdAt: '2024-08-08T09:33:42.127+00:00',
        updatedAt: '2024-08-08T09:57:28.347+00:00',
        postalCode: '31000',
        city: 'Osijek',
        country: 'Croatia',
        phoneNumber: '573-312',
        email: 'info@dvosijek.com',
      },
      teachers: [
        {
          id: 11,
          firstName: 'Teta',
          lastName: 'Jaca',
          pin: '78184728172',
          role: 'TEACHER',
          address: 'Sjenjak 101',
          postalCode: '31000',
          streetName: 'Sjenjak',
          houseNumber: '101',
          phoneNumber: '949499494949',
          customerId: null,
          email: 'jaca@gmail.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
        {
          id: 12,
          firstName: 'Teta',
          lastName: 'Jana',
          pin: '12444123411',
          role: 'TEACHER',
          address: 'Ulica vjekoslava Majera 20',
          postalCode: '31000',
          streetName: 'Ulica vjekoslava majera',
          houseNumber: '20',
          phoneNumber: '44441114411',
          customerId: null,
          email: 'jp@g.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
        {
          id: 13,
          firstName: 'Gazda',
          lastName: 'gazda',
          pin: '11232231231',
          role: 'MANAGER',
          address: 'SJENJAK1',
          postalCode: '31111',
          streetName: 'SJENJAK',
          houseNumber: '111',
          phoneNumber: '33311132',
          customerId: null,
          email: 'mg@g.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
      ],
    });
  }, [id]);

  return (
    <div className='group-details'>
      <h1>Group details</h1>
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </div>
  );
};

export default GroupDetails;
