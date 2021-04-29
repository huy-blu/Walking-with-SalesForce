({
    openModal : function(component, event, helper) {
        var params = event.getParam('arguments') || event.getParams();
		component.set('v.isOpen',params.openModal);
    },
    closeModal : function(component, event, helper) {
		component.set('v.isOpen',false);
    },
    capNhat : function(component, event, helper) {
        console.log('a');
		// var action = component.get('c.capNhat');
        var hs = {
            'sobjectType': 'HocSinh__c',
            'TenHocSinh__c': 'Haaa'
        };
        component.set('v.hocSinh', hs);
        // action.setParam({
        //     hocSinh: hs
        // });
        console.log(component.get('v.hocSinh'));
        // action.setCallback(this, function(respone){
        //     var state1 = respone.getState();
        //     if(state1 = 'SUCCESS'){
        //         var kq = respone.getReturnValue();
        //         console.log(kq);
        //     }               
        // });
        // $A.enqueueAction(action);
    }
})