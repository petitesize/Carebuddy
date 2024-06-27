import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
  value: string;
  checked: boolean;
  text: string;
  onChange: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  checked = false,
  text,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
    onChange();
  };

  return (
    <Label htmlFor={value} className="chk_box">
      <Input
        type="checkbox"
        id={value}
        checked={isChecked}
        onChange={handleCheck}
      />
      <TextContainer>
        <Span className={isChecked ? 'on' : ''} />
        <Text>{text}</Text>
      </TextContainer>
    </Label>
  );
};

export default CheckBox;

const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-grey-2);
  position: relative;
  margin-right: 4px;

  &.on {
    background-color: var(--color-green-main);
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      width: 6px;
      height: 9px;
      border: solid var(--color-white);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0px;
    }
  }
`;

const Text = styled.p`
  margin: 0;
`;
