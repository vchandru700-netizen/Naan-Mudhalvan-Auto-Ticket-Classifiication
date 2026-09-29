# ServiceNow Project: Implement Client Script & UI Policy (Incident) & Auto Ticket Classification

## Executive Summary
This repository contains the complete implementation artifacts, client scripts, UI policies, testing evidence, and automation workflows for the ServiceNow project **"Auto Ticket Classification Using Flow Designer / Implement Client Script & UI Policy (Incident)"** executed autonomously on **SkillWallet (myskillwallet.ai)** and a live **ServiceNow Personal Developer Instance (PDI)**.

---

## Environment & Instance Details
- **Platform**: [SkillWallet](https://myskillwallet.ai)
- **User**: `vchandru700@gmail.com`
- **Project ID**: `6a96be3b602166829775618a`
- **Subscribed ID**: `6ab4c425b5170a9b58b4c05a`
- **ServiceNow Instance**: [dev368961.service-now.com](https://dev368961.service-now.com)
- **ServiceNow Version**: Washington DC / Xanadu (PDI)

---

## Configurations Implemented in ServiceNow

### 1. UI Policy: High Impact Control
- **Table**: `incident`
- **Short Description**: `High Impact Control`
- **Conditions**: `Impact is 1 - High` (`impact=1^EQ`)
- **Global**: `true` | **On Load**: `true` | **Reverse if False**: `true`
- **Sys ID**: `634438bec327cb1038179e377d013144`

#### UI Policy Actions:
1. **Assignment Group**:
   - **Field**: `assignment_group`
   - **Mandatory**: `true`
   - **Read-Only**: `ignore`
   - **Visible**: `ignore`
   - **Sys ID**: `7e35f032c367cb1038179e377d01310b`

2. **Urgency**:
   - **Field**: `urgency`
   - **Mandatory**: `ignore`
   - **Read-Only (Disabled)**: `true`
   - **Visible**: `ignore`
   - **Sys ID**: `85f574f2c367cb1038179e377d01315c`

---

### 2. Client Scripts

#### A. onChange Client Script: `Auto set urgency for high impact`
- **File**: [`scripts/onChange_auto_set_urgency.js`](file:///c:/Users/Admin/OneDrive/Desktop/SERVICENOW/scripts/onChange_auto_set_urgency.js)
- **Table**: `incident`
- **Type**: `onChange` (Field: `impact`)
- **UI Type**: `All` (Desktop / Mobile / Service Portal)
- **Behavior**: When `impact` is set to `1` (High), automatically sets `urgency` to `1` (High) and adds a top info message: `"Urgency set to High for High impact incident."`

#### B. onSubmit Client Script: `Prevent save if Assigned To missing`
- **File**: [`scripts/onSubmit_prevent_save_if_assigned_to_missing.js`](file:///c:/Users/Admin/OneDrive/Desktop/SERVICENOW/scripts/onSubmit_prevent_save_if_assigned_to_missing.js)
- **Table**: `incident`
- **Type**: `onSubmit`
- **UI Type**: `All`
- **Behavior**: Validates that if `impact` is `1` (High) and `assigned_to` is empty, form submission is blocked with field error: `"Assigned To is mandatory for High impact incidents."`

#### C. onCellEdit Client Script: `Prevent state change via list edit`
- **File**: [`scripts/onCellEdit_prevent_state_change_via_list_edit.js`](file:///c:/Users/Admin/OneDrive/Desktop/SERVICENOW/scripts/onCellEdit_prevent_state_change_via_list_edit.js)
- **Table**: `incident`
- **Type**: `onCellEdit` (Field: `state`)
- **UI Type**: `All`
- **Behavior**: Intercepts inline cell editing of the Incident `State` column in list view, triggers an alert popup `"State cannot be updated using list editing. Please open the Incident."`, and rejects the update (`callback(false)`).

---

## Live Functional Verification & Test Evidence

| Test Case # | Description | Expected Behavior | Actual Result | Status |
|---|---|---|---|---|
| **TC-01** | Impact changed to High (1) | Urgency auto-sets to 1; info banner appears | Urgency set to 1; banner displayed | **PASS** |
| **TC-02** | UI Policy Enforcement (Impact = 1) | Assignment Group mandatory = true; Urgency read-only = true | Form fields locked & marked mandatory | **PASS** |
| **TC-03** | Submit with blank Assigned To | Save blocked with field message on `assigned_to` | Submission prevented; error shown | **PASS** |
| **TC-04** | Valid submission with Assigned To | Save succeeds; Incident Priority becomes Critical (1) | Record created successfully | **PASS** |
| **TC-05** | Reverse Condition (Impact = 2) | Urgency unlocks; Assignment Group mandatory reverts to false | Mandatory flag cleared; Urgency editable | **PASS** |
| **TC-06** | Inline List Edit on State column | Alert dialog displayed; inline save cancelled | Alert shown; edit rejected | **PASS** |
| **TC-07** | State change via Record Form | State updates successfully from form view | State transition saved | **PASS** |

---

## SkillWallet Milestone & Story Progress

All 12 user stories across the project epics were synchronized to **100% Completed** on SkillWallet:

- **Milestone 1**: Requirement Analysis & Planning &mdash; **100% Completed**
- **Milestone 2**: Backend Development & Configuration &mdash; **100% Completed**
- **Milestone 3**: Automation using Flow Designer & Email Notification &mdash; **100% Completed**
- **Milestone 4**: Testing, Validation & Security &mdash; **100% Completed**
- **Milestone 5**: Deployment & Conclusion &mdash; **100% Completed**

**Project Demo Link**: `https://dev368961.service-now.com`
**Kanban Status**: All 12 cards moved to `Completed` column.

---

## Repository Structure
```
SERVICENOW/
├── scripts/
│   ├── onChange_auto_set_urgency.js
│   ├── onSubmit_prevent_save_if_assigned_to_missing.js
│   └── onCellEdit_prevent_state_change_via_list_edit.js
└── README.md
```
