// Example: Using Promises for asynchronous operations

// Step 1: Define a function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Step 2: Simulate an asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
        // Step 3: If the operation is successful, use resolve to fulfill the Promise with the data
        const data = { name: "John", age: 30 };
        resolve(data);
        
        // Step 4: If an error occurs, use reject to indicate that the Promise is rejected
        reject(new Error("Data not available"));
      }, 5000); // Wait for 5000 milliseconds (5 seconds)
    });
  }
  
  console.log("Start");
  
  // Step 5: Call the function and use .then() to handle the successful case (resolve)
  fetchData()
    .then((data) => {
      // Step 6: The data is available here, and you can do something with it
      console.log("Data:", data);
    })
    .catch((error) => {
      // Step 7: If there was an error (reject), it will be caught here
      console.error("Error:", error.message);
    });
  
  console.log("End");
  


  [1,2,3,4,342,3,1,2]

  new Set( [1,2,3,4,342,3,1,2])