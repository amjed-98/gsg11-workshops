import React from 'react';

// sumArray takes an array of two numbers and returns the sum of the numbers
// edit the parameters of the function to make this work
const sumArray = ([first, second]) => first + second;

// getAttribution takes a post object { title: string, author: string, timestamp: string }
// edit the parameters to make this work
const getAttribution = ({ title, author, timestamp }) =>
  `${title} by ${author} @ ${timestamp}`;

// calculateTotal receives a bill object { subtotal: number, tax: number, tip: number || undefined }
// the tip might be undefined, in which case it should default to 10%
const calculateTotal = ({ subtotal, tax, tip = 0.1 }) => subtotal * (1 + tax) * (1 + tip);

// listVenues takes a show object { band: "Bullet For My Valentine", venues: ["O2 Academy", "Alexandra Palace", "Download"] }
const listVenues = ({ band, venues: { 0: venue1, 1: venue2, 2: venue3 } }) =>
  `${band} are playing ${venue1}, ${venue2}, ${venue3}.`;

// ProfileCard receives a data object that contains a user { data: { user: { avatarSrc: string, username: string, githubUrl: string  } } }
const ProfileCard = ({
  data: {
    user: { avatarSrc, username, githubUrl },
  },
}) => (
  <div>
    <img src={avatarSrc} />
    <h3>{username}</h3>
    <a href={githubUrl}>Github profile</a>
  </div>
);

// ToggleCounter renders the counter if it is passed an `isOpen` prop
// This prop should default to `true`
// It only needs this one prop itself, and it needs to pass everything else as restOfTheProps
// it's given straight down to Counter

const ToggleCounter = ({ isOpen = true, ...restOfTheProps }) => {
  return isOpen ? <button>Count: {restOfTheProps.step}</button> : <div>I'm closed</div>;
};

export { sumArray, getAttribution, calculateTotal, listVenues, ProfileCard, ToggleCounter };
