import { getHeaders } from "../utils/http";
import AxiosClient from "./axiosClient";
import { CartContext } from "../context/CartContext";


//const {REACT_APP_BASE_URL,REACT_APP_PAYMENT_ENDPOINT} = process.env;
const REACT_APP_BASE_URL = 'http://localhost:8080'
const REACT_APP_PAYMENT_ENDPOINT = '/api/payments'

export default class PaymentService {
    constructor() {
        this.client = new AxiosClient();
    }
    createPaymentIntent = ({productId,callbackSuccess,callbackError}) => {
        console.log("endpoint", REACT_APP_PAYMENT_ENDPOINT)
        console.log("SERVER", REACT_APP_BASE_URL)
        const requestInfo = {url:`https://ehqbackend-production.up.railway.app/api/payment-intents?id=${productId}`,callbackSuccess,callbackError};
        this.client.makePostRequest(requestInfo);
    }

    pay = ({body,callbackSuccess,callbackError}) => {
        const requestInfo = {url:`${REACT_APP_BASE_URL}${REACT_APP_PAYMENT_ENDPOINT}/checkout`,body,config:getHeaders(),callbackSuccess,callbackError}
        this.client.makePostRequest(requestInfo);
    }
}