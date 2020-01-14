import React from 'react';
import styled from 'styled-components';

const MainContent = styled.main`
  margin-top: 16px;
`;

const Wrapper = (props) => (
  <React.Fragment>
    <div>
      Toobar, SideDrawer, Bckdrop
    </div>
    <MainContent>
      { props.children }
    </MainContent>
  </React.Fragment>
);

export default Wrapper;