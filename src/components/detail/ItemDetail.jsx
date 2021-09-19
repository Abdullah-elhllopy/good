/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { connect } from 'react-redux'
import { actioDetail } from '../../actions/itemAction'
import { StyleSheet, css } from 'aphrodite/no-important';
 function Detail (props) {
    console.log(props.items)
    return (
      <div
      className={`product ${css(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <h5 className={css(styles.highlights_box, styles.highlights_box_layout)}>
        <pre className={css(styles.highlights)}>
          {'Home / Collection / New Arrivals / Leifarne '}
        </pre>
      </h5>
      <div className={css(styles.content_box_row)}>
        <div className={css(styles.flex, styles.flex_layout)}>
          <div className={css(styles.flex_col)}>
            <div className={css(styles.flex1, styles.flex1_layout)}>
              <div
                style={{
                  '--src': `url(${require('../../assets/763ef9d4fb0f78c8b04bf445fce68b23.png').default})`
                }}
                className={css(styles.icon, styles.icon_layout)}
              />
              <div
                style={{
                  '--src': `url(${require('../../assets/2ac35a880ffa791b3412f602949402ef.png').default})`
                }}
                className={css(styles.img, styles.img_layout)}
              />
              <div
                style={{
                  '--src': `url(${require('../../assets/2ac35a880ffa791b3412f602949402ef.png').default})`
                }}
                className={css(styles.img, styles.img_layout1)}
              />
              <div
                style={{
                  '--src': `url(${require('../../assets/2ac35a880ffa791b3412f602949402ef.png').default})`
                }}
                className={css(styles.img, styles.img_layout2)}
              />
              <div
                style={{
                  '--src': `url(${require('../../assets/bff818845774dabdc3136f56eaed4485.png')})`
                }}
                className={css(styles.img, styles.img_layout3)}
              />
              <div
                style={{
                  '--src': `url(${require('../../assets/19de79224620b5af50ae10180653a5c4.png').default})`
                }}
                className={css(styles.icon, styles.icon_layout1)}
              />
            </div>
          </div>
          <div className={css(styles.flex_spacer)} />
          <div className={css(styles.flex_col1)}>
            <div
              style={{
                '--src': `url(${props.items.img})`
              }}
              className={css(styles.img, styles.img_layout4)}
            />
          </div>
        </div>
      </div>
      <h2 className={css(styles.dining_chair, styles.dining_chair_layout)}>
        {'Dining Chair'}
      </h2>
      <div className={css(styles.content_box_row1)}>
        <div className={css(styles.flex, styles.flex_layout1)}>
          <h1 className={css(styles.leifarne, styles.leifarne_layout)}>
            {'Leifarne'}
          </h1>
          <div className={css(styles.flex2_spacer)} />
          <div className={css(styles.flex2_col)}>
            <div
              style={{
                '--src': `url(${require('../../assets/04e02f4bbb6d564f1598f04813d24737.png').default})`
              }}
              className={css(styles.cover_group, styles.cover_group_layout)}>
              <h2 className={css(styles.buy, styles.buy_layout)}>{'BUY'}</h2>
            </div>
          </div>
        </div>
      </div>
      <h2 className={css(styles.medium_title, styles.medium_title_layout)}>
        {'$180'}
      </h2>
    </div>
    )
}

const mapStateToProps = state => {
    console.log(state.items)
    return {
      items: state.items
    }
  }
const mapDispatchToProps = dispatch => {
    return {
    actioDetail: item => dispatch(actioDetail(item))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (Detail)

const styles = StyleSheet.create({
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(170,212,255,100)',
    width : '100%'
    
  },
  content_box_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 863,
    flexGrow: 1,
    margin: 0
  },
  highlights: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    font: '500 16px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  highlights_box: {},
  highlights_box_layout: {
    position: 'relative',
    flex: '0 0 auto',
    margin: '0px 12px'
  },
  content_box_row: {
    display: 'flex',
    flex: '0 1 673px'
  },
  flex: {
    display: 'flex'
  },
  flex_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '43px 12px 0px'
  },
  flex_col: {
    display: 'flex',
    flex: '0 1 56px'
  },
  flex1: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex1_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '157px 0px 209px'
  },
  icon: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon_layout: {
    position: 'relative',
    height: 56,
    width: 56,
    minWidth: 56,
    margin: 0
  },
  img: {
    background: 'var(--src) center center / contain no-repeat'
  },
  img_layout: {
    position: 'relative',
    height: 24,
    width: 4,
    minWidth: 4,
    display: 'block',
    margin: '16px auto 0px'
  },
  img_layout1: {
    position: 'relative',
    height: 24,
    width: 4,
    minWidth: 4,
    display: 'block',
    margin: '8px auto 0px'
  },
  img_layout2: {
    position: 'relative',
    height: 24,
    width: 4,
    minWidth: 4,
    display: 'block',
    margin: '8px auto 0px'
  },
  img_layout3: {
    position: 'relative',
    height: 24,
    width: 4,
    minWidth: 4,
    display: 'block',
    margin: '8px auto 0px'
  },
  icon_layout1: {
    position: 'relative',
    height: 56,
    width: 56,
    minWidth: 56,
    margin: '16px 0px 0px'
  },
  flex_spacer: {
    display: 'flex',
    flex: '0 1 43px'
  },
  flex_col1: {
    display: 'flex',
    flex: '0 1 630px'
  },
  img_layout4: {
    position: 'relative',
    height: 630,
    flexGrow: 1,
    margin: 0
  },
  dining_chair: {
    font: '24px/1.2 "Segoe UI", Helvetica, Arial, serif',
    color: 'rgb(65,65,65)',
    letterSpacing: '0px'
  },
  dining_chair_layout: {
    position: 'relative',
    flex: '0 0 auto',
    margin: '20px 12px 0px'
  },
  content_box_row1: {
    display: 'flex',
    flex: '0 1 81px'
  },
  flex_layout1: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '11px 12px 0px',
    '@media (max-width: 991.98px)': {
      flexGrow: 1,
      margin: '11px 12px 0px'
    }
  },
  leifarne: {
    font: '800 48px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  leifarne_layout: {
    position: 'relative',
    margin: '1px 0px 12px'
  },
  flex2_spacer: {
    display: 'flex',
    flex: '0 1 374px'
  },
  flex2_col: {
    display: 'flex',
    flex: '0 1 260px'
  },
  cover_group: {
    display: 'flex',
    background: 'var(--src) center center / cover no-repeat',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.0784313725490196))'
  },
  cover_group_layout: {
    position: 'relative',
    minHeight: 70,
    flexGrow: 1,
    margin: 0
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
    width: 64,
    minWidth: 64,
    margin: '19px auto 23px'
  },
  medium_title: {
    font: '24px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  medium_title_layout: {
    position: 'relative',
    flex: '0 0 auto',
    margin: '12px 12px 2px'
  }
});

