// utils/ElementUtils.js

// Function to check if an element is visible
async function isVisible(page, xpath) {
    const element = page.locator(xpath);
    const isVisible = await element.isVisible();
    return isVisible; // Returns true if the element is visible, false otherwise
  }
  
  // Function to check if an element is clickable (visible and enabled)
  async function isClickable(page, xpath) {
    const element = page.locator(xpath);
    const isEnabled = await element.isEnabled();
    const isVisible = await element.isVisible();
    return isEnabled && isVisible; // Returns true if the element is visible and enabled
  }
  
  module.exports = { isVisible, isClickable };
  