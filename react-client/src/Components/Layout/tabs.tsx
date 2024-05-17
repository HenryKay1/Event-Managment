// src/components/Tabs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Tabs: React.FC = () => {
  const location = useLocation();
  const isLoggedIn = true; // Hardcoded boolean variable
  const username = "hkombem@gmail.com"; // Hardcoded username

  return (
    <nav style={styles.tabsContainer}>
      <Link to="/" style={{ ...styles.tab, ...(location.pathname === '/' && styles.activeTab) }}>Home</Link>
      <Link to="/events" style={{ ...styles.tab, ...(location.pathname === '/events' && styles.activeTab) }}>Events</Link>
      <Link to="/about" style={{ ...styles.tab, ...(location.pathname === '/about' && styles.activeTab) }}>About</Link>
      <Link to="/contact" style={{ ...styles.tab, ...(location.pathname === '/contact' && styles.activeTab) }}>Contact</Link>
      {isLoggedIn ? (
        <Dropdown>
          <Dropdown.Toggle style={{ ...styles.tab, ...styles.dropdownToggle }} id="dropdown-basic">
            <span style={styles.username}>{username}</span>
            <img src="https://via.placeholder.com/30" alt="Profile" style={styles.profileImage} />

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/edit-profile">Edit User Profile</Dropdown.Item>
            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      ) : (
        <Link to="/login" style={{ ...styles.tab, ...(location.pathname === '/login' && styles.activeTab) }}>Register/Login</Link>
      )}
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  tab: {
    backgroundColor: '#777',
    color: '#fff',
    padding: '10px 20px',
    margin: '0 5px',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '4px',
  },
  activeTab: {
    backgroundColor: '#555',
  },
  dropdownToggle: {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
  username: {
    marginRight: '10px',
  },
  profileImage: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
};

export default Tabs;
