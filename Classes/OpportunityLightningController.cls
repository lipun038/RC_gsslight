public class OpportunityLightningController {
	@AuraEnabled
    public static void opportunityEndOfMonth(String opportunityId) {
        OpportunityForecastHelper.setEndDateOfMonth(opportunityId);
    }
    @AuraEnabled
    public static void opportunityEndOfQuarter(String opportunityId) {
        OpportunityForecastHelper.setEndDateOfQuater(opportunityId);
    }
}
