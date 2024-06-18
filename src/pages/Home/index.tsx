import styled from "styled-components";
import Banner from "@/components/Home/Banner";

const Home: React.FC = () => {
  return (
    <>
    <TempBackground>
      <Banner />
      <ContentContainer>
        <FeedContainer>
          <FeedOption>
            <Classification>
              <p>분류:</p>
              {/* <CommunitySelect
              width="100px"
              borderRadius="30px"
              options={CategoryOptions}
              onChange={handleCategoryChange}
            /> */}
              {/* <CommunitySelect
              width="120px"
              borderRadius="30px"
              options={selectedGroupOptions}
              onChange={handleSelectedGroup}
            /> */}
            </Classification>
            <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              {/* <WritingModalButton /> */}
            </WritingButton>
          </FeedOption>
          {/* {selectedCategoryValue === ''
          ? totalPost.map((post) => (
              <FeedBox
                postId={post?._id}
                key={post?._id}
                title={post?.title}
                content={post?.content}
                profile={`${UPLOADED_IMG_URL}${post?.userId?.profileImage[0]}`}
                nickname={post?.userId?.nickName}
                uploadedDate={post?.createdAt}
              />
            ))
          : posts.map((post) => (
              <FeedBox
                postId={post?._id}
                key={post?._id}
                title={post?.title}
                content={post?.content}
                profile={`${UPLOADED_IMG_URL}${post?.userId?.profileImage[0]}`}
                nickname={post?.userId?.nickName}
                uploadedDate={post?.createdAt}
              />
            ))} */}
        </FeedContainer>
        <SidePanelContainer>
          {/* <SidePanel name="추천 커뮤니티" array={groupArray} /> */}
        </SidePanelContainer>
      </ContentContainer>
      </TempBackground>
    </>
  );
};

export default Home;

const TempBackground = styled.div`
width: 100%;
height: 100%;
background-color: yellow;
`

const ContentContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

const FeedContainer = styled.div`
  width: 70%;
  margin-bottom: 30px;
`;

const FeedOption = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidePanelContainer = styled.div`
  width: 20%;
`;

const Classification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 265px;

  p {
    color: var(--color-grey-1);
    font-size: var(--font-size-md-1);
  }

  & > * {
    padding-right: 2px;
  }
`;

const WritingButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-size: var(--font-size-ft-1);
    color: var(--color-grey-1);
    padding: 0 10px;
  }
`;
