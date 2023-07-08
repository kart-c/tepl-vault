'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@lib/routes';

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(ROUTES.CHECKWEIGHER.STANDARD);
    } else {
      router.replace(ROUTES.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <main className="flex items-center justify-center main-height">
      <div className="w-12 h-12 border-r-2 rounded-full border-r-gray-700 animate-spin" />
    </main>
  );
}
