/**
 * @file 設定項目を読み込んで表示するだけ
 * コンフィグ項目
 * 1. 音量
 * 2. フォントサイズ
 * 3. 詳細設定
 *
 * 詳細設定
 * 1.
 */

import React from 'react';
import styled from 'styled-components';

export type IConfig = {
  children?: never;
};

const ConfigBase: React.FC<IConfig> = ({}) => {
  return (
    <div className="Config-base">
      <div className=""></div>
    </div>
  );
};

const StyledComponent = styled(ConfigBase)``;

export const Config = StyledComponent;
