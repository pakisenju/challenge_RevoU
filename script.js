const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Add name validation

  if (email === '') {
    displayError('emailError', 'Please enter your email address.');
  } else if (!isValidEmail(email)) {
    displayError('emailError', 'Please enter a valid email address.');
  }

  if (phone === '') {
    displayError('phoneError', 'Please enter your phone number.');
  } else if (!isValidPhone(phone)) {
    displayError('phoneError', 'Please enter a valid phone number.');
  }
});

function displayError(id, message) {
  const errorLabel = document.getElementById(id);
  errorLabel.textContent = message;
}

function clearErrors() {
  const errorLabels = document.querySelectorAll('.error-label');
  errorLabels.forEach(label => {
    label.textContent = '';
  });
}

function isValidEmail(email) {
  // Your email validation logic here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Your phone validation logic here
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}


const buttons = document.querySelectorAll('#our-product-segmented button');
const contentSection = document.querySelector('#our-product-content');

const contents = {
  car: [
    "Experience the utmost convenience with our door-to-door transportation service. Our dedicated and professional drivers are committed to providing you with a safe and comfortable journey. Choose from our wide selection of vehicles, ensuring you find the perfect fit for your needs. Count on us for reliable and punctual service that you can trust.",
    "Enjoy a stress-free ride with our advanced safety features and rigorous driver screening process. We prioritize your security and take every precaution to ensure your peace of mind during your travels. Rest assured that your comfort and well-being are our top priorities.",
    "Experience the luxury of our premium car service. Indulge in spacious and comfortable vehicles equipped with the latest amenities, creating a truly first-class experience. Our professional chauffeurs provide exceptional service and attention to detail, making every journey a memorable one.",
    "Discover the convenience of our seamless booking process. With our user-friendly app and intuitive interface, you can easily request a ride and track its progress in real-time. Take control of your travel plans and enjoy a hassle-free experience from start to finish.",
    "Experience unparalleled customer support with our dedicated team. We are available 24/7 to assist you with any queries, concerns, or special requests. Your satisfaction is our priority, and we strive to exceed your expectations at every step of the way."
  ],
  bike: [
    "Navigate through city traffic quickly and efficiently with our bike ride-hailing service. Enjoy the benefits of eco-friendly transportation while reaching your destination in a timely manner. Our affordable fares make short-distance travel more accessible. With our flexible and agile bikes, you can easily maneuver through crowded areas, ensuring a seamless and hassle-free commute. Embrace a healthier and more active lifestyle while enjoying the convenience of convenient parking and accessibility.",
    "Discover the freedom of our bike-sharing program, offering a sustainable and convenient alternative for short trips. With our extensive network of bike stations, you can easily pick up and drop off bikes at your convenience. Say goodbye to traffic congestion and parking hassles, and embrace a greener way of getting around.",
    "Enjoy the personalized experience of our bike rentals. Whether you're exploring the city or taking a leisurely ride, our well-maintained bikes are perfect for every occasion. With adjustable features and comfortable seating, you can tailor your ride to your preferences and enjoy the journey to the fullest.",
    "Experience the ease of our bike delivery service. From small packages to food orders, our efficient delivery riders ensure your items reach their destination swiftly and securely. Benefit from real-time tracking, allowing you to monitor the progress of your delivery with ease. Count on us for reliable and efficient last-mile delivery solutions.",
    "Embrace the cost-effectiveness of our bike transportation. With affordable rates and transparent pricing, our bike ride-hailing service offers great value for your money. Save on transportation expenses while enjoying the convenience and flexibility of biking. Rediscover your city from a new perspective and make the most of every trip."
  ],
  delivery: [
    "Experience fast and efficient delivery service that you can rely on. We understand the importance of secure handling and careful transportation of your packages. Rest assured that your items will be delivered safely to their destination. With real-time package tracking, you can stay informed about the progress of your delivery every step of the way. Trust us for prompt and reliable delivery services that meet your expectations.",
    "Enjoy the convenience of our express delivery options. With our expedited service, your urgent packages are prioritized for speedy transportation. Whether it's an important document or time-sensitive delivery, we ensure swift and reliable delivery to meet your deadlines.",
    "Discover our specialized delivery services tailored to your unique needs. From fragile items to large and bulky packages, our trained couriers handle your items with utmost care. Our commitment to secure and efficient delivery ensures your peace of mind.",
    "Experience the flexibility of our on-demand delivery service. Whether it's a last-minute gift or an urgent supply, our couriers are ready to fulfill your delivery needs. With our easy-to-use app, you can schedule and track deliveries with ease, ensuring a seamless experience.",
  ],
  food: [
    "Indulge in a wide range of delicious cuisines delivered right to your doorstep. Our carefully curated selection of restaurants ensures that you have access to the finest flavors from around the world. We prioritize quality by partnering with establishments that use fresh and high-quality ingredients. Enjoy the convenience of prompt and accurate delivery, bringing the restaurant experience to the comfort of your own home. Look out for our special offers and discounts to make your dining experience even more delightful. With options to cater to various dietary preferences, we have something for everyone.",
    "Explore the diverse culinary landscape with our extensive menu offerings. From traditional favorites to innovative creations, our partnered restaurants showcase the best of local and international cuisines. Discover new flavors and satisfy your cravings with our vast selection of dishes.",
    "Experience exceptional customer service with our dedicated food delivery team. We ensure that your orders are handled with care and delivered promptly. Our courteous and professional delivery drivers go the extra mile to provide a pleasant and convenient dining experience.",
    "Enjoy the ease and convenience of our user-friendly food ordering platform. With our intuitive app and website, you can browse menus, customize your orders, and track deliveries effortlessly. Say goodbye to long wait times and enjoy restaurant-quality meals delivered to your doorstep at your convenience.",
    "Benefit from our commitment to food safety and hygiene. We work closely with our restaurant partners to ensure compliance with rigorous quality standards. From food preparation to delivery, we prioritize the well-being of our customers and ensure that every meal is prepared and handled with the utmost care."
  ]
};


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');

    const selectedContent = contents[button.textContent.toLowerCase()];
    renderContent(selectedContent);
  });

  if (index === 0) {
    button.classList.add('selected');
    const selectedContent = contents[button.textContent.toLowerCase()];
    renderContent(selectedContent);
  }
});

function renderContent(content) {
  contentSection.innerHTML = '';
  content.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('content-row');
    rowElement.textContent = row;
    contentSection.appendChild(rowElement);
  });
}