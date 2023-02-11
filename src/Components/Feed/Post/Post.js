import { CheckCircleFilled, HeartOutlined, MessageOutlined, RetweetOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import './Post.scss';

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar 
}) {
  return (
    <div className='post'>
        <div className='postAvatar'>
          <Avatar src={avatar} />
        </div>
        <div className='postBody'>
          <div className='postHeader'>
            <div className='postHeaderText'>
              <h3>
                {displayName}
                <span className='postHeaderSpecial'>
                {verified && <CheckCircleFilled className='verifiedBadge' />} @{username}
                </span>
              </h3>
            </div>
            <div className='postHeadDesription'>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt='' />
          <div className='postFooter'>
          <MessageOutlined className='icon'/>
          <RetweetOutlined className='icon'/>
          <HeartOutlined className='icon'/>
          <ShareAltOutlined className='icon'/>


          </div>
        </div>
    </div>
  )
}

export default Post;