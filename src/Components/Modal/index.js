import React from 'react'
import './style.css'
import { ReactComponent as BarCodeIcon } from './../../assets/modal_scan_image_icon.svg';

export default class Modal extends React.Component {

    state = {
    }

   render(){

       return(<>
            <div id="openModal" class="modalDialog">
                <a href="#close" class="modal-bg"></a>
                <div class="modal-body">
                    <a href="#close" title="Close" class="close">
                        <img src="https://img.jaac.app/themes/guest.jaac.app/assets/modal_check_icon.svg" width="60" height="60" alt="check icon" />
                    </a>

                    <a href="" class="barcode-a">
                        <BarCodeIcon />
                    </a>

                    <p class="modal-note-title">Please scan QR code</p>

                    <p class="modal-note-p"> Dear Guest, in order to browse the menu, place orders, or call waiters, kindly scan the QR code on the table, first! </p>
                </div>
            </div>
        </>)
    }
    
}