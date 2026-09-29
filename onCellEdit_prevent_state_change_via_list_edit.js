/**
 * Client Script: Prevent state change via list edit
 * Table: incident
 * Type: onCellEdit
 * Field: state
 * UI Type: All (Desktop / Mobile / Service Portal)
 * Description: Prevents inline list editing of the State column on the Incident table and notifies the user via an alert dialog.
 */
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = false;
    alert('State cannot be updated using list editing. Please open the Incident.');
    callback(saveAndClose);
}
