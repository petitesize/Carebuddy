import React from 'react';

interface TextAreaProps {
  textAreaSize: 'sm' | 'md' | 'lg';
}

const TextArea: React.FC<TextAreaProps> = ({ textAreaSize }) => {
  const getSizeStyle = (size: TextAreaProps['textAreaSize']) => {
    switch (size) {
      case 'sm':
        return { width: '200px', height: '50px' };
      case 'md':
        return { width: '400px', height: '100px' };
      case 'lg':
        return { width: '600px', height: '150px' };
      default:
        return { width: '400px', height: '100px' }; // 'md'를 기본값으로 설정
    }
  };

  return (
    <textarea
      style={{ ...getSizeStyle(textAreaSize), padding: '10px', fontSize: '16px' }}
    />
  );
};

export default TextArea;
