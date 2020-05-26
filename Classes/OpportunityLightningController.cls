public class OpportunityLightningController {
	@AuraEnabled
    public static void opportunityEndOfMonth(String opportunityId) {
        OpportunityForecastHelper.setEndDateOfMonth(opportunityId);
    }
}
