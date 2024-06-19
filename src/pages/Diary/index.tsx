import React from 'react';
import styled from 'styled-components';
// import { TbReportMedical } from "react-icons/tb"; 아이콘 라이브러리 확정 시에만 import

/* 임시 레이아웃 */

const Body = styled.div`
  flex: 1;
  padding-top: 80px;
`;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1024px;
`;

/* 임시 레이아웃 끝 */

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`;

/* 카드프로필 */

const ProfilesWrapper = styled.div`
  height: 400px;
  display: block;
`;

const ProfilesTitle = styled.div`
  font-size: var(--font-size-hd-2);
  font-weight: var(--font-weight-bold);
  margin: 20px 0 30px 0;
`;

/* 카드프로필 끝 */

/* 카드 */

const CardsWrapper = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
`;

const Cards = styled.div`
  width: 244px;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  > div.action {
    position: absolute;

    top: 15px;
    right: 15px;
  }
  :hover {
    cursor: pointer;
  }
`;

const Photo = styled.img`
  width: 130px;
  height: 130px;
  background: rgba(152, 185, 156, 0.3);
  border-radius: 50%;
  border: 0;
  overflow: hidden;
  text-align: center;
`;

const Name = styled.p`
  margin-top: 22px;
  height: 26px;
  font-size: var(--font-size-hd-1);
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  margin-bottom: 6px;
  transition: color 0.3s ease;
  &.selectedPet {
    color: var(--color-green-main);
  }
`;

const Details = styled.p`
  width: 100%;
  height: 19px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7d7d7d;
  margin: 0;
`;

/* 카드 끝 */

/* 다이어리 */

const DiaryWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 50px 80px 40px 60px;
  border: 1px solid #cecece;
  border-radius: 6px 80px 6px 6px;
  margin-top: 100px;
  position: relative;
  margin-bottom: 10%;
`;

const DeseaseTitle = styled.h2`
  font-size: var(--font-size-hd-1);
  font-weight: var(--font-weight-medium);
  height: auto;
  margin-left: 10px;
`;

const DiaryTitle = styled.h2`
  font-size: var(--font-size-hd-2);
  font-weight: var(--font-weight-bold);
  height: 115px;
  color: var(--color-green-main);
  > span {
    color: var(--color-black-main);
  }
`;

const HorizontalLine = styled.div`
  border-top: 3px solid var(--color-green-sub-2);
  top: 115px;
  left: 0;
  width: 100%;
  position: absolute;
`;

// 타이틀을 포함한 다이어리 컨테이너
const ReportWrapper = styled.div`
  height: 280px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 150px;
  &.noReport {
    > p {
      padding-bottom: 8px;
    }
  }
`;

// 다이어리 본문 컨테이너
const Report = styled.div`
  padding: 20px 3%;
  margin-top: 24px;
  height: 100%;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  display: flex;
  position: relative;
  > div:first-child {
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const DeseaseName = styled.div`
  display: flex;
  height: 26px;
  width: 30%;
  padding-top: 26px;
  padding-right: 20px;
`;

const Icon = styled.div`
  > svg {
    width: 20px;
    height: 20px;
    color: var(--color-green-main);

    &.big {
      width: 24px;
      height: 24px;
    }
  }
`;

/* 다이어리 끝 */

/* 다이어리 상세 : 그리드로 변경 */
const DiaryDetailsLeft = styled.div`
  display: flex;
  border-left: solid 2px #cecece;
  padding: 26px 4%;
  flex-direction: column;
  width: 35%;
`;

const DiaryDetailsRight = styled.div`
  display: flex;
  padding: 26px 30px;
  flex-direction: column;
  width: 35%;
`;

// 질병에 대한 상세 정보 컨테이너
const DiaryDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DiaryDetail = styled.div`
  margin-left: 15px;
  margin-bottom: 30px;
  margin-right: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.p`
  width: 300px;
  font-weight: var(--font-weight-bold);

  + p {
    font-size: var(--font-size-md-1);
    margin-top: 4px;
    line-height: var(--font-size-hd-2);
    white-space: pre-wrap;

    > span {
      color: #7d7d7d;
    }
  }
`;

/* 다이어리 상세 끝  */

const Diary: React.FC = () => (
  <Body>
    <Main>
      <Wrapper>
        <ProfilesWrapper>
          <ProfilesTitle>user 님의 반려동물</ProfilesTitle>
          <CardsWrapper>
            <Cards>
              <Photo />
              <Name>이름</Name>
              <Details>종 / 나이</Details>
            </Cards>
          </CardsWrapper>
        </ProfilesWrapper>
        <DiaryWrapper>
          <DiaryTitle className="diaryTitle">
            (반려동물 이름)의 <span>건강 다이어리</span>
          </DiaryTitle>
          <HorizontalLine />
          <ReportWrapper>
            <p>날짜(컴포넌트화 필요합니다)</p>
            <Report>
              <DeseaseName>
                <Icon>desease Icon</Icon>
                <DeseaseTitle>질병 타이틀</DeseaseTitle>
                <div>
                  <DiaryDetailsLeft>
                    <DiaryDetailContainer>
                      <Icon>Icon</Icon>
                      <DiaryDetail>
                        <DetailTitle>증상</DetailTitle>
                        <p>{'data.symptom' || '증상 기록이 없어요'}</p>
                      </DiaryDetail>
                    </DiaryDetailContainer>
                    <DiaryDetailContainer>
                      <Icon>Icon</Icon>
                      <DiaryDetail>
                        <DetailTitle>입원 여부</DetailTitle>
                        <p>입원중 or 입원하지 않았어요</p>
                      </DiaryDetail>
                    </DiaryDetailContainer>
                    <DiaryDetailContainer>
                      <Icon>Icon</Icon>
                      <DiaryDetail>
                        <DetailTitle>보호자 메모</DetailTitle>
                        <p>{'data.memo' || '메모 없음'}</p>
                      </DiaryDetail>
                    </DiaryDetailContainer>
                  </DiaryDetailsLeft>
                  <DiaryDetailsRight>
                    <DiaryDetailContainer>
                      <Icon>Icon</Icon>
                      <DiaryDetail>
                        <DetailTitle>처방</DetailTitle>
                        <p>{'data.treatment' || '처방 기록이 없어요'}</p>
                      </DiaryDetail>
                    </DiaryDetailContainer>
                    <DiaryDetailContainer>
                      <Icon>Icon</Icon>
                      <DiaryDetail>
                        <DetailTitle>동물병원</DetailTitle>
                        <p>
                          방문 기록 여부
                          <span>수의사 선생님 성함</span>
                        </p>
                      </DiaryDetail>
                    </DiaryDetailContainer>
                  </DiaryDetailsRight>
                </div>
              </DeseaseName>
            </Report>
          </ReportWrapper>
        </DiaryWrapper>
      </Wrapper>
    </Main>
  </Body>
);

export default Diary;
