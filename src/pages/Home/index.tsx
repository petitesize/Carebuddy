import styled from "styled-components";

// 컴포넌트
import Banner from "@/components/Home&Community/Banner";
import SidePanel from "@/components/Home&Community/SidePanel";

// 이 페이지에서 필요한 컴포넌트
// FeedBox

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ContentContainer>
        <FeedBoxContainer>
          <FeedOptionContainer>
            <p>피드옵션 컨테이너</p>
          </FeedOptionContainer>
          <p>피드박스 컨테이너</p>
        </FeedBoxContainer>
        <SidePanelContainer>
        <p>사이드패널 컨테이너</p>
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Home;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  background-color: yellow;

  & > * {
    margin-bottom: 30px;
  }
`;

const FeedBoxContainer = styled.div`
  height: 2000px;
  width: 75%;
  border: solid 2px black;
`;

const FeedOptionContainer = styled.div`
  border: solid 2px black;
`

const SidePanelContainer = styled.div`
  width: 25%;
  border: solid 2px blue;
`;


