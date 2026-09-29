/**
 * Client Script: Prevent save if Assigned To missing
 * Table: incident
 * Type: onSubmit
 * UI Type: All (Desktop / Mobile / Service Portal)
 * Description: Enforces Assigned To field requirement when Impact is High (1). Prevents form submission and shows field error message if missing.
 */
function onSubmit() {
    var impact = g_form.getValue('impact');
    var assignedTo = g_form.getValue('assigned_to');
    if (impact == '1' && (!assignedTo || assignedTo.trim() === '')) {
        g_form.showFieldMsg('assigned_to', 'Assigned To is mandatory for High impact incidents.', 'error');
        return false;
    }
}
