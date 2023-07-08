'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@lib/routes';

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
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

  return children;
}

export default AuthenticatedLayout;
