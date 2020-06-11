import Service from "./Service"
import React, { Component } from "react"
import {Header, Footer} from '../../components'

export default class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <Service />
        <Footer />
      </div>
    );
  }
}


export {
  Service
}

