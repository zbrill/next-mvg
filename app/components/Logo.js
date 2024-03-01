import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.svg";
import { device } from "../../utils/devices";
import Link from "next/link";
import Image from "next/image";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;

  img {
    width: 100%;

    @media ${device.laptop} {
      height: 40vh;
    }
  }
`;

const Logo = () => (
  <Wrapper>
    <Link href="/">
      <Image src={logo} alt="Music Video Game" />
    </Link>
  </Wrapper>
);

export default Logo;
