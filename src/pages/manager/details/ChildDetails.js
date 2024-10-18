import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChildDetails = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);

  useEffect(() => {
    setChild({
      id: 6,
      groupId: 1,
      firstName: 'Updated Milisav',
      lastName: 'Kurosavo',
      pin: '12345578912',
      imageUrl: 'url...slike',
      birthDate: '2000-12-24',
      createdAt: '2024-08-09T09:17:02.747+00:00',
      updatedAt: '2024-08-09T10:57:20.843+00:00',
      group: {
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
      },
      parents: [
        {
          id: 8,
          firstName: 'Jana',
          lastName: 'Pranjic',
          pin: '12345678912',
          role: 'PARENT',
          address: 'Ulica Vjekoslava Majera 20',
          postalCode: '31000',
          streetName: 'Ulica Vjekoslava Majera',
          houseNumber: '20',
          phoneNumber: '0999999999',
          customerId: null,
          email: 'jana@pranjic.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: null,
          groupId: null,
        },
      ],
    });
  }, [id]);

  return (
    <div className='child-details'>
      <h1>Child details</h1>
      <pre>{JSON.stringify(child, null, 2)}</pre>
    </div>
  );
};

export default ChildDetails;
