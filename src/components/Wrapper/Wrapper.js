import React from 'react';

const Wrapper = (props) => (
  <React.Fragment>
    <div>
      Toobar, SideDrawer, Bckdrop
    </div>
    <main>
      { props.children }
    </main>
  </React.Fragment>
);

export default Wrapper;