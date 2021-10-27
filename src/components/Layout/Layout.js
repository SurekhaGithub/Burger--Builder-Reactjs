import React,{Component} from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout/Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
      constructor(props){
            super(props);
            this.state={
                  showSideDrawer:true
            }
      }
      sideDrawerClosedHandler=()=>{
        this.setState({
              showSideDrawer:false
        })
      }
      sideDrawerToggleHandler=()=>{
            this.setState((prevState)=>{
               return{showSideDrawer:!prevState.showSideDrawer}
                 
            })
      }
      render(){
            return(
        <>
         <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
         <SideDrawer open={this.state.showSideDrawer} 
                     closed={this.sideDrawerClosedHandler}/>
         <main className={styles.Content}>
         {this.props.children}
         </main>        
       </>
            )
      }
   

}
export default Layout;