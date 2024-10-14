import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import NotificationBell from '../../components/NotificationBell';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NavbarItemWrapper(props) {
  if (props.type === 'custom-NotificationBell') {
    return <NotificationBell />; // Render the NotificationBell component.
  }
  return <NavbarItem {...props} />; // Fall back to the original NavbarItem.
}
