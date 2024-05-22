// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCgT7cRyGGp0CZCS8K2bH_rcNjwOELLMg",
  authDomain: "person-information-62532.firebaseapp.com",
  projectId: "person-information-62532",
  storageBucket: "person-information-62532.appspot.com",
  messagingSenderId: "470309297489",
  appId: "1:470309297489:web:9e934035fbb89acbd30770",
  measurementId: "G-50CEVPFXEX",
};

firebase.initializeApp(firebaseConfig);

// Reference to Firebase database
const database = firebase.database();

// Function to write data
function writePersonData(name, email, phone, instrument) {
  database
    .ref("persons")
    .push()
    .set(
      {
        name: name,
        email: email,
        phone: phone,
        instrument: instrument,
      },
      (error) => {
        if (error) {
          console.log("Error writing data:", error);
        } else {
          console.log("Data written successfully");
        }
      }
    );
}

// // Function to read data once
// function readPersonDataOnce() {
//   database
//     .ref("persons")
//     .once("value")
//     .then((snapshot) => {
//       const personList = document.getElementById("personList");
//       personList.innerHTML = "";
//       snapshot.forEach((childSnapshot) => {
//         const childData = childSnapshot.val();
//         const personElement = document.createElement("div");
//         personElement.innerHTML = `<p>Name: ${childData.name}</p>
//                                  <p>Email: ${childData.email}</p>
//                                  <p>Phone: ${childData.phone}</p>
//                                  <p>Instrument: ${childData.instrument}</p>`;
//         personList.appendChild(personElement);
//       });
//     })
//     .catch((error) => {
//       console.log("Error reading data:", error);
//     });
// }

// Form submission handler
document.getElementById("personForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const instrument = document.getElementById("instrument").value;

  writePersonData(name, email, phone, instrument);

  // Clear the form
  document.getElementById("personForm").reset();
  readPersonDataOnce(); // Refresh the list
});

// // Initial read to populate the list
// readPersonDataOnce();
