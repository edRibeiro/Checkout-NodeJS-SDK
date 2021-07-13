'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Authorizes payment for an order. The response shows authorization details.
 **/
class CustomersPartnerReferralsRequest {
  constructor() {
    this.path = '/v2/customer/partner-referrals?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(customersPartnerReferralsActionRequest) {
    this.body = customersPartnerReferralsActionRequest;
    return this;
  }
}

module.exports = { CustomersPartnerReferralsRequest: CustomersPartnerReferralsRequest };