import React from 'react';
import Tabs from './tabs';
import logo from '../../assets/logo1.png'; 

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.tabContainer}>
      <Tabs />
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flex: '1',
  },
  tabContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex:5
  },
  logo: {
    width: '120px',
    height: '120px',
    marginRight: '10px',
  },
  title: {
    margin: 0,
  },
};

export default Header;
