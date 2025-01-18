'use strict';
try {
  // Replace 'Sok Dara' with your full name
  console.log('Student Name: Thea Thaksin'); 
  let x = 10;
} catch (error) {
  console.error(error.message); 
}

function demo(){
  try {
    let y = 20;
  } catch (error) {
    console.error(error.message); 
  }
}

demo();

try {
  // Using let instead of var to avoid the delete error
  eval("let z = 50; z = null; "); 
} catch (error) {
  console.error(error.message); 
}