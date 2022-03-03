import {memo} from 'react'
import type {NextPage} from "next";
import {IndexWrapper} from "@/styles/home";
const Home :NextPage = memo(function myHome(){
    return(
    <IndexWrapper>
        <div className="message">
            你好 欢迎来到这里 希望这里的文章对你有所帮助 ~
        </div>
        <div className="usagi">
            <div className="head">
                <div className="wrap">
                    <div className="flush"/>
                    <div className="face"/>
                    <div className="mouth"/>
                    <div className="nose"/>
                </div>
            </div>
        </div>
        <div className="piske">
            <div className="head">
                <div className="eyes"/>
                <div className="flush"/>
                <div className="mouth"/>
            </div>
        </div>
    </IndexWrapper>
    )
})
export default  Home