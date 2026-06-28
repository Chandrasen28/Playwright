# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\logintestcase.spec.ts >> LGN--014- Login response time
- Location: tests\logintestcase.spec.ts:134:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   3319
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - list [ref=e8]:
            - listitem [ref=e9]:
              - link "" [ref=e10] [cursor=pointer]:
                - /url: javascript:;
                - generic [ref=e11]: 
          - list [ref=e13]:
            - listitem [ref=e14]:
              - link "ACPL Logo" [ref=e16] [cursor=pointer]:
                - /url: /
                - img "ACPL Logo" [ref=e18]
        - list [ref=e21]:
          - listitem [ref=e22]:
            - link "SUNITA GURAV ACPL2317 SG" [ref=e23] [cursor=pointer]:
              - /url: javascript:;
              - generic [ref=e24]:
                - generic [ref=e25]: SUNITA GURAV
                - generic [ref=e26]: ACPL2317
              - generic [ref=e28]: SG
            - text: 
    - generic [ref=e30]:
      - generic [ref=e35]:
        - paragraph [ref=e38]: Click on respective card to access the application(s)
        - generic [ref=e39]:
          - generic [ref=e44] [cursor=pointer]:
            - heading "Contact For Support" [level=3] [ref=e46]
            - generic [ref=e48]: 
          - generic [ref=e53] [cursor=pointer]:
            - heading "Admin" [level=3] [ref=e55]:
              - text: Admin
              - status [ref=e56]:
                - generic [ref=e57]: Loading...
            - generic [ref=e59]: 
          - generic [ref=e64] [cursor=pointer]:
            - heading "Container" [level=3] [ref=e66]:
              - text: Container
              - status [ref=e67]:
                - generic [ref=e68]: Loading...
            - generic [ref=e70]: 
          - generic [ref=e75] [cursor=pointer]:
            - heading "HR" [level=3] [ref=e77]:
              - text: HR
              - status [ref=e78]:
                - generic [ref=e79]: Loading...
            - generic [ref=e81]: 
          - generic [ref=e86] [cursor=pointer]:
            - heading "Truck" [level=3] [ref=e88]:
              - text: Truck
              - status [ref=e89]:
                - generic [ref=e90]: Loading...
            - generic [ref=e92]: 
          - generic [ref=e97] [cursor=pointer]:
            - heading "LCL" [level=3] [ref=e99]:
              - text: LCL
              - status [ref=e100]:
                - generic [ref=e101]: Loading...
            - generic [ref=e103]: 
          - generic [ref=e108] [cursor=pointer]:
            - heading "Cofleet" [level=3] [ref=e110]:
              - text: Cofleet
              - status [ref=e111]:
                - generic [ref=e112]: Loading...
            - generic [ref=e114]: 
          - generic [ref=e119] [cursor=pointer]:
            - heading "HelpDesk" [level=3] [ref=e121]:
              - text: HelpDesk
              - status [ref=e122]:
                - generic [ref=e123]: Loading...
            - generic [ref=e125]: 
          - generic [ref=e130] [cursor=pointer]:
            - heading "Carrier_New" [level=3] [ref=e132]:
              - text: Carrier_New
              - status [ref=e133]:
                - generic [ref=e134]: Loading...
            - generic [ref=e136]: 
          - generic [ref=e141] [cursor=pointer]:
            - heading "Carrier" [level=3] [ref=e143]:
              - text: Carrier
              - status [ref=e144]:
                - generic [ref=e145]: Loading...
            - generic [ref=e147]: 
          - generic [ref=e152] [cursor=pointer]:
            - heading "ETransUAT" [level=3] [ref=e154]:
              - text: ETransUAT
              - status [ref=e155]:
                - generic [ref=e156]: Loading...
            - generic [ref=e158]: 
          - generic [ref=e163] [cursor=pointer]:
            - heading "EPreprod" [level=3] [ref=e165]:
              - text: EPreprod
              - status [ref=e166]:
                - generic [ref=e167]: Loading...
            - generic [ref=e169]: 
          - generic [ref=e174] [cursor=pointer]:
            - heading "ContainerNw" [level=3] [ref=e176]:
              - text: ContainerNw
              - status [ref=e177]:
                - generic [ref=e178]: Loading...
            - generic [ref=e180]: 
          - generic [ref=e185] [cursor=pointer]:
            - heading "LCL_New" [level=3] [ref=e187]:
              - text: LCL_New
              - status [ref=e188]:
                - generic [ref=e189]: Loading...
            - generic [ref=e191]: 
          - generic [ref=e196] [cursor=pointer]:
            - heading "MFA" [level=3] [ref=e198]:
              - text: MFA
              - status [ref=e199]:
                - generic [ref=e200]: Loading...
            - generic [ref=e202]: 
          - generic [ref=e207] [cursor=pointer]:
            - heading "TMS" [level=3] [ref=e209]:
              - text: TMS
              - status [ref=e210]:
                - generic [ref=e211]: Loading...
            - generic [ref=e213]: 
          - generic [ref=e218] [cursor=pointer]:
            - heading "CSAPortal" [level=3] [ref=e220]:
              - text: CSAPortal
              - status [ref=e221]:
                - generic [ref=e222]: Loading...
            - generic [ref=e224]: 
      - contentinfo [ref=e226]:
        - paragraph [ref=e227]:
          - text: Copyright © 2026
          - link "ACPLCARGO" [ref=e228] [cursor=pointer]:
            - /url: https://etranscargo.in
          - generic [ref=e229]: ", All rights reserved."
  - img [ref=e231]
```

# Test source

```ts
  43  | // Test Case 5: Password entered, username empty
  44  | test('LGN-005- Password entered, username empty', async ({ page }) => {
  45  |   const loginPage = new Identity(page);
  46  | 
  47  |   await loginPage.enterPassword('1234');
  48  |   await loginPage.clickSubmit();
  49  |   await expect(loginPage.errorMessageUsername).toHaveText('Please enter username');
  50  | });
  51  | 
  52  | // Test Case 6: Invalid username and valid password
  53  | test('LGN-006- Invalid username and valid password', async ({ page }) => {
  54  |   const loginPage = new Identity(page);
  55  | 
  56  |   await loginPage.enterUsername('ACPL231');
  57  |   await loginPage.enterPassword('1234');
  58  |   await loginPage.clickSubmit();
  59  | 
  60  |   await expect(loginPage.credentialsError).toContainText("doesn't exist or credentials are incorrect");
  61  | });
  62  | 
  63  | // Test Case 7: Valid username and Invalid Password
  64  | test('LGN-007- Valid username and Invalid Password', async ({ page }) => {
  65  |   const loginPage = new Identity(page);
  66  | 
  67  |   await loginPage.enterUsername('ACPL2317');
  68  |   await loginPage.enterPassword('1455'); // Fixed: This now properly targets password field
  69  |   await loginPage.clickSubmit();
  70  | 
  71  |   await expect(loginPage.credentialsError).toContainText("doesn't exist or credentials are incorrect");
  72  | });
  73  | 
  74  | // Test Case 8: Invalid username and Invalid Password
  75  | test('LGN-008- InValid username and Invalid Password', async ({ page }) => {
  76  |   const loginPage = new Identity(page);
  77  | 
  78  |   await loginPage.enterUsername('ACPL217');
  79  |   await loginPage.enterPassword('1235');
  80  |   await loginPage.clickSubmit();
  81  | 
  82  |   await expect(loginPage.credentialsError).toContainText("doesn't exist or credentials are incorrect");
  83  | });
  84  | 
  85  | // Test Case 9: Trim/Space check
  86  | test('LGN-009 - Username with leading/trailing spaces', async ({ page }) => {
  87  |   const loginPage = new Identity(page);
  88  | 
  89  |   await loginPage.login('  ACPL2317  ', '1234');
  90  |   await expect(page).toHaveURL(/login/);
  91  | });
  92  | 
  93  | // Test Case 10: SQL Injection
  94  | test('LGN-010 - SQL Injection attempt', async ({ page }) => {
  95  |   const loginPage = new Identity(page);
  96  | 
  97  |   await loginPage.login("' OR '1'='1", '1234');
  98  |   await expect(page).toHaveURL(/login/);
  99  |   await expect(loginPage.credentialsError).toBeVisible();
  100 | });
  101 | 
  102 | // Test Case 11: XSS attempt
  103 | test('LGN-011 - XSS attempt', async ({ page }) => {
  104 |   const loginPage = new Identity(page);
  105 | 
  106 |   page.on('dialog', async dialog => {
  107 |     throw new Error(`Unexpected alert appeared: ${dialog.message()}`);
  108 |   });
  109 | 
  110 |   await loginPage.login('<script>alert(1)</script>', '1234');
  111 |   await expect(page).toHaveURL(/login/);
  112 |   await expect(loginPage.credentialsError).toBeVisible();
  113 | });
  114 | 
  115 | // Test Case 12: Browser Back after logout
  116 | test('LGN-012 - Browser Back after logout', async ({ page }) => {
  117 |   const loginPage = new Identity(page);
  118 | 
  119 |   await loginPage.login('ACPL2317', '1234');
  120 |   await loginPage.previousLogout(); // Works now that logout is defined in POM
  121 |   await loginPage.LastLogout();
  122 | 
  123 |   await page.goBack();
  124 |   await expect(page).toHaveURL(/login/);
  125 | });
  126 | 
  127 | // Test Case 13: HTTPS usage
  128 | test('LGN-013 - HTTPS usage', async ({ page }) => {
  129 |   // Directly asserting check on actual browser location string
  130 |   expect(page.url().startsWith('http://')).toBeTruthy();
  131 | });
  132 | 
  133 | // Test Case 14: Login response time
  134 | test('LGN--014- Login response time', async ({ page }) => {
  135 |   const loginPage = new Identity(page);
  136 |   const startTime = Date.now();
  137 | 
  138 |   await loginPage.login('ACPL2317', '1234');
  139 |   await expect(page).toHaveURL(/dashboard/);
  140 | 
  141 |   const responseTime = Date.now() - startTime;
  142 |   console.log(`Login Response Time: ${responseTime} ms`);
> 143 |   expect(responseTime).toBeLessThan(3000);
      |                        ^ Error: expect(received).toBeLessThan(expected)
  144 | });
  145 | 
  146 | // Test Case 15: Boundary Value Testing
  147 | test('LGN-015 - Very long username/password', async ({ page }) => {
  148 |   const loginPage = new Identity(page);
  149 |   const longText = 'A'.repeat(5000);
  150 | 
  151 |   await loginPage.login(longText, longText);
  152 |   await expect(page).toHaveURL(/login/);
  153 | });
```