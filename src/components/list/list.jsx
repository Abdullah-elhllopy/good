import React  from 'react'
import {items} from './items'
import Details from '../detail/detail'
import { connect } from 'react-redux'
import { actioDetail } from '../../actions/itemAction'
import {
    BrowserRouter as Router,
    Redirect ,
    pathname,
    
    Link
  } from "react-router-dom";
  import history from '../../history'

import './index.scss'
function Good(props) {
   
    return (
        <div style ={{margin : '50px'}}>
           <Router>
            <div class=" row row-cols-1  row-cols-md-2 row-cols-lg-3  ">
                
                {items.map(item =>(
                
                     <div className = {`col  mb-4`} >
                     <div class="card ">
                     <div class="card-body">
                         <h5 class="card-title d-flex  justify-content-center">{item.name}</h5>
                     </div>
                     <img src={item.img} class="card-img-top" alt="..."/>
                         <button to ="/detail"  className ="btn more_info "  onClick={() => history.push('/detail')} onClick ={()=> props.actioDetail(item)} >
                            
                         
                            More Info
                            
                             <svg class="Path_6_bb " viewBox="19 984.361 28.444 16">
                                 <path id="Path_6_bb" d="M 47.44345092773438 992.3607177734375 C 47.43647384643555 992.0877685546875 47.3542594909668 991.92333984375 47.24901580810547 991.80517578125 L 41.47150421142578 984.6943359375 C 41.19860076904297 984.3096923828125 40.58016586303711 984.248779296875 40.19353103637695 984.5611572265625 C 39.80689239501953 984.8736572265625 39.78635406494141 985.457763671875 40.09656524658203 985.805419921875 L 44.69357681274414 991.471923828125 L 19.88881301879883 991.471923828125 C 19.39789962768555 991.471923828125 18.99996185302734 991.869873046875 18.99996185302734 992.3607177734375 C 18.99996185302734 992.8516845703125 19.39789962768555 993.24951171875 19.88881301879883 993.24951171875 L 44.69357681274414 993.24951171875 L 40.09656524658203 998.9158935546875 C 39.74468994140625 999.2669677734375 39.84468841552734 999.8829345703125 40.21610641479492 1000.21337890625 C 40.50203704833984 1000.467651367188 41.26404571533203 1000.386596679688 41.47150421142578 1000.026977539062 L 47.24901580810547 992.916259765625 C 47.39947509765625 992.7320556640625 47.44528198242188 992.59521484375 47.44345092773438 992.3607177734375 Z">
                                 </path>
                             </svg>
                         </button>       
                 </div>
                 </div>
                  
                ))}              
            </div>
             </Router>
        </div>
    )
}
const mapStateToProps = state => {
    
    return {
      items: state.items
    }
  }
const mapDispatchToProps = dispatch => {
    return {
    actioDetail: item => dispatch(actioDetail(item))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)( Good)
