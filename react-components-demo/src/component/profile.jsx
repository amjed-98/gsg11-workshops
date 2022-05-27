import React, { Suspense, useState, useEffect } from 'react';

const profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch('https://randomuser.me/api');
      const {
        results: [profile],
      } = await res.json();
      console.log("🚀 ~ file: profile.jsx ~ line 11 ~ profile", profile)
      setProfile(profile);
    })();
  }, []);

  return (
    <div>
      <h1>{profile.gender}</h1>
    </div>
  );
};

export default profile;
