'use client';
import React from 'react';

interface Item {
  student: string;
  assignment: string;
  status: string;
  score?: number;
}

export function AssignmentDashboard() {
  const [items, setItems] = React.useState<Item[]>([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/assignments')
      .then(r => r.json())
      .then(setItems);
  }, []);
  return (
    <ul>
      {items.map((i, idx) => (
        <li key={idx} className="border-b py-1">
          {i.student}: {i.assignment} - {i.status}
        </li>
      ))}
    </ul>
  );
}
