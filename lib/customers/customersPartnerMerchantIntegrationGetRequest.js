"use strict";

const querystring = require("querystring"); // eslint-disable-line no-unused-vars
/**
 Authorizes payment for an order. The response shows authorization details.
 **/
class CustomersPartnerMerchantIntegrationGetRequest {
  constructor(partnerMerchantId, sellerMerchantId) {
    this.path =
      "/v1/customer/partners/{partner_merchant_id}/merchant-integrations/{seller_merchant_id}?";
    this.path = this.path.replace(
      "{partner_merchant_id}",
      querystring.escape(partnerMerchantId)
    );
    this.path = this.path.replace(
      "{seller_merchant_id}",
      querystring.escape(sellerMerchantId)
    );
    this.verb = "GET";
    this.body = null;
    this.headers = {
      "Content-Type": "application/json",
    };
  }
}

module.exports = {
  CustomersPartnerMerchantIntegrationGetRequest:
    CustomersPartnerMerchantIntegrationGetRequest,
};
