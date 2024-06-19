// // 버튼 만드는 중... 몇 개로 분류할 수 있다면 괜찮은 방법 같지만 그렇지 않다면 쓸모없는 방법

// import React from 'react';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   padding: 8px 16px;
//   font-size: var(--font-size-md-1);
//   cursor: pointer;
//   border: none;
//   transition: all 0.5s;

//   &.round-green {
//     border-radius: 20px;
//     background-color: var(--color-green-main);
//     color: white;
//   }

//   &.square-green {
//     border-radius: 0;
//   }

//   &.square-white {
//     border-radius: 0;
//     background-color: transparent;
//     color: black;
//     border: solid 2px;
//   }

//   &.link {
//     margin-bottom: 10px;
//     padding: 0 0 1px 0;
//     border: none;
//     border-bottom: solid 1px;
//     background-color: transparent;
//     font-size: var(--font-size-ft-1);
//     font-weight: var(--font-weight-regular);
//     cursor: pointer;
//   }

//     &.sm {
//     font-size: var(--font-size-ft-1);
//   }

// `;

// // 버튼 컴포넌트 정의
// interface ButtonProps {
//   children: React.ReactNode;
//   style?: string;
//   size?: string;
//   onClick?: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ children, style, size, onClick }) => {
//   const assignedStyle = style ?? 'round-green';
//   const assignedSize = size ?? 'md';

//   return (
//     <StyledButton style={assignedStyle} size={assignedSize} onClick={onClick}>
//       {children}
//     </StyledButton>
//   );
// };

// export default Button;
