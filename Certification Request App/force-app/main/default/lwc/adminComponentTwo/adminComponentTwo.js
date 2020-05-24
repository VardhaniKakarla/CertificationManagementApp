import { LightningElement,wire } from 'lwc';
import getdata from '@salesforce/apex/CertificationRequests.getDraftRequests';
import updateRequest from '@salesforce/apex/CertificationRequests.updateRequest';

export default class AdminComponentTwo extends LightningElement {
    Requests;
    @wire (getdata)
    getApexData({error,data}){
        if(data){
            console.log(data);
            this.Requests=data;
           // var req=data[0];
           // console.log(req.Name);
        }
        if(error){
            console.log('error has occured');
        }
    }

    ind;
    approvereq(event){
        // alert('button working');
         this.ind=event.target.value;
         //alert('index : '+this.ind);
         this.ReqRecordId = this.Requests[this.ind].Id;
        // alert('Record Id : '+this.ReqRecordId);
        updateRequest({ReqRecordId:this.ReqRecordId,status:'Approved'}).then(result=>{if(result=='Request Updated Successfully'){alert(result);window.location.reload();}else alert(result);});
     }
    rejectreq(event){
        // alert('button working');
         this.ind=event.target.value;
         //alert('index : '+this.ind);
         this.ReqRecordId = this.Requests[this.ind].Id;
        // alert('Record Id : '+this.ReqRecordId);
        updateRequest({ReqRecordId:this.ReqRecordId,status:'Rejected'}).then(result=>{if(result=='Request Updated Successfully'){alert(result);window.location.reload();}else alert(result);});
     }

}