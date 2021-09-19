import { StyleSheet } from 'aphrodite/no-important';

export const styles = StyleSheet.create({
    group: {
      display: 'flex',
      backgroundColor: 'rgb(177,214,217)'
    },
    group_layout: {
      position: 'relative',
      minHeight: 980,
      flexGrow: 1,
      margin: 0
    },
    flex: {
      display: 'flex'
    },
    flex_layout: {
      position: 'relative',
      overflow: 'visible',
      flexGrow: 1,
      margin: '57px 106px',
      '@media (max-width: 1399.98px)': {
        flexGrow: 1,
        margin: '29px 53px'
      },
      '@media (max-width: 1199.98px)': {
        flexGrow: 1,
        margin: '25px 27px'
      },
      '@media (max-width: 991.98px)': {
        flexGrow: 1,
        margin: '25px 14px'
      },
      '@media (max-width: 767.98px)': {
        flexGrow: 1,
        margin: '25px 10px'
      }
    },
    flex_spacer: {
      display: 'flex',
      flex: '0 1 4.83px'
    },
    flex_col: {
      display: 'flex',
      flex: '1 1 206.63px'
    },
    flex1: {
      display: 'flex',
      flexDirection: 'column'
    },
    flex1_layout: {
      position: 'relative',
      overflow: 'visible',
      flexGrow: 1,
      margin: '476px 0px 103px'
    },
    working_chair: {
      font: '24px/1.2 "Segoe UI", Helvetica, Arial, serif',
      color: 'rgb(65,65,65)',
      letterSpacing: '0px',
      margin: 0
    },
    working_chair_layout: {
      position: 'relative',
      width: 132,
      minWidth: 132,
      margin: '0px 0px 0px 0.79px'
    },
    medium_title: {
      font: '24px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      letterSpacing: '0px'
    },
    medium_title_layout: {
      position: 'relative',
      margin: '65px 0px 0px'
    },
    cover_group: {
      display: 'flex',
      background: 'var(--src) center center / cover no-repeat',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.0784313725490196))'
    },
    cover_group_layout: {
      position: 'relative',
      minHeight: 70,
      margin: '68px 0px 0px 0.79px'
    },
    buy: {
      display: 'flex',
      justifyContent: 'flex-end',
      font: '700 24px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      textAlign: 'right',
      letterSpacing: '0px'
    },
    buy_layout: {
      position: 'relative',
      width: 74,
      minWidth: 74,
      margin: '19px auto 23px'
    },
    flex_spacer1: {
      display: 'flex',
      flex: '0 1 231.96px'
    },
    flex_col1: {
      display: 'flex',
      flex: '0 1 471.04px'
    },
    group1: {
      display: 'flex'
    },
    group1_layout: {
      position: 'relative',
      minHeight: 788,
      flexGrow: 1,
      margin: '0px 0px 78px',
      '@media (max-width: 575.98px)': {
        minHeight: 788,
        flexGrow: 1,
        margin: '0px 0px 39px'
      }
    },
    the_mine: {
      font: '800 48px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      letterSpacing: '0px',
      margin: 0,
      '@media (max-width: 1199.98px)': {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: '45px',
        textAlign: 'left'
      },
      '@media (max-width: 991.98px)': {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: '42px',
        textAlign: 'left'
      },
      '@media (max-width: 767.98px)': {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: '38px',
        textAlign: 'left'
      }
    },
    the_mine_layout: {
      position: 'absolute',
      top: 540,
      height: 114,
      left: -600.79,
      width: 250
    },
    image: {
      background: 'var(--src) center center / contain no-repeat'
    },
    image_layout: {
      position: 'relative',
      height: 788,
      flexGrow: 1,
      margin: 0
    },
    flex_spacer2: {
      display: 'flex',
      flex: '0 1 149.54px'
    },
    flex_col2: {
      display: 'flex',
      flex: '0 1 244px'
    },
    img: {
      background: 'var(--src) center center / contain no-repeat'
    },
    img_layout: {
      position: 'relative',
      height: 72,
      flexGrow: 1,
      margin: '699px 0px 95px'
    }
  });
  