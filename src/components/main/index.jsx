/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import {  css } from 'aphrodite/no-important';
 import { styles } from './styles';
 
 export default function Main(props) {
   return (
    <div className={`good ${css(styles.group, styles.group_layout)}`}>
       <div className={css(styles.flex, styles.flex_layout)}>
         <div className={css(styles.flex_spacer)} />
         <div className={css(styles.flex_col)}>
           <div className={css(styles.flex1, styles.flex1_layout)}>
             <h2
               className={css(
                 styles.working_chair,
                 styles.working_chair_layout
               )}>
               {'Working Chair'}
             </h2>
             <h2
               className={css(styles.medium_title, styles.medium_title_layout)}>
               {'$180'}
             </h2>
 
             <div
            
               className={css(styles.cover_group, styles.cover_group_layout)}>
               <button className={css(styles.buy, styles.buy_layout)}>{'BUY'}</button>
             </div>
           </div>
         </div>
         <div className={css(styles.flex_spacer1)} />
         <div className={css(styles.flex_col1)}>
           <div className={css(styles.group1, styles.group1_layout)}>
             <h1 className={css(styles.the_mine, styles.the_mine_layout)}>
               {'The Mine'}
             </h1>
             <img
                src = {require('../../assets/3267434c14d99ab60fa6d51e8892dd5c.png').default}
                alt =""
               className={css(styles.image, styles.image_layout)}
             />
           </div>
         </div>
         <div className={css(styles.flex_spacer2)} />
         <div className={css(styles.flex_col2)}>
           <img
             src = {require('../../assets/c73684304fbf5859ff1a95515a9ee3b0.png').default}
             alt =""
             className={css(styles.img, styles.img_layout)}
           />
         </div>
       </div>
     </div>
   );
 }
 

 
 