import { Timeline } from 'antd';
import React from 'react';

const QualificationsTab = () => {
  return (
    <div>
      <Timeline
        items={[
          {
            children: 'Osnovna škola Mladost, 2007-2015',
          },
          {
            children: 'III. gimnazija Osijek, 2015-2019',
          },
          {
            children:
              'Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek, 2019-2022\nStečeno zvanje: univ.bacc.ing.comp.',
          },
          {
            children:
              'Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek, 2022-2024\nStečeno zvanje: mag.ing.comp.',
          },
        ]}
      />
    </div>
  );
};

export default QualificationsTab;
