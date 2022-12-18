import React from "react";
import ProgressBar from "./ProgressBar";

const Right = () => {
  return (
    <div className="slide " data-aos="fade-up">
      <div className="slide-body">
        <div className="header-title text-uppercase">OVERALL SCORE</div>
        <div className="d-flex justify-content-between mt-5">
          <div className="text-xlarge">7.7/10.0</div>
          <div className="align-items-end d-flex justify-content-between">
            <div className="align-items-center d-flex gap-2">
              <div className="text-muted">Reliable</div>
              <div className="text-green">94%</div>
              <div className="text-green arrow up mt-2"></div>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 position-relative py-3">
          <ProgressBar type={"bg-green border-left-none"} width={100} />
        </div>
        <div className="d-flex justify-content-between mt-4 align-items-center">
          <div className="sub-title col-5">Financial strength</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-dark-green">
              9
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green-dark border-left-none"} width={80} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Profitability</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-dark-green">
              10
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green-dark border-left-none"} width={87} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Effectiveness</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-dark-green">
              10
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green-dark border-left-none"} width={87} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Growth</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-green">
              7
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green border-left-none"} width={65} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Forecast</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-yellow">
              5
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-yellow border-left-none"} width={45} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Valuation</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-green">
              7
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green border-left-none"} width={65} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Dividend</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-green">
              8
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green border-left-none"} width={75} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="sub-title col-5">Economic moat</div>
          <div className="col-7 d-flex">
            <div className="align-items-center border border-dark d-flex justify-content-center number-box text-bolder text-yellow">
              6
            </div>

            <div className="align-items-center d-flex position-relative w-100">
              <ProgressBar type={"bg-green border-left-none"} width={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
