import React from 'react';
import ChatApp from '../components/ChatApp'
export default function Main (props) {
  return (
    <main>
      <ChatApp/>
      {/* {
       props.children && React.cloneElement(props.children, props)
      } */}
    </main>
  );
}