
import { auth, signOut } from "./firebase.js";
import { db, collection, addDoc } from "./firebase.js";

let FullName = document.getElementById("FullName");
let ClassTimming = document.getElementById("ClassTimming");
let Campus = document.getElementById("Campus");
let Teacher = document.getElementById("Teacher");
let Course = document.getElementById("Course");
let studentBtn = document.getElementById("studentBtn");

// 🔹 Register Student
let register = async () => {
  if (
    !FullName.value ||
    !ClassTimming.value ||
    !Campus.value ||
    !Teacher.value ||
    !Course.value
  ) {
    alert("⚠️ Please fill all fields before registering!");
    return;
  }

  try {
    const studentRef = collection(db, "Student-Registration-Form");
    const addRef = await addDoc(studentRef, {
      fullName: FullName.value,
      classTimming: ClassTimming.value,
      campus: Campus.value,
      teacher: Teacher.value,
      course: Course.value,
    });

    console.log("✅ Student Added ID:", addRef.id);

    // 🔹Profile Card
    document.body.innerHTML = `
      <div id="profile">
        <h3> Your Profile</h3>
        <p><b>Name:</b> ${FullName.value}</p>
        <p><b>Class:</b> ${ClassTimming.value}</p>
        <p><b>Campus:</b> ${Campus.value}</p>
        <p><b>Teacher:</b> ${Teacher.value}</p>
        <p><b>Course:</b> ${Course.value}</p>
        <button id="logoutBtn">Logout</button>
      </div>
    `;

    // 🔹 Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          alert("👋 Logged out successfully!");
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert("❌ Logout failed: " + error.message);
        });
    });
  } catch (error) {
    alert("❌ Error adding student: " + error.message);
  }
};

if (studentBtn) {
  studentBtn.addEventListener("click", register);
}
