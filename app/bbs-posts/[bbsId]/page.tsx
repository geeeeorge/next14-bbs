import { BBSData } from '@/components/types/types';
import Link from 'next/link';
import React from 'react';

async function getBBSData(id: number) {
  // 掲示板の場合はSSR(Server Side Rendering)が良さそう
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: 'no-store',
    // next: {revalidate: 3600},
  });

  const bbsData: BBSData = await response.json();

  return bbsData;
}

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsData = await getBBSData(params.bbsId);
  const { username, title, content, createdAt } = bbsData;
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link
        href={'/'}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;
