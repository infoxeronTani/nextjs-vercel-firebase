import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Profile() {
  const { data } = useSWR('/api/user-details', fetcher, { suspense: true });
  return <div>Hello, {JSON.stringify(data)}!</div>;
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
