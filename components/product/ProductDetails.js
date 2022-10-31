import React, { useState } from "react";
import Tabs from "react-simply-tabs";
import { Col, Container, Row } from "react-bootstrap";
import Puralbumen from "@images/products/Puralbumen_Powder.jpeg";

export default function ProductDetails() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <section className="product_detail_wrapper">
        <Container>
          <Row>
            <Col md={6}>
              <div className="pd_img">
                <img src={Puralbumen} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="pd_content">
                <h2 className="pd_title">Puralbumen Powder</h2>
                <div className="price details-price pb-30 mb-20">
                  <span className="text-dark font-weight-bold">Price : </span>
                  <span className="text-success font-weight-bold">
                    ₹1399.00
                  </span>
                  <span className="text-dark"> / 400gm</span>
                </div>
                <p className="">
                  High protein from quality whey, supports faster recovery
                </p>
                <div className="pd_benifits">
                  <h6>Benefits :</h6>
                  <ul style={{ lineHeight: "30px" }}>
                    <li>
                      » High protein from quality whey, supports faster recovery
                    </li>
                    <li>
                      » Maintain positive N-Balance thus prevent loss of lean
                      body mass &amp; support anabolism
                    </li>
                    <li>» Increases pharmacological response</li>
                    <li>» Contains BCAA's for faster tissue regeneration</li>
                    <li>» Provides Omega 3 &amp; Omega 6 fatty acids</li>
                    <li>» Fulfils increased nutritional requirements</li>
                    <li>» Gluten free &amp; preservative free</li>
                    <li>» Improves quality of life</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="product_detail_description">
                <Tabs
                  activeTabIndex={activeTabIndex}
                  onRequestChange={setActiveTabIndex}
                  activeControlProps={{
                    className: "active",
                    style: {
                      borderColor: "#cd0880",
                      backgroundColor: "#cd0880",
                      color: "#ffffff",
                      borderRadius: "3px",
                    },
                  }}
                  controls={[
                    <button type="button" className="">
                      Description
                    </button>,
                    <button type="button" className="">
                      Additonal Info
                    </button>,
                  ]}
                >
                  <div>
                    <p>asdkjnkasdfnk</p>
                  </div>

                  <div>
                    <p>sdfgklhkjdsngfkb</p>
                  </div>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
