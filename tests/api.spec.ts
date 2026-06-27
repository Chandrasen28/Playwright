import { test, expect } from '@playwright/test';

// Define the base URL for our target API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Basic API Testing with Playwright', () => {

  // Test Case 1: GET Request
  test('Should fetch a single post successfully', async ({ request }) => {
    // Send the GET request using Playwright's built-in request context
    const response = await request.get(`${BASE_URL}/posts/1`);

    // 1. Assert that the HTTP Status code is 200 (OK)
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // 2. Parse the response body as JSON
    const responseBody = await response.json();

    // 3. Assert specific data inside the JSON response
    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('body');
    
    console.log('GET Response Data:', responseBody);
  });

  // Test Case 2: POST Request
  test('Should create a new post successfully', async ({ request }) => {
    // Send the POST request with headers and a JSON payload body
    const response = await request.post(`${BASE_URL}/posts`, {
      data: {
        title: 'Automation Testing',
        body: 'Learning API testing via Playwright is fun!',
        userId: 101,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    // 1. Assert that the HTTP Status code is 201 (Created)
    expect(response.status()).toBe(201);

    // 2. Parse and verify the newly created resource data
    const responseBody = await response.json();
    
    expect(responseBody.title).toBe('Automation Testing');
    expect(responseBody.body).toBe('Learning API testing via Playwright is fun!');
    expect(responseBody.userId).toBe(101);
    expect(responseBody.id).toBeDefined(); // The API assigns a new ID automatically

    console.log('POST Response Data:', responseBody);
  });

});