import BBSCardList from '@/components/BBSCardList';
import { BBSData } from '../components/types/types';

async function getAllBBSData() {
  // 掲示板の場合はSSR(Server Side Rendering)が良さそう
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
    // next: {revalidate: 3600},
  });

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getAllBBSData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
