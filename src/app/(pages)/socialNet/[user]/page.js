'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import UserProfile from '@/app/components/userProfile';

const UserProfilePage = () => {
  const { user } = useParams();
  return (
    <div>
      holaa {user}
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
