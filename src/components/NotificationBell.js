import React, { useState, useEffect, useRef } from 'react';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize notifications state from local storage or set default values.
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem('notifications');
    return savedNotifications ? JSON.parse(savedNotifications) : [
      { id: 1, message: 'New update available!', url: '/about', read: false },
      { id: 2, message: 'Scheduled maintenance at 3:00 PM', url: 'https://search.brave.com', read: false },
    ];
  });

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownRef = useRef(null); // Create a ref for the dropdown.

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
  }, [dropdownRef]);

  // Handle reading a notification.
  const handleNotificationClick = (id) => {
    setNotifications((prev) => {
      const updatedNotifications = prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      );

      // Save updated notifications to local storage.
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      return updatedNotifications;
    });
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="notification-wrapper" onClick={toggleDropdown}>
      <i className="fas fa-bell" style={{ fontSize: '1.25rem' }}></i>
      {unreadCount > 0 && (
        <span className="notification-count">{unreadCount}</span>
      )}
      {isOpen && (
        <div className="notification-dropdown" ref={dropdownRef}>
          {notifications.map((notification) => (
            <a
              key={notification.id}
              href={notification.url}
              className="notification-item"
              onClick={() => handleNotificationClick(notification.id)} // Mark as read on click.
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
  