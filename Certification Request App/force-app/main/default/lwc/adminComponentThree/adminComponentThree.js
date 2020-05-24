import { LightningElement, wire } from 'lwc';
import getdata from '@salesforce/apex/CertificationRequests.getApprovedRequests';
import getdata1 from '@salesforce/apex/CertificationRequests.getRejectedRequests';
import getdata2 from '@salesforce/apex/CertificationRequests.getAssignedRequests';
export default class AdminComponentThree extends LightningElement {
    Requests;
    Requests1;
    Requests2;
    @wire(getdata)
    getApexData({ error, data }) {
        if (data) {
            console.log(data);
            this.Requests = data;
            // var req = data[0];
            // console.log(req.Name);
        }
        if (error) {
            console.log('error has occured');
        }
    }

    @wire(getdata1)
    getApexData1({ error, data }) {
        if (data) {
            console.log(data);
            this.Requests1 = data;
            var req1 = data[0];
            console.log(req1.Name);
        }
        if (error) {
            console.log('error has occured');
        }
    }

    @wire(getdata2)
    getApexData2({ error, data }) {
        if (data) {
            console.log(data);
            this.Requests2 = data;
            var req2 = data[0];
            console.log(req2.Name);
        }
        if (error) {
            console.log('error has occured');
        }
    }


}