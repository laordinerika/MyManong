function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    window.location.href = "user-login.html";
}

function loginUser() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {

        alert("Login successful!");

        window.location.href = "user-dashboard.html";

    } else {

        alert("Incorrect email or password.");

    }

}

function togglePassword(fieldId) {

    let passwordField = document.getElementById(fieldId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }

}

function selectService(service){

alert("You selected: " + service);

}

function viewWorker(name){

alert("Opening profile of " + name);

}

function goHome(){
alert("Home page");
}

function goProfile(){
alert("Profile page");
}

function goHistory(){
alert("Service history");
}

function goSettings(){
alert("Settings page");
}

function goWorkerProfile(){

window.location.href = "worker-profile.html";

}

function editProfile(){
    alert("Edit Profile clicked");
    // or: location.href = "edit-profile.html";
}

function changeAppearance(){
    // Create modal if it doesn't exist
    let modal = document.getElementById("appearanceModal");
    if(!modal){
        modal = document.createElement("div");
        modal.id = "appearanceModal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Appearance Settings</h3>
                    <span class="modal-close" onclick="closeAppearanceModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="theme-option">
                        <label for="lightMode" class="theme-label">
                            <input type="radio" id="lightMode" name="theme" value="light" onchange="setTheme('light')">
                            <span class="theme-name">☀️ Light Mode</span>
                        </label>
                    </div>
                    <div class="theme-option">
                        <label for="darkMode" class="theme-label">
                            <input type="radio" id="darkMode" name="theme" value="dark" onchange="setTheme('dark')">
                            <span class="theme-name">🌙 Dark Mode</span>
                        </label>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.style.display = "flex";
    modal.style.position = "fixed";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    modal.style.zIndex = "2000";
    modal.style.flexDirection = "column";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    
    // Load saved theme preference
    let savedTheme = localStorage.getItem("theme") || "light";
    let themeInput = document.querySelector(`input[value="${savedTheme}"]`);
    if(themeInput) {
        themeInput.checked = true;
    }
}

function closeAppearanceModal(){
    let modal = document.getElementById("appearanceModal");
    if(modal){
        modal.style.display = "none";
        // Remove modal from DOM after animation
        setTimeout(() => {
            if(modal.parentNode){
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
}

function setTheme(theme){
    localStorage.setItem("theme", theme);
    
    if(theme === "dark"){
        document.body.classList.add("dark-mode");
        applyDarkModeStyles();
    } else {
        document.body.classList.remove("dark-mode");
        removeDarkModeStyles();
    }
}

function applyDarkModeStyles(){
    // Settings page styles
    const settingsPage = document.querySelector('.settings-page');
    const dashboard = document.querySelector('.dashboard');
    const container = document.querySelector('.container');
    const formContainer = document.querySelector('.form-container');
    const bottom = document.querySelector('.bottom');
    
    [settingsPage, dashboard, container, formContainer, bottom].forEach(el => {
        if(el) {
            el.style.background = '#2a2a2a';
            el.style.color = '#e0e0e0';
        }
    });
    
    // Header styles
    const headers = document.querySelectorAll('.settings-header, .header, .user-profile-header, .worker-profile-header');
    headers.forEach(el => {
        el.style.background = '#333333';
        el.style.color = '#e0e0e0';
        if(el.style.borderBottom) el.style.borderBottomColor = '#444444';
    });
    
    // Item styles
    const items = document.querySelectorAll('.settings-item, .worker, .service, .profile-card, .about, .reviews, .user-profile-card, .user-profile-section');
    items.forEach(el => {
        el.style.background = '#3a3a3a';
        el.style.color = '#e0e0e0';
        if(el.style.borderBottom) el.style.borderBottomColor = '#444444';
    });
    
    // Input styles
    const inputs = document.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), textarea');
    inputs.forEach(el => {
        el.style.background = '#404040';
        el.style.color = '#e0e0e0';
        el.style.borderColor = '#505050';
    });
    
    // Button styles
    const buttons = document.querySelectorAll('.worker button, .profile-buttons button, .btn-filled, button');
    buttons.forEach(el => {
        if(!el.classList.contains('bottom-nav-item')) {
            el.style.background = '#505050';
            el.style.color = '#e0e0e0';
        }
    });
    
    // Bottom nav styles
    const bottomNav = document.querySelector('.bottom-nav');
    if(bottomNav) {
        bottomNav.style.background = '#333333';
    }
    
    // Modal styles
    const modal = document.getElementById("appearanceModal");
    if(modal && modal.style.display !== 'none') {
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }
    const modalContent = document.querySelector('.modal-content');
    if(modalContent) {
        modalContent.style.background = '#3a3a3a';
        modalContent.style.color = '#e0e0e0';
    }
    const modalHeader = document.querySelector('.modal-header');
    if(modalHeader) {
        modalHeader.style.borderBottomColor = '#505050';
    }
}

function removeDarkModeStyles(){
    // Reset all styles to light mode
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.removeProperty('background');
        el.style.removeProperty('color');
        el.style.removeProperty('border-color');
        el.style.removeProperty('border-bottom-color');
    });
    
    // Reload the page to restore original CSS
    location.reload();
}

// Initialize theme on page load
function initializeTheme(){
    let savedTheme = localStorage.getItem("theme") || "light";
    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
        applyDarkModeStyles();
    }
}

// Close modal when clicking outside of it
window.onclick = function(event){
    let modal = document.getElementById("appearanceModal");
    if(modal && event.target === modal){
        closeAppearanceModal();
    }
}

function paymentMethod(){
    alert("Payment Method settings");
}

function notifications(){
    alert("Notification settings");
}

function changeLanguage(){
    alert("Language settings");
}

function helpSupport(){
    alert("Help & Support");
}

function loadProfile() {
    let name = localStorage.getItem("userName");
    let email = localStorage.getItem("userEmail");
    let phone = localStorage.getItem("userPhone");

    document.getElementById("profileName").innerText = name || "No Name";
    document.getElementById("profileEmail").innerText = email || "No Email";
    document.getElementById("profilePhone").innerText = phone || "No Phone";
}

function filterWorkers(){

    let input = document.getElementById("searchInput").value.toLowerCase();
    let workers = document.querySelectorAll(".worker");

    workers.forEach(worker => {

        let service = worker.getAttribute("data-service");

        if(service.includes(input)){
            worker.style.display = "flex";
        } else {
            worker.style.display = "none";
        }

    });
}

function filterByService(service) {
    let workers = document.querySelectorAll(".worker");

    workers.forEach(worker => {
        let workerService = worker.getAttribute("data-service");

        if (workerService === service) {
            worker.style.display = "flex";
        } else {
            worker.style.display = "none";
        }
    });
}

function showAllWorkers() {
    let workers = document.querySelectorAll(".worker");

    workers.forEach(worker => {
        worker.style.display = "flex";
    });
}

function editProfile(){
    window.location.href = "edit-profile.html";
}

function loadEditProfile(){

    document.getElementById("editName").value =
        localStorage.getItem("userName") || "";

    document.getElementById("editEmail").value =
        localStorage.getItem("userEmail") || "";

    document.getElementById("editPhone").value =
        localStorage.getItem("userPhone") || "";

    let savedImage = localStorage.getItem("userImage");

    if(savedImage){
        document.getElementById("previewImage").src = savedImage;
    }

}

function saveProfile(){

    let name = document.getElementById("editName").value;
    let email = document.getElementById("editEmail").value;
    let phone = document.getElementById("editPhone").value;
    let password = document.getElementById("editPassword").value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill in all required fields.");
        return;
    }

    // simple email validation
    if(!email.includes("@")){
        alert("Please enter a valid email.");
        return;
    }

    // phone validation (basic)
    if(phone.length < 7){
        alert("Invalid phone number.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);

    // only update password if user entered one
    if(password !== ""){
        localStorage.setItem("userPassword", password);
    }

    alert("Profile updated successfully!");

    window.location.href = "profile.html";
}

function previewImage(){

    let file = document.getElementById("imageInput").files[0];

    if(file){
        let reader = new FileReader();

        reader.onload = function(e){
            document.getElementById("previewImage").src = e.target.result;
            localStorage.setItem("userImage", e.target.result);
        };

        reader.readAsDataURL(file);
    }
}

function loadProfile(){

    let name = localStorage.getItem("userName");
    let email = localStorage.getItem("userEmail");
    let phone = localStorage.getItem("userPhone");
    let image = localStorage.getItem("userImage");

    document.getElementById("profileName").innerText = name || "No Name";
    document.getElementById("profileEmail").innerText = email || "No Email";
    document.getElementById("profilePhone").innerText = phone || "No Phone";

    if(image){
        document.getElementById("profileImage").src = image;
    }
}

function goToBooking(workerName = null){
    if(workerName){
        localStorage.setItem("selectedWorker", workerName);
    }
    window.location.href = "booking.html";
}

function loadBookingDetails(){

    let name = localStorage.getItem("userName");
    let phone = localStorage.getItem("userPhone");
    let worker = localStorage.getItem("selectedWorker");

    document.getElementById("bookingName").value = name || "";
    document.getElementById("bookingPhone").value = phone || "";

    const workerDisplay = document.getElementById("bookingWorkerDisplay");
    if(workerDisplay){
        workerDisplay.textContent = worker || "No worker selected";
    }
}

function submitBooking(){
    let name = document.getElementById("bookingName").value;
    let phone = document.getElementById("bookingPhone").value;
    let worker = localStorage.getItem("selectedWorker") || "";
    let service = document.getElementById("bookingService").value;
    let date = document.getElementById("bookingDate").value;
    let time = document.getElementById("bookingTime").value;
    let address = document.getElementById("bookingAddress").value;
    let concern = document.getElementById("bookingConcern").value;

    if(!worker){
        alert("Please book from a worker profile so a worker is selected.");
        return;
    }

    if(!name || !phone || !service || !date || !time || !address || !concern){
        alert("Please fill in all booking details.");
        return;
    }

    // 🔥 SAVE TEMP BOOKING
    let booking = {
        name,
        phone,
        worker,
        service,
        date,
        time,
        address,
        concern,
        status: "Pending Payment"
    };

    localStorage.setItem("pendingBooking", JSON.stringify(booking));

    // 👉 go to payment page
    window.location.href = "payment.html";
}

function callWorker(number){
    window.location.href = "tel:" + number;
}

function goToChat(name){
    localStorage.setItem("chatWorker", name);
    window.location.href = "chat.html";
}

function loadChat(){
    let name = localStorage.getItem("chatWorker");
    document.getElementById("chatName").innerText = name || "Worker";
}

function sendMessage(){
    let input = document.getElementById("messageInput");
    let message = input.value;

    if(message === "") return;

    let chatBox = document.getElementById("chatBox");

    let newMsg = document.createElement("div");
    newMsg.className = "chat-message";
    newMsg.innerText = message;

    chatBox.appendChild(newMsg);

    input.value = "";
}

let selectedPayment = "";

function loadPayment(){

    let booking = JSON.parse(localStorage.getItem("pendingBooking"));

    if(!booking) return;

    document.getElementById("paymentService").innerText = booking.service + " - " + booking.address;
    document.getElementById("paymentDate").innerText = "Date: " + booking.date;
    document.getElementById("paymentTime").innerText = "Time: " + booking.time;
    
    if(booking.worker && document.getElementById("paymentWorker")){
        document.getElementById("paymentWorker").innerText = "Worker: " + booking.worker;
    }
}

function selectPayment(method){
    selectedPayment = method;
    // Alert removed to allow smooth testing
}

function confirmPayment(){

    if(selectedPayment === ""){
        alert("Please select a payment method.");
        return;
    }

    let booking = JSON.parse(localStorage.getItem("pendingBooking"));

    if(!booking){
        alert("No pending booking found.");
        return;
    }

    booking.status = "Awaiting Confirmation";
    booking.paymentStatus = "Pending - Will charge upon job completion";
    booking.paymentMethod = selectedPayment;
    booking.bookingDate = new Date().toLocaleDateString();

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    localStorage.removeItem("pendingBooking");

    // Alert removed to allow smooth user experience
    window.location.href = "history.html";
}

// 🔥 HISTORY FUNCTIONS
function loadHistory(){
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let historyList = document.querySelector(".history-list");

    if(!historyList) return;

    // Clear existing content
    historyList.innerHTML = "";

    // Get current active tab
    let activeTab = document.querySelector(".active-tab").textContent.toLowerCase();

    let count = 0;

    bookings.forEach((booking, index) => {
        const matchesTab =
            (activeTab === "ongoing" && booking.status === "Awaiting Confirmation") ||
            (activeTab === "completed" && booking.status === "Completed") ||
            (activeTab === "cancelled" && booking.status === "Cancelled") ||
            activeTab === "all";

        if(!matchesTab) return;

        count++;
        let card = document.createElement("div");
        card.className = "history-card";

        let statusClass = booking.status.toLowerCase().replace(" ", "-");

        card.innerHTML = `
            <div>
                <strong>${booking.service}</strong>
                <p>${booking.bookingDate || booking.date}</p>
                <p style="font-size:14px; color:#666;">${booking.address}</p>
            </div>
            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
                <span class="status ${statusClass}">${booking.status}</span>
                ${booking.status === "Awaiting Confirmation" ?
                    `<button onclick="markAsCompleted(${index})" style="background:#f4a261; color:white; border:none; padding:6px 12px; border-radius:6px; font-size:12px; cursor:pointer;">Mark Complete</button>` : ""}
                ${booking.status === "Completed" && !booking.review ?
                    `<button onclick="leaveReview(${index})" style="background:#2d5a27; color:white; border:none; padding:6px 12px; border-radius:6px; font-size:12px; cursor:pointer;">Leave Review</button>` : ""}
                ${booking.review ? `<span style="font-size:12px; color:#666;">⭐ ${booking.review.rating}/5</span>` : ""}
            </div>
        `;

        historyList.appendChild(card);
    });

    if(count === 0){
        historyList.innerHTML = "<p style='text-align:center; padding:20px; color:#666;'>No " + activeTab + " bookings found.</p>";
    }
}

function switchTab(tabName){
    // Update active tab styling
    document.querySelectorAll(".history-tabs button").forEach(btn => {
        btn.classList.remove("active-tab");
    });

    // Find the clicked button and make it active
    let clickedButton = Array.from(document.querySelectorAll(".history-tabs button")).find(btn =>
        btn.textContent.toLowerCase() === tabName.toLowerCase()
    );
    if(clickedButton){
        clickedButton.classList.add("active-tab");
    }

    // Reload history with new filter
    loadHistory();
}

function markAsCompleted(index){
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    if(bookings[index]){
        bookings[index].status = "Completed";
        bookings[index].completionDate = new Date().toLocaleDateString();
        localStorage.setItem("bookings", JSON.stringify(bookings));
        loadHistory();
        // Alert removed to allow smooth testing
    }
}

function leaveReview(index){
    // Store the booking index for the review page
    localStorage.setItem("reviewBookingIndex", index);
    // Navigate to review page
    window.location.href = "review.html";
}

// Initialize theme when page loads
document.addEventListener("DOMContentLoaded", function(){
    initializeTheme();
});

// REVIEW PAGE FUNCTIONS

function loadReviewData(){
    const bookingIndex = localStorage.getItem("reviewBookingIndex");
    if(bookingIndex !== null){
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const booking = bookings[bookingIndex];
        
        if(booking){
            document.getElementById("serviceTitle").textContent = booking.service;
            document.getElementById("serviceDetails").textContent = 
                `${booking.address} • ${booking.date} at ${booking.time}`;
        }
    }
    
    // Load user's name for display option
    const userName = localStorage.getItem("userName") || "Your Name";
    const displayNameElement = document.getElementById("displayName");
    if(displayNameElement){
        displayNameElement.textContent = userName;
    }
}

function initializeStarRating(){
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function(){
            selectedRating = parseInt(this.getAttribute('data-rating'));
            
            // Update star display
            stars.forEach((s, index) => {
                if(index < selectedRating){
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Update rating text
            const ratingTexts = [
                "Select a rating",
                "Poor",
                "Fair", 
                "Good",
                "Very Good",
                "Excellent"
            ];
            ratingText.textContent = ratingTexts[selectedRating];
            
            // Store rating for submission
            localStorage.setItem("tempReviewRating", selectedRating);
        });
        
        star.addEventListener('mouseover', function(){
            const rating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if(index < rating){
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
        
        star.addEventListener('mouseout', function(){
            stars.forEach((s, index) => {
                if(index < selectedRating){
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
}

function submitReview(){
    const bookingIndex = localStorage.getItem("reviewBookingIndex");
    const rating = localStorage.getItem("tempReviewRating");
    const comment = document.getElementById("reviewComment").value.trim();
    
    if(!rating || rating < 1 || rating > 5){
        alert("Please select a star rating.");
        return;
    }
    
    // Get name display preference
    const nameDisplayOption = document.querySelector('input[name="nameDisplay"]:checked');
    const showName = nameDisplayOption && nameDisplayOption.value === "show";
    const reviewerName = showName ? (localStorage.getItem("userName") || "Anonymous") : "Anonymous";
    
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    if(bookings[bookingIndex]){
        const booking = bookings[bookingIndex];
        booking.review = {
            rating: parseInt(rating),
            comment: comment,
            date: new Date().toLocaleDateString(),
            reviewerName: reviewerName
        };
        
        localStorage.setItem("bookings", JSON.stringify(bookings));
        
        // Also store review for worker profile
        if(booking.worker){
            const workerReviews = JSON.parse(localStorage.getItem("workerReviews")) || {};
            if(!workerReviews[booking.worker]){
                workerReviews[booking.worker] = [];
            }
            workerReviews[booking.worker].push({
                rating: parseInt(rating),
                comment: comment,
                date: new Date().toLocaleDateString(),
                service: booking.service,
                reviewerName: reviewerName
            });
            localStorage.setItem("workerReviews", JSON.stringify(workerReviews));
        }
        
        // Clean up temporary data
        localStorage.removeItem("reviewBookingIndex");
        localStorage.removeItem("tempReviewRating");
        
        // Alert removed to allow smooth user experience
        window.location.href = "history.html";
    }
}

function goBack(){
    // Clean up temporary data
    localStorage.removeItem("reviewBookingIndex");
    localStorage.removeItem("tempReviewRating");
    window.location.href = "history.html";
}

// 🔥 WORKER PROFILE FUNCTIONS
function loadWorkerReviews(workerName){
    const workerReviews = JSON.parse(localStorage.getItem("workerReviews")) || {};
    const reviews = workerReviews[workerName] || [];
    
    // Find the Reviews section more reliably
    const allHeadings = document.querySelectorAll(".worker-profile-section h3");
    let reviewsSection = null;
    
    for(let heading of allHeadings){
        if(heading.textContent.includes("Reviews")){
            reviewsSection = heading;
            break;
        }
    }
    
    if(!reviewsSection) return;
    
    const reviewsContainer = reviewsSection.parentElement;
    
    // Remove only dynamically added reviews, keep the sample
    const existingDynamicReviews = reviewsContainer.querySelectorAll("p.dynamic-review");
    existingDynamicReviews.forEach(p => p.remove());
    
    // Add new reviews
    reviews.forEach(review => {
        const reviewerName = review.reviewerName || "Anonymous";
        const reviewP1 = document.createElement("p");
        reviewP1.className = "dynamic-review";
        reviewP1.innerHTML = `<strong>${reviewerName}</strong> ⭐ ${review.rating}.0`;
        reviewsContainer.appendChild(reviewP1);
        
        const reviewP2 = document.createElement("p");
        reviewP2.className = "dynamic-review";
        reviewP2.textContent = review.comment;
        reviewsContainer.appendChild(reviewP2);
    });
}

// Initialize star rating when on review page
if(window.location.pathname.includes('review.html') || window.location.href.includes('review.html')){
    document.addEventListener("DOMContentLoaded", function(){
        initializeStarRating();
    });
}