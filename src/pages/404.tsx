import React, {memo} from 'react';
import {Image} from 'antd';

export  default memo(function NOT_FOUND(){
    return(
        <div>
            <Image src={require("@/assets/svg/404.svg")}/>
        </div>
    )
})