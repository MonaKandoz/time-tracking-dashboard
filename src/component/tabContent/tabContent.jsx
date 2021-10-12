import React, { useEffect, useState} from "react";
import Item from "../item/item";

import './tabContent.css';

const TabContent = (props)=>{
    const [data, setData] = useState([]);
    const getData = ()=> {
        fetch('data.json',{
            headers : {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    }).then(function(res){
        return res.json();
    }).then(function(myJson){
        setData(myJson);
    })
    };

    useEffect(() => {
        getData();
    }, [])
    return(
        <div id={props.tab} className="tabContent">
            {data.map((item, index)=>{
                if(props.tab === 'daily'){
                    return <Item title={item.title} hours={item.timeframes.daily.current} prevLog={item.timeframes.daily.previous}/>
                }else if(props.tab === 'weekly'){
                    return <Item title={item.title} hours={item.timeframes.weekly.current} prevLog={item.timeframes.weekly.previous}/>
                }else if(props.tab === 'monthly'){
                    return <Item title={item.title} hours={item.timeframes.monthly.current} prevLog={item.timeframes.monthly.previous}/>
                }
                return <h1>{item.tilte}</h1>
            })}
            
        </div>
    );

}

export default TabContent;