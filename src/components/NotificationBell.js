import React, { useState, useEffect, useRef } from 'react';

const NotificationBell = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Load notifications and seen notification IDs from localStorage.
  useEffect(() => {
    const savedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const savedSeenNotifications = JSON.parse(localStorage.getItem('seenNotifications')) || [];

    // Initialize notificationList with updated notifications.
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: savedSeenNotifications.includes(notification.id), // Check if notification was seen
    }));

    // Update state and local storage.
    setNotificationList(updatedNotifications);
  }, [notifications]);

  // Mark a notification as read and update the seen notifications list.
  const handleNotificationClick = (id) => {
    // Mark the clicked notification as read.
    setNotificationList((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );

    // Update seen notifications in local storage.
    const updatedSeenNotifications = [
      ...(JSON.parse(localStorage.getItem('seenNotifications')) || []),
      id,
    ];

    localStorage.setItem('seenNotifications', JSON.stringify(updatedSeenNotifications));
  };

  // Count the number of unread notifications.
  const unreadCount = notificationList.filter((notification) => !notification.read).length;

  // Close the dropdown when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="notification-wrapper" onClick={toggleDropdown}>
      <i className="fas fa-bell" style={{ fontSize: '1.25rem', lineHeight: '2' }}></i>
      {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
      {isOpen && (
        <div className="notification-dropdown" ref={dropdownRef}>
          {notificationList.map((notification) => (
            <a
              key={notification.id}
              href={notification.url}
              className="notification-item"
              onClick={() => handleNotificationClick(notification.id)}
            >
              {notification.message}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
