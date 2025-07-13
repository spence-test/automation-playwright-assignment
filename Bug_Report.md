# 🐞 Bug Report Summary

## Description

This report contains a list of usability and validation bugs found during functional testing of the hotel booking website. The issues affect user input validation, navigation behavior, content visibility, booking logic, and administrative room management.

## Environment

- **OS:** Windows 10 / macOS Ventura
- **URL Tested:** https://automationintesting.online
- **Browsers Tested:** Chrome 125.0
- **Device:** Desktop & Laptop
- **App Version:** v1.0.0 (Staging)
- **Date Reported:** July 13, 2025

---

## BUG-001: Amenities page does not load or display content

**Steps to Reproduce:**

1. Go to homepage
2. Click Amenities Link

**Expected Result:**  
Page scrolls to or loads an "Amenities" section.

**Actual Result:**  
No section appears. Page does not scroll or update.

---

## BUG-002: Footer Quick Links Do Not Navigate to Target Sections

**Steps to Reproduce:**

1. Scroll to the bottom of the page
2. Click any link under "Quick Links" (e.g., Home, Rooms, Contact)

**Expected Result:**  
Page should scroll or navigate to the relevant section.

**Actual Result:**  
Clicking links has no effect; no section highlight occurs.

---

## BUG-003: Room Descriptions Use Latin Text Instead of English

**Steps to Reproduce:**

1. Visit the homepage
2. Scroll to the “Rooms” section
3. Read the room descriptions

**Expected Result:**  
Each room should have a real, descriptive summary of its features.

**Actual Result:**  
Descriptions use default placeholder text (e.g., Lorem Ipsum).

---

## BUG-004: Booking Form Accepts Past Check-In and Check-Out Dates

**Steps to Reproduce:**

1. Visit the homepage
2. Click "Book this room" on any room
3. Enter a check-in and check-out date in the past (e.g., 01/07 - 03/07)
4. Fill all other required fields
5. Submit the booking

**Expected Result:**  
Form should reject past dates and display a validation error.

**Actual Result:**  
Booking is accepted and submitted without warning.

---

## BUG-005: Admin Can Add Duplicate Room Numbers

**Steps to Reproduce:**

1. Log in as an admin
2. Navigate to the "Add Room" section
3. Add a room with room number `101`
4. Repeat the process and add another room with the same room number `101`

**Expected Result:**  
System should reject duplicate room numbers or display a validation warning.

**Actual Result:**  
Admin can add the same room number multiple times, leading to data duplication.

---

## BUG-006: Reservation Form Allows Invalid Characters in Name and Phone Fields

**Steps to Reproduce:**

1. Go to homepage
2. Select a room and proceed to the reservation form
3. Enter `@#1234` in the Name field and `abcd!` in the Phone field
4. Submit the form

**Expected Result:**  
Name field should allow only alphabetic characters; phone field should allow only digits.

**Actual Result:**  
Form accepts invalid characters and submits without error.
