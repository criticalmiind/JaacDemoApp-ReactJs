import React from 'react'
import './SlideDrawer.css'
import { Col } from 'react-grid-system'

export default class SlideDrawer extends React.Component {

    state = {
        languagesList:[
            { id:'01', name:'العربية' },
            { id:'02', name:'English' },
            { id:'03', name:'Deutsch' },
            { id:'04', name:'Français' },
            { id:'05', name:'русский' },
            { id:'06', name:'Español' },
            { id:'07', name:'Türkçe' },
        ],
        selectedLang:{ id:'02', name:'English' },
    }

    setSelected(lang){
        this.setState({ selectedLang:lang })
    }

   render(){
        const { languagesList, selectedLang } = this.state;
       let drawerClasses = 'side-drawer';
       let selectedLangClass = 'li-styles-language-selected';
       let generalLangClass = 'li-styles-language';

       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }

       return(
          <div className={drawerClasses}>
              <Col>
                    <div class="close-btn-div">
                        <button class="close-btn" onClick={this.props.onClose}>
                            <img src="https://img.jaac.app/themes/guest.jaac.app/assets/burger_close.svg" width="40" height="40" alt="burger close"/>
                        </button>
                    </div>
                    <Col class="drawer-sub-col">
                        <h1 class="drawer-heading-01">App Language</h1>
                        <p class="drawer-heading-01-note">Select your preferred app language</p>

                        <ul class="ul-styles-languages">
                            {
                                languagesList.map((lang, i)=>{
                                    if(selectedLang.id === lang.id){
                                        return(<li id={`lang-${i}`} onClick={()=>{ this.setSelected(lang) }} class={selectedLangClass}>{lang.name}</li>)
                                    }else{
                                        return(<li id={`lang-${i}`} onClick={()=>{this.setSelected(lang)}} class={generalLangClass}>{lang.name}</li>)
                                    }
                                })
                            }
                        </ul>

                        <ul class="ul-drawer-list">
                            <li class="li-drawer-list-item">
                                <h1 class="li-drawer-list-item-h">
                                    <a href="#" rel="noopener noreferrer" class="li-drawer-list-item-a" target="_blank">About us</a>
                                </h1>
                            </li>
                            <li class="li-drawer-list-item">
                                <h1 class="li-drawer-list-item-h">
                                    <a href="#" rel="noopener noreferrer" class="li-drawer-list-item-a" target="_blank">Contact us</a>
                                </h1>
                            </li>
                            <li class="li-drawer-list-item">
                                <h1 class="li-drawer-list-item-h">
                                    <a href="#" rel="noopener noreferrer" class="li-drawer-list-item-a" target="_blank">Terms and Conditions</a>
                                </h1>
                            </li>
                        </ul>

                    </Col>
              </Col>
          </div>
        )
    }
    
}