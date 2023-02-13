import React from "react";
import s from './MyPosts.module.css';

const MyPosts=()=>{
    return(
        <div>
            My posts
            <div>
               <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://img08.rl0.ru/afisha/e630x315p253x0f1077x606q85i/s3.afisha.ru/mediastorage/d7/24/5890c7504fca4b79ae2015c724d7.jpg'/>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;