import React from 'react';

import { BrandIcon, Column, Container, FAIcon, Link, LinkLabel, Title } from './style';

const Footer = () => {
  return (
    <Container>
      <Column>
        <Title>ballena.io</Title>

        <Link href="https://docs.ballena.io" target="_blank">
          <FAIcon type="book" />
          <LinkLabel>docs</LinkLabel>
        </Link>

        <Link href="https://medium.com/@ballena" target="_blank">
          <BrandIcon type="medium" />
          <LinkLabel>news</LinkLabel>
        </Link>

        <Link href="https://github.com/ballena-io" target="_blank">
          <BrandIcon type="github" />
          <LinkLabel>source</LinkLabel>
        </Link>
      </Column>

      <Column>
        <Title>products</Title>
        <Link href="https://gov.ballena.io" target="_blank">
          <FAIcon type="landmark" />
          <LinkLabel>gov</LinkLabel>
        </Link>

        {/* <Link href="https://vote.ballena.io" target="_blank">
          <FAIcon type="vote-yea" />
          <LinkLabel>vote</LinkLabel>
        </Link> */}

        <Link href="https://app.ballena.io" target="_blank">
          <FAIcon type="hand-holding-usd" />
          <LinkLabel>app</LinkLabel>
        </Link>
      </Column>

      <Column>
        <Title>socials</Title>
        <Link href="https://twitter.com/ballenaio" target="_blank">
          <BrandIcon type="twitter" />
          <LinkLabel>twitter</LinkLabel>
        </Link>
        <Link href="https://t.me/stgcrypto" target="_blank">
          <BrandIcon type="telegram" />
          <LinkLabel>telegram</LinkLabel>
        </Link>
        <Link href="https://discord.gg/fWwyskse2Z" target="_blank">
          <BrandIcon type="discord" />
          <LinkLabel>discord</LinkLabel>
        </Link>
      </Column>
    </Container>
  );
};

export default Footer;
