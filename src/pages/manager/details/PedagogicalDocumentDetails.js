import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PedagogicalDocumentDetails = () => {
  const { id } = useParams();
  const [pedagogicalDocument, setPedagogicalDocument] = useState(null);

  useEffect(() => {
    setPedagogicalDocument({
      id: 3,
      kindergardenId: 1,
      managerId: 13,
      group: '4. i 5. godina zivota',
      year: '2024',
      quarter: 'q1',
      conditionsForCompletion: null,
      activitiesForCompletion: null,
      cooperationExpertsParents: null,
      jointActivities: null,
      observations: null,
      conditionsEvaluation: null,
      activitiesEvaluation: null,
      dates: null,
      notes: null,
      createdAt: '2024-08-27T10:58:05.464+00:00',
      updatedAt: '2024-08-27T10:58:05.464+00:00',
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
      ],
      weeklyPlan: null,
      developmentTasks: [
        {
          id: 1,
          pedagogicalDocumentId: 3,
          forGroup: 'UPDATED',
          forIndividual: null,
          developmentField: null,
          createdAt: '2024-08-28T07:54:15.612+00:00',
          updatedAt: '2024-08-29T07:58:52.794+00:00',
        },
      ],
    });
  }, [id]);

  return (
    <div className='pedagogical-document-detail'>
      <h1>Pedagogical document details</h1>
      <pre>{JSON.stringify(pedagogicalDocument, null, 2)}</pre>
    </div>
  );
};

export default PedagogicalDocumentDetails;
