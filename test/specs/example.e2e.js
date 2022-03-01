describe('Verify Login Scenarios on Saxobank React Native Mobile App', () => {
 it('User should not be able to login using wrong credentials to Saxobank Mobile App', async () => {  
   var loginSelector = await $('//android.widget.EditText[@resource-id="field_userid"]');
   await loginSelector.waitForDisplayed({ timeout: 30000 });
   await loginSelector.setValue('Valid-Email');

   var passwordSelector = await $('//android.widget.EditText[@resource-id="field_password"]');
   await passwordSelector.waitForDisplayed({ timeout: 30000 });
   await passwordSelector.setValue('Valid-Password');

   var loginButtonSelector = await $('//android.widget.Button[@resource-id="button_login"]');
   await loginButtonSelector.click();
   await loginButtonSelector.waitForDisplayed({ timeout: 30000 });

   await expect(passwordSelector).toExist();

 })

 it.only('User should be able to login using valid credentials to Saxobank Mobile App', async () => {   
  var loginSelector = await $('//android.widget.EditText[@resource-id="field_userid"]');
  await loginSelector.waitForDisplayed({ timeout: 30000 });
  await loginSelector.setValue('xpiol');

  var passwordSelector = await $('//android.widget.EditText[@resource-id="field_password"]');
  await passwordSelector.waitForDisplayed({ timeout: 30000 });
  await passwordSelector.setValue('123');

  var loginButtonSelector = await $('//android.widget.Button[@resource-id="button_login"]');
  await loginButtonSelector.click();

  
  var contexts = driver.getContexts();
  console.log("All contexts: ", contexts)

  // await driver.switchContext(contexts[1]);
  await driver.switchContext('WEBVIEW_com.saxobank.go.test');
  

 /* var button_disclaimer_webview = await $('[class="btn--link"]');
  await button_disclaimer_webview.waitForExist({ timeout: 50000 });
  await button_disclaimer_webview.click();  Need to add test for disclaimer for using old webview for olders devices with Android*/

  var risk_warrning_button = await $('[data-test-id="risk-warning-accept"]'); /* Need to add if in the future as not always appears */
  await risk_warrning_button.waitForExist({ timeout: 20000 });
  await risk_warrning_button.click();

  var button_trading = await $('[data-test-id="Trading"]');
  await button_trading.waitForExist({ timeout: 20000 });
  await button_trading.click();

  var button_research = await $('[data-test-id="Research"]');
  await button_research.click();

  var button_search = await $('[data-test-id="Search"]');
  await button_search.click();

  var button_account = await $('[data-test-id="Account"]');
  await button_account.click();

  var button_menu = await $('[data-test-id="Menu"]');
  await button_menu.click();

  var button_logout = await $('[data-test-id="logout"]');
  await button_logout.click();

  var button_logout_yes = await $('[data-test-id="confirm"]');
  await button_logout_yes.click();
  
  await driver.switchContext('NATIVE_APP');

  await expect(passwordSelector).toExist();
 
})

})