var expect = require('chai').expect

beforeEach(() => {
 driver.launchApp()
})

afterEach(() => {
 driver.closeApp()
})

describe('Verify Login Scenarios on Saxobank React Native Mobile App', () => {
 it('User should be able to login using valid credentials to Saxobank Mobile App', () => {   
   $('//android.widget.EditText[@resource-id="field_userid"]').waitForDisplayed(20000)
   $('//android.widget.EditText[@resource-id="field_userid"]').setValue('Valid-Email')
   $('//android.widget.EditText[@resource-id="field_password"]').waitForDisplayed(20000)
   $('//android.widget.EditText[@resource-id="field_password"]').setValue('Valid-Password')
   $('//android.widget.Button[@resource-id="button_login"]').click()
   browser.pause(10000)
 })

})