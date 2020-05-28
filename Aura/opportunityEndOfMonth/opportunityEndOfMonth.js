({
	handleNo : function(component, event, helper) {
		component.find("overlayLib").notifyClose();	
	},
    handleYes : function(component, event, helper) {
        component.set("v.spinner",true);
		let oppId = component.get("v.recordId");
        let action = component.get("c.opportunityEndOfMonth");
        action.setParams({ opportunityId : oppId });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                  "recordId": oppId,
                  "slideDevName": "Detail"
                });
                navEvt.fire();
                component.set("v.spinner",false);
            }else {
                alert('Error!');
            }
        });
	 	$A.enqueueAction(action);
	}  
})
