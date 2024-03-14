import React from 'react';
import { useImmer } from 'use-immer';

const UserProfileWithImmer = () => {
  // Initialize userProfile state using useImmer
  const [userProfile, setUserProfile] = useImmer({
    name: 'John Doe',
    email: 'John@example.com',
    contactDetails: {
      phone: '345-567-1234',
      address: '1245 N 234 St, Seattle, WA',
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  // Function to update contact details
  const updateContactDetails = (newPhone, newAddress) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
    });
  };

  // Function to toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  const toggleNotifications = () => {
    setUserProfile(draft => {
      draft.preferences.notifications = !draft.preferences.notifications;
    });
  };

  return (
    <div>
      {/* Input fields for contact details */}
      <input
        type="text"
        placeholder="Phone"
        value={userProfile.contactDetails.phone}
        onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
      />
      <input
        type="text"
        placeholder="Address"
        value={userProfile.contactDetails.address}
        onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
      />
      
      {/* Toggle button for newsletter subscription */}
      <button onClick={toggleNewsletterSubscription}>
        {userProfile.preferences.newsletter ? 'Unsubscribe from Newsletter' : 'Subscribe to Newsletter'}
      </button>
      
      {/* Toggle button for notifications */}
      <button onClick={toggleNotifications}>
        {userProfile.preferences.notifications ? 'Turn Notifications Off' : ' Turn Notifications On'}
      </button>

      {/* Display current state of the user profile */}
      <div>
        <h2>User Profile</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Phone: {userProfile.contactDetails.phone}</p>
        <p>Address: {userProfile.contactDetails.address}</p>
        <p>Newsletter Subscription: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
        <p>Notifications: {userProfile.preferences.notifications ? 'Notifications On' : 'Notifications Off'}</p>
      </div>
    </div>
  );
};

export default UserProfileWithImmer;

