import React, { useState, useEffect, useRef } from 'react';

const NotificationBell = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownRef = useRef(null);

  // Load notifications from localStorage after component mounts
  useEffect(() => {
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      setNotificationList(JSON.parse(savedNotifications));
    } else {
      // Default notifications if no saved data
      setNotificationList(notifications.map(notification => ({ ...notification, read: false })));
    }
  }, [notifications]);

  // Update localStorage whenever notificationList changes
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notificationList));
  }, [notificationList]);

  // Close the dropdown when clicking outside
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

  const handleNotificationClick = (id) => {
    setNotificationList((prev) =>
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const unreadCount = notificationList.filter(notification => !notification.read).length;

  return (
    <div className="notification-wrapper" onClick={toggleDropdown}>
      <i className="fas fa-bell" style={{ fontSize: '1.25rem', lineHeight: '2' }}></i>
      {unreadCount > 0 && (
        <span className="notification-count">{unreadCount}</span>
      )}
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
