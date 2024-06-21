import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '@/components/common/Input';

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  width: auto;
  border-bottom: 1px solid var(--color-grey-2);
  &.noBorder {
    border-bottom: none;
  }
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  margin: 20px 100px 20px 0;
`;

const ContentTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-1); //16
`;

const ContentBody = styled.div`
  font-size: var(--font-size-md-1); //16
  margin: 10px 0 10px 0;
`;

const Checkbox = styled.input``;

const HosRecords = ({ formData, setFormData }) => {
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedOption, setSelectedOption] = useState('아니오');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      consultationDate: `${date} ${time}`,
      hospitalizationStatus: selectedOption === '네' ? new Date() : null,
    }));
  }, [date, time, selectedOption]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
    setFormData((prevData) => ({
      ...prevData,
      consultationDate: `${value} ${time}`,
    }));
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setTime(value);
    setFormData((prevData) => ({
      ...prevData,
      consultationDate: `${date} ${value}`,
    }));
  };

  return (
    <Component>
      <Container>
        <BoxTitle>진단</BoxTitle>
        <ContentCard>
          <Content>
            <ContentTitle>진단 확인 여부</ContentTitle>
            <ContentBody>
              <Checkbox
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              의료진에 진단 받은 기록이 있습니다.
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>
              예약하신 수의사 선생님 성함을 입력하여주세요.
            </ContentTitle>
            <ContentBody>
              <Input
                name="doctorName"
                // height="20px"
                // value={formData.doctorName || ''}
                activeOption="readOnly"
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>상담 날짜와 시간을 체크하여주세요.</ContentTitle>
            <ContentBody>
              <Input
                type="date"
                width="180px"
                height="20px"
                margin="0 10px 0 0"
                value={date}
                onChange={handleDateChange}
              />
              <input
                type="time"
                width="180px"
                height="20px"
                margin="0 10px 0 0"
                value={time}
                onChange={handleTimeChange}
              />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>병원 이름</ContentTitle>
            <ContentBody>
              <Input
                name="address"
                height="20px"
                value={formData.address || ''}
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
          <Content>
            <ContentTitle>입원 여부</ContentTitle>
            <ContentBody>
              {/* <RadioBox
                labelText="네"
                value="네"
                checked={selectedOption === '네'}
                onChange={(value) => {
                  handleRadioChange(value);
                  setSelectedOption(value);
                }}
              />
              <RadioBox
                labelText="아니오"
                value="아니오"
                checked={selectedOption === '아니오'}
                onChange={(value) => {
                  handleRadioChange(value);
                  setSelectedOption(value);
                }}
              /> */}
            </ContentBody>
          </Content>
        </ContentCard>
      </Container>

      <Container>
        <ContentCard>
          <Content>
            <ContentTitle>질병</ContentTitle>
            <ContentBody>
              <Input
                height="20px"
                placeholder="입력하여주세요."
                name="disease"
                value={formData.disease || ''}
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
        </ContentCard>
      </Container>

      <Container>
        <ContentCard>
          <Content>
            <ContentTitle>증상</ContentTitle>
            <ContentBody>
              <textarea
                width="890px"
                height="100px"
                placeholder="입력하여주세요."
                name="symptom"
                value={formData.symptom || ''}
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
        </ContentCard>
      </Container>

      <Container>
        <ContentCard>
          <Content>
            <ContentTitle>처방</ContentTitle>
            <ContentBody>
              <textarea
                width="890px"
                height="100px"
                placeholder="입력하여주세요."
                name="treatment"
                value={formData.treatment || ''}
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
        </ContentCard>
      </Container>

      <Container className="noBorder">
        <ContentCard>
          <Content>
            <ContentTitle>메모</ContentTitle>
            <ContentBody>
              <textarea
                width="890px"
                height="100px"
                placeholder="입력하여주세요."
                name="memo"
                value={formData.memo || ''}
                onChange={handleInputChange}
              />
            </ContentBody>
          </Content>
        </ContentCard>
      </Container>
    </Component>
    // <div>
    //   <label htmlFor="nameInput">Name:</label>
    //   <input
    //     type="text"
    //     id="nameInput"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleInputChange}
    //   />

    //   <label htmlFor="phoneInput">Phone Number:</label>
    //   <input
    //     type="tel"
    //     id="phoneInput"
    //     name="phoneNumber"
    //     value={formData.phoneNumber}
    //     onChange={handleInputChange}
    //   />
    // </div>
  );
};

export default HosRecords;
