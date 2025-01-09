import React from 'react';

function Image() {
  const imageCount = 19;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px', // 헤더 아래로 이미지 배치
    margin: '0px',
  };

  const imageStyle = {
    maxWidth: '420px',
    width: '100%',
    height: 'auto',
    marginBottom: '0px', // 이미지 아래 여백 제거
    padding: '0px', // 이미지 패딩 제거
    display: 'block', // 이미지의 기본 inline 속성을 block으로 변경
  };

  const headerContainerStyle = {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '420px',
    width: '100%',
    height: '60px',
    backgroundColor: '#222222',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 1000,
    margin: '0px',
  };

  const logoStyle = {
    width: '60px', // 로고 이미지 높이
    paddingLeft: '26px',
  };

  const hamburgerStyle = {
    fontSize: '40px',
    marginBottom: '8px',
    cursor: 'pointer',
    color: '#515151', // 햄버거바 색깔 변경
  };

  const headerButtonStyle = {
    backgroundColor: '#FF181C', // 버튼 배경색
    color: '#FFFFFF', // 버튼 폰트 색상
    padding: '6px 12px',
    borderRadius: '97px',
    border: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const buttonStyle = {
    position: 'absolute', // 버튼을 이미지 중앙에 배치
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // 버튼을 정확히 중앙에 배치
    width: '80%',
    height: '7%',
    maxHeight: '180px',
    backgroundColor: 'transparent', // 버튼을 투명하게 설정
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    window.location.href = 'https://tally.so/r/mZv6po';
  };

  return (
    <>
      <header style={headerContainerStyle}>
        <div style={hamburgerStyle}>☰</div>
        <img
          src="/newlogo.png" // 로고 이미지 경로
          alt="Logo"
          style={logoStyle}
        />
        <button style={headerButtonStyle} onClick={handleButtonClick}>
          신청하기
        </button>
      </header>
      <div style={containerStyle}>
        {[...Array(imageCount)].map((_, index) => (
          <div key={index} style={{ position: 'relative', margin: '0px' }}>
            <img
              src={`/image/${index + 1}${index === 1 ? '.gif' : '.jpg'}`}
              alt={`Image ${index + 1}`}
              style={imageStyle}
            />
            {index === imageCount - 1 && (
              <div style={buttonStyle} onClick={handleButtonClick} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Image;
