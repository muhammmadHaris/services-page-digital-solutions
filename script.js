// Service data for modal content
const servicesData = {
  1: {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Our UI/UX design service focuses on creating intuitive and engaging user experiences that drive conversions and user satisfaction. We combine aesthetic appeal with functional design to deliver interfaces that users love.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Interactive UI design",
      "Usability testing",
      "Design system creation",
      "Responsive design for all devices",
    ],
  },
  2: {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "We build responsive, high-performance websites tailored to your specific business needs. Using the latest technologies, we create web solutions that are fast, secure, and scalable.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "CMS integration (WordPress, etc.)",
      "API development and integration",
      "Performance optimization",
      "Ongoing maintenance and support",
    ],
  },
  3: {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Our data-driven digital marketing strategies help you reach your target audience, increase brand awareness, and drive conversions. We use a multi-channel approach to maximize your online presence.",
    features: [
      "SEO optimization",
      "Social media marketing",
      "Content marketing strategy",
      "Email marketing campaigns",
      "PPC advertising management",
      "Analytics and performance reporting",
    ],
  },
  4: {
    title: "IT Consulting",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Get expert advice on technology solutions that drive business growth. Our IT consulting services help you make informed decisions about technology investments and implementations.",
    features: [
      "Technology strategy development",
      "System architecture planning",
      "Cloud migration consulting",
      "Cybersecurity assessment",
      "IT infrastructure optimization",
      "Digital transformation guidance",
    ],
  },
  5: {
    title: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Develop a strong brand identity that resonates with your target audience and differentiates you from competitors. We create cohesive visual systems that communicate your brand values effectively.",
    features: [
      "Logo design and visual identity",
      "Brand guideline development",
      "Color palette and typography selection",
      "Brand messaging and positioning",
      "Marketing collateral design",
      "Brand consistency audits",
    ],
  },
  6: {
    title: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Create powerful mobile applications for iOS and Android platforms that deliver exceptional user experiences. We build native and cross-platform apps that perform flawlessly.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app development",
      "UI/UX design for mobile",
      "API integration",
      "App store deployment",
      "Post-launch maintenance and updates",
    ],
  },
};

// DOM Elements
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");
const modal = document.getElementById("serviceModal");
const closeModal = document.querySelector(".close-modal");
const serviceButtons = document.querySelectorAll(".service-btn");

// Filter functionality
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Get filter value
    const filterValue = button.getAttribute("data-filter");

    // Filter services
    serviceCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Modal functionality
serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const serviceId = button.getAttribute("data-service");
    const service = servicesData[serviceId];

    if (service) {
      // Populate modal with service data
      document.getElementById("modal-title").textContent = service.title;
      document.getElementById("modal-img").src = service.image;
      document.getElementById("modal-img").alt = service.title;
      document.getElementById("modal-description").textContent =
        service.description;

      // Populate features list
      const featuresList = document.getElementById("modal-features-list");
      featuresList.innerHTML = "";

      service.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
      });

      // Show modal
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (icon.classList.contains("fa-times")) {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });
});

// Add animation to service cards on page load
document.addEventListener("DOMContentLoaded", () => {
  serviceCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });
});
