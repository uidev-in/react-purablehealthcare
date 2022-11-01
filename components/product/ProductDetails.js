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
                <p className="para">
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
                      borderColor: "#fd9121",
                      backgroundColor: "#fd9121",
                      color: "#ffffff",
                      borderRadius: "3px",
                    },
                  }}
                  controls={[
                    <button type="button" className="pd_tab">
                      Description
                    </button>,
                    <button type="button" className="pd_tab">
                      Additonal Info
                    </button>,
                  ]}
                >
                  <div className="pd_tab_details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                  </div>

                  <div className="pd_tab_details">
                    <div className="table-responsive">
                      <h4>Additional information</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Weight</th>
                            <td className="product_weight">1.4 oz</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td className="product_dimensions">
                              62 × 56 × 12 in
                            </td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td className="product_dimensions">
                              XL, XXL, LG, SM, MD
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
