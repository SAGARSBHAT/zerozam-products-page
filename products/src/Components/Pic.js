import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pic extends Component {
  render() {
    return (
      <div>
        <div className="initial">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="initial-1">Zerozam: Queue Management System</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="initial-2">
                A Market-leading queue management system that helps your
                business manage and measure customer flow with virtual queuing
                and scheduled appointments.
              </div>
              <div className="initial-3">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <span class="btn-lg btn-primary">
                      Start 15-Days Free Trial
                    </span>
                  </div>
                
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <span class="fas fa-play initial-3a"> See How It Work</span>
                  </div>
                </div>
              </div>
              </div>

              <div className="col-12   col-sm-12  col-md-12  col-lg-6 col-xl-6">
                <div className="initial-4">
                  <img src={require("./Capture 2.png")} className="imgsrc" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
   
    );
  }
}
