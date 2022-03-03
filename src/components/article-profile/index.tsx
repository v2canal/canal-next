import React, { memo, useContext } from 'react';

import { ArticleProfileWrapper } from "./style"
import ArticleRContainer from '../article-r-container';
import { ThemeContext } from '@/common/context';
import { Image as ImageAntD } from 'antd';
import Image from 'next/image'
import logo from '@/assets/svg/yuque.svg'
export default memo(function ArticleProfile() {
  
  const theme = useContext(ThemeContext)

  return (
    <ArticleRContainer title="技术交流" icon="iconfont icon-qunzu" color="#0984e3">
      <ArticleProfileWrapper theme={theme}>
        <div className='avatar'>
          <ImageAntD
            alt='个人头像'
            src="http://ytbkt.oss-cn-beijing.aliyuncs.com/1646123679853ll_blog_assets"
            width={70}
            height={70} />
          <p className='self-desc'>
            勤奋的前端coder
          </p>
        </div>
        <div className="github-social">
          <i className='iconfont icon-github-fill'></i>
          <a href="https://github.com/v2canal">&nbsp;Github Repo</a>
        </div>
        <div className="yuque-social">
          <Image width={30} height={30} src={logo} alt='语雀logo'/>
          <a href="https://yuque.com/canal">&nbsp;语雀文档</a>
        </div>
        <div className="qq-social">
          <i className='iconfont icon-QQ'></i>
          &nbsp;QQ:&nbsp;1239463139
        </div>


      </ArticleProfileWrapper>
    </ArticleRContainer>
  );
});
