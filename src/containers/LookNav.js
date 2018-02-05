import React from 'react';


class LookNav extends React.Component {
    render() {
        const zone = ["客厅"," 餐厅","卧室","玄关","儿童房","厨房","工作区"," 阳台"," 衣帽间"," 楼梯","走廊","卫生间","书房","开放式厨房"];
        const style = ["北欧","日式","美式","地中海","混搭","欧式","中式","法式","工业风","宜家","简约","田园","乡村","复古"];
        const hardDecoration = ["电视墙","背景墙","吧台","飘窗","隔断","卡座","干湿分离","榻榻米","黑板墙","壁炉"];
        const softDecoration = ["沙发","电视柜","茶几","餐桌","餐边柜","书桌","书柜","床","衣柜","床头柜","橱柜","浴室柜","玄关柜","台灯","壁灯","吊灯"];
        return (
            <div className="LookNav">
                <LookNav list={zone}/>
                <LookNav list={style}/>
                <LookNav list={hardDecoration}/>
                <LookNav list={softDecoration}/>
            </div>
        )
    }
}


function LookNavList(props) {
    return (
        <div className="look-list">
                <span className="list-head">空间 :</span>
                {
                    props.list.map((item) => { <a href="">{item}</a>})
                }
        </div>
    )
}

export default LookNav;