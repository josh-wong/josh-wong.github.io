import React, { useState, useEffect, useRef } from 'react';

const NotificationBell = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const dropdownRef = useRef(null);
  const wrapperRef = useRef(null);

  // Toggle the dropdown visibility and prevent the event from bubbling up to the outside click handler.
  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevents outside click handler from immediately reopening dropdown.
    setIsOpen((prev) => !prev);
  };

  // Load notifications from localStorage and update if new notifications appear.
  useEffect(() => {
    // Retrieve seen notifications from localStorage.
    const seenNotifications = JSON.parse(localStorage.getItem('seenNotifications')) || [];

    // Map the notifications to add read status based on seenNotifications.
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: seenNotifications.includes(notification.id),
    }));

    // Set the updated notifications in state.
    setNotificationList(updatedNotifications);
  }, [notifications]); // Dependency ensures rerun if notifications change.

  // Save changes to localStorage when notifications are clicked.
  const handleNotificationClick = (id) => {
    const updatedList = notificationList.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );

    // Save the seen notifications in localStorage.
    const seenNotifications = updatedList
      .filter(notification => notification.read)
      .map(notification => notification.id);

    localStorage.setItem('seenNotifications', JSON.stringify(seenNotifications));
    setNotificationList(updatedList); // Update the notification list with read status.
  };

  // Count unread notifications.
  const unreadCount = notificationList.filter(notification => !notification.read).length;

  // Close the dropdown when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notification-wrapper" onClick={toggleDropdown} ref={wrapperRef}>
      <i className="fas fa-bell" style={{ fontSize: '1.25rem', lineHeight: '2' }}></i>
      {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
      {isOpen && (
        <div className="notification-dropdown" ref={dropdownRef}>
          {notificationList.map(notification => (
            <a
              key={notification.id}
              href={notification.url}
              className="notification-item"
              onClick={() => handleNotificationClick(notification.id)}
              target={notification.url.startsWith('http') ? '_blank' : '_self'} // Open in a new tab if external.
              rel={notification.url.startsWith('http') ? 'noopener noreferrer' : undefined}
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
