import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <Header className='Header'>
        <Symbol src='/dw.png'/>
        <Text>웹 페이지 준비중....</Text>
      </Header>
      <MainPage>
        <DetailText>세상의 간극을 이어붙이는</DetailText>
        <Title src="/TAPdeIE.png" alt="" />
        <DetailText>우리의 이야기</DetailText>
      </MainPage>
    </div>
  );
}

const Header = styled.header`
  border-color:white;
  display:flex;
  padding: var(--Spacing-16, 16px) 0px;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding-left:180px;
  padding-right:180px;
`
const Symbol=styled.img`
  width:112px;
`
const MainPage = styled.div`
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap:32px;
`
const Title=styled.img`
  width:250px;

`
const DetailText = styled.span`
  @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
  font-family: "Wanted Sans";
`

const Text = styled.span`
  @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
  font-family: "Wanted Sans";
  text-decoration: underline;
`

export default App;
