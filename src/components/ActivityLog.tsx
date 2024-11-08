import React, { useEffect, useState } from 'react';

const mockActivityData = [
  { id: 1, activity: 'Generated tree for Sample Input 1' },
  { id: 2, activity: 'Viewed ASCII tree' },
  { id: 3, activity: 'Cleared input' },
];

const ActivityLog: React.FC = () => {
  const [activities, setActivities] = useState(mockActivityData);

  useEffect(() => {
    setActivities(mockActivityData);
  }, []);

  return (
    <div className="p-4 bg-black text-white border border-gray-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
      <ul className="list-disc pl-5">
        {activities.map((activity) => (
          <li key={activity.id} className="text-gray-300">
            {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
