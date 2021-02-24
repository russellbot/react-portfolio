import React from "react";
import Fade from "react-reveal/Fade";
import { FaGithub } from "react-icons/fa";
import { Button, ButtonA } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  buttons,
  img,
  alt,
  primary,
  dark,
  dark2,
  fade,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Fade left={fade.left} right={fade.right}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description1}</Subtitle>
                  <Subtitle darkText={darkText}>{description2}</Subtitle>
                  <BtnWrap>
                    {buttons.map((btn) => (
                      <ButtonA
                        href={btn.link}
                        target="_blank"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        key={btn.link}
                      >
                        {btn.icon ? <FaGithub /> : null} {btn.name}
                      </ButtonA>
                    ))}
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </Fade>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
