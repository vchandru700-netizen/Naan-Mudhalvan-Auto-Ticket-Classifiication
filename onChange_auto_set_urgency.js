/**
 * Client Script: Auto set urgency for high impact
 * Table: incident
 * Type: onChange
 * Field: impact
 * UI Type: All (Desktop / Mobile / Service Portal)
 * Description: Automatically sets urgency to High (1) and displays an info message when impact is changed to High (1).
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (newValue == '1') {
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage('Urgency set to High for High impact incident.');
    }
}
