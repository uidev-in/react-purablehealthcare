import Footer from "@components/footer";
import Header from "@components/header/header";
import HeaderInner from "@components/header/header-inner";
import Layout from "@components/layout";
import MobileNavInner from "@components/mobile-nav-inner";
import PageHeader from "@components/page-header";
import ProductDetails from "@components/product/ProductDetails";
import Subscribe from "@components/subscribe";
import React from "react";

export default function ProductDetail() {
  return (
    <div>
      <Layout pageTitle="Product Name || Comapny Name">
        <Header />
        <PageHeader title="Product Name" crumbTitle="Blog Details" />
        <ProductDetails />
        <Subscribe />
        <Footer />
        <MobileNavInner />
      </Layout>
    </div>
  );
}
