import React from 'react';
import imgAnup from '../images/team/anup.jpg';
import imgAnil from '../images/team/anil.jpg';
import imgPramod from '../images/team/pramod.jpg';
import imgDharmendra from '../images/team/dharmendra.jpg';
import imgManoj from '../images/team/manoj.jpg';
import imgSubodh from '../images/team/subodh.jpg';
import imgShankar from '../images/team/shankar.jpg';
import imgSamrat from '../images/team/samrat.jpg';
import imgSantosh from '../images/team/santosh.jpg';
import imgSabina from '../images/team/sabina.JPG';
import imgSapana from '../images/team/sapana.JPG';

export default function About() {
  return (
    <div id="team" className="team-section text-center">
      <div className="container py-10 py-lg-22">
        <h2 className="mb-15">Meet Our Team</h2>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgAnup})` }}
            ></div>
            <h4 className="mb-1">Anup K. Tamang</h4>
            <p>Founder</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgPramod})` }}
            ></div>
            <h4 className="mb-1">Pramod Bhandari</h4>
            <p>Managing Director</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgAnil})` }}
            ></div>
            <h4 className="mb-1">Anil K. Tamang</h4>
            <p>Chief Technology Officer</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgManoj})` }}
            ></div>
            <h4 className="mb-1">Manoj Ban</h4>
            <p>Business Development</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgDharmendra})` }}
            ></div>
            <h4 className="mb-1">Dharmendra Rai</h4>
            <p>Project Manager</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgShankar})` }}
            ></div>
            <h4 className="mb-1">Shankar Bhattarai</h4>
            <p>Software Engineer</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgSubodh})` }}
            ></div>
            <h4 className="mb-1">Subodh Upreti</h4>
            <p>Software Engineer</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgSamrat})` }}
            ></div>
            <h4 className="mb-1">Samrat KC</h4>
            <p>Graphics Designer</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgSantosh})` }}
            ></div>
            <h4 className="mb-1">Santosh Rai</h4>
            <p>Network & Support</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgSabina})` }}
            ></div>
            <h4 className="mb-1">Sabina Shrestha</h4>
            <p>Sales & Marketing</p>
          </div>
          <div className="col-6 col-md-3 mb-8 mb-lg-12">
            <div
              className="img-holder mx-auto mb-3"
              style={{ backgroundImage: `url(${imgSapana})` }}
            ></div>
            <h4 className="mb-1">Sapana Rai</h4>
            <p>Sales & Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
