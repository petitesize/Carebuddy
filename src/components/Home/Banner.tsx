import styled from "styled-components";
import Typewriter from "typewriter-effect";

// 배너 이미지
import BannerImg from "/src/assets/bannerImg.png";

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <img src={BannerImg} alt="배너 이미지" />
      <TextContainer>
        <Row>
          <Text color="var(--color-green-main)">케어버디</Text>
          <Text>와 함께</Text>
        </Row>
        <Text>
          사랑하는 나의
          <TypeWriterWrapper>
          <Typewriter
            options={{
              strings: ["강아지와", "고양이와", "가족과"],
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 200,
            }}
          />
          </TypeWriterWrapper>
        </Text>
        <Text>건강하고 행복한 시간을 보내세요</Text>
        <Text
          color="var(--color-grey-1)"
          padding="10px 0"
          fontWeight="var(--font-weight-regular)"
          fontSize="var(--font-size-md-1)"
        >
          꾸준한 질병 기록으로 아이의 건강을 지키고, 아이의 행복을 위한 정보를
          나눠보아요.
        </Text>
      </TextContainer>
    </StyledBanner>
  );
};

export default Banner;

type TextProps = {
  fontSize?: string;
  color?: string;
  padding?: string;
  fontWeight?: string;
};

const StyledBanner = styled.div`
  position: relative;

  img {
    width: 1024px;
    height: auto;
  }
`;

const Row = styled.div`
  display: flex;
`;

const TypeWriterWrapper = styled.div`
  padding-left: 10px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 5%;
`;

const Text = styled.div<TextProps>`
  display: flex;
  align-items: baseline;
  font-size: ${(props) => props.fontSize || "var(--font-size-lg-3)"};
  font-weight: ${(props) => props.fontWeight || "var(--font-weight-extrabold)"};
  padding: ${(props) => props.padding || "5px 0"};
  color: ${(props) => props && props.color};
`;
