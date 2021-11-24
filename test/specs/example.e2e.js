var expect = require('chai').expect

beforeEach(() => {
 driver.launchApp()
})

afterEach(() => {
 driver.closeApp()
})

describe('Verify Login Scenarios on Saxobank React Native Mobile App', () => {
 it('User should not be able to login using wrong credentials to Saxobank Mobile App', () => {   
   $('//android.widget.EditText[@resource-id="field_userid"]').waitForDisplayed(20000)
   $('//android.widget.EditText[@resource-id="field_userid"]').setValue('Valid-Email')
   $('//android.widget.EditText[@resource-id="field_password"]').waitForDisplayed(20000)
   $('//android.widget.EditText[@resource-id="field_password"]').setValue('Valid-Password')
   $('//android.widget.Button[@resource-id="button_login"]').click()

   let elem = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[6]/android.widget.TextView')

   expect(elem).to.equal(elem)

 })

 it('User should be able to login using valid credentials to Saxobank Mobile App', () => {   
  $('//android.widget.EditText[@resource-id="field_userid"]').waitForDisplayed(20000)
  $('//android.widget.EditText[@resource-id="field_userid"]').setValue('XXXX')
  $('//android.widget.EditText[@resource-id="field_password"]').waitForDisplayed(20000)
  $('//android.widget.EditText[@resource-id="field_password"]').setValue('XXXX')
  $('//android.widget.Button[@resource-id="button_login"]').click()
  $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]').click()
  $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[8]/android.view.View/android.view.View').click()
  $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.Button').click()
  
  let elem =  $('//android.widget.EditText[@resource-id="field_userid"]')
  
  expect(elem).to.equal(elem)
 
})

})