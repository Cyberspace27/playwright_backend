import { test, expect } from '@playwright/test';



test('Test DELETE Request', async({request}) =>{

    const response = await request.delete('https://reqres.in/api/users/2',{
        data: {
         "name": "Joe",
         "job": "SDET"  
        }
    });
    expect(response.status()).toBe(204);
    expect(response.ok()).toBeTruthy();
})

test('Test PUT Request', async({request}) =>{

    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
         "name": "Joe",
         "job": "SDET"  
        }
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const json= await response.json();
    const text = await response.text();

    expect.soft(json.name).toEqual('Joe');
    expect(text).toContain('SDET');
     console.log(json);
})

test('Test POST Request', async({request}) =>{

    const response = await request.post('https://reqres.in/api/users',{
        data: {
         "name": "Joe",
         "job": "Automation Engineer"  
        }
    });
    expect(response.ok()).toBeTruthy();
    const json= await response.json();
    const text = await response.text();

    expect.soft(json.name).toEqual('Joe');
    expect(text).toContain('Joe');
     console.log(json);
})


test('Test GET Request', async({request}) =>{

    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy();
     const json= await response.json();
     const text = await response.text();

     expect(json.data.id).toEqual(2);
     expect(json.data.first_name).toEqual('Janet');
     expect(text).toContain('Janet');
     console.log(json);
})