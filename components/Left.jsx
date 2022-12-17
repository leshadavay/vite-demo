import React from "react";
import ProgressBar from "./ProgressBar";

const Left = () => {
  return (
    <div className="slide w-100" data-aos="zoom-out-right">
      <div className="slide-body">
        <div className="header-title text-uppercase">
          SHARIAH COMPLIANCE <br />
          STATUS: Compliant
        </div>
        <div>
          <div className="pt-4 sub-title">Business screening</div>
          <div className="py-1 sub-title-description">Revenue ratio</div>
        </div>
        <div className="d-flex w-100 position-relative py-3">
          <div
            className="bar-height-normal border-radius-normal bg-green position-absolute"
            style={{ width: "88%", zIndex: 2 }}
          ></div>
          <div
            className="bar-height-normal border-radius-normal position-absolute bg-yellow"
            style={{ width: "90%", zIndex: 1 }}
          ></div>
          <div
            className="bar-height-normal border-radius-normal position-absolute bg-red"
            style={{ width: "100%", zIndex: 0 }}
          ></div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex flex-row">
            <div className="d-flex h-100 bar-width-normal border-radius-bigger bg-green"></div>
            <div className="d-flex flex-column mx-2">
              <div className="sub-title-description">Compliant</div>
              <div className="text-green text-bolder">99.80%</div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex h-100 bar-width-normal border-radius-bigger bg-yellow"></div>
            <div className="d-flex flex-column mx-2">
              <div className="sub-title-description">Doubtful</div>
              <div className="text-yellow text-bolder">00.0%</div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex h-100 bar-width-normal border-radius-bigger bg-red"></div>
            <div className="d-flex flex-column mx-2">
              <div className="sub-title-description">Non-compliant</div>
              <div className="text-red text-bolder">0.20%</div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4 sub-title">Business screening</div>
          <div className="d-flex flex-row justify-content-between align-items-center my-2">
            <div className="d-flex flex-column justify-content-center col-5">
              <div className="sub-title-description">
                Prohibited funding ratio
              </div>
            </div>
            <div className="d-flex flex-column col-7">
              <div className="d-flex flex-row gap-1">
                <div className="text-green text-light-bold col-3">11.2%</div>
                <div className="d-flex position-relative col-9">
                  <ProgressBar type={"bg-green"} width={46} />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center my-2">
            <div className="d-flex flex-column justify-content-center col-5">
              <div className="sub-title-description">
                Prohibited assets ratio
              </div>
            </div>
            <div className="d-flex flex-column col-7">
              <div className="d-flex flex-row gap-1">
                <div className="text-green text-light-bold col-3">5.0%</div>
                <div className="d-flex position-relative col-9">
                  <div className="position-relative d-flex w-100">
                    <div className="position-absolute vertical-red-line"></div>
                  </div>
                  <ProgressBar type={"bg-green"} width={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4 sub-title">Additional screening</div>
          <div className="d-flex flex-row justify-content-between align-items-center my-2 border-bottom-green">
            <div className="d-flex flex-column justify-content-center">
              <div className="sub-title-description">
                Interest expense / Total income
              </div>
            </div>
            <div className="text-green text-bolder">64.0%</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center my-2 border-bottom-yellow">
            <div className="d-flex flex-column justify-content-center">
              <div className="sub-title-description">
                Prohibited funding / Total assets
              </div>
            </div>
            <div className="text-yellow text-bolder">33.30%</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center my-2 border-bottom-yellow">
            <div className="d-flex flex-column justify-content-center">
              <div className="sub-title-description">
                Prohibited assets / Total assets
              </div>
            </div>
            <div className="text-yellow text-bolder">13.6%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
