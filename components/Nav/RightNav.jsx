import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    z-index: 10;
    margin-top: 0;
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/stations">UMstanice</Link>
      </li>
      <li>
        <Link href="/line-a">Linka A</Link>
      </li>
      <li>
        <Link href="/line-b">Linka B</Link>
      </li>
      <li>
        <Link href="/line-c">Linka C</Link>
      </li>
      <li>
        <Link href="/about">O projektu</Link>
      </li>
      <li>
        <Link href="/sources">Zdroje</Link>
      </li>
      <li>
        <Link href="/contact">Kontakt</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
