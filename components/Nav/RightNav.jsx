import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NavLink from './NavLink';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    text-align: center;
    font-size: 20px;
    padding-right: 5px;
  }

  @media (max-width: 768px) {
    font-weight: bold;
    z-index: 10;
    margin-top: 0;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3rem;

    li {
      color: #fff;
    }

    .home {
      padding-bottom: 60px;
    }

    .contact {
      padding-top: 60px;
      padding-bottom: 10px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="home">
        <Link open={open} onClick={() => setOpen(!open)} href="/">
          UMetra
        </Link>
      </li>
      <li>
        <Link href="/stations">Stanice</Link>
      </li>
      <li className="hledej">
        <Link href="/search">Vyhledat</Link>
      </li>
      <li>
        <Link href="/about">O projektu</Link>
      </li>
      <li>
        <Link href="/sources">Zdroje</Link>
      </li>
      <li className="contact">
        <Link href="/contact">Kontakt</Link>
      </li>
    </Ul>
  );
};

// const closeMenu = () => {
//   setOpen(false);
// };

export default RightNav;
