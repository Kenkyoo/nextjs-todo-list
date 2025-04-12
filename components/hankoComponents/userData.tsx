"use client";

import { useUserData } from "@/hooks/useUserData";

const UserData = () => {
  const {
    id,
    email,
    loading: userDataLoading,
    error: userDataError,
  } = useUserData();

  if (userDataLoading) {
    return <div>Loading...</div>;
  } else if (userDataError) {
    return <div>Error: {userDataError}</div>;
  }
  console.log(id);
  return (
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{email}</a>
    </div>
  );
};

export default UserData;
