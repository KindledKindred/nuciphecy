/**
 * @file とりあえず右上のサウンドとコンフィグのアイコン置く，増える可能性ある
 */

 import React from 'react';
 import styled from 'styled-components';
 
 export type IHeader = {
   children?: never;
 };
 
 const HeaderBase: React.FC<IHeader> = ({}) => {
   return (
     <div className="Header-base">
       <div className=""></div>
     </div>
   );
 };
 
 const StyledComponent = styled(HeaderBase)``;
 
 export const Header = StyledComponent;
 