/*

TemplateMo 593 personal shape

https://templatemo.com/tm-593-personal-shape

*/

// JavaScript Document

        // Mobile menu functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Enhanced Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Staggered animation for portfolio items
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.portfolio-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.1 });

        // Observe all animation elements
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            animatedElements.forEach(el => observer.observe(el));

            const portfolioSection = document.querySelector('.portfolio-grid');
            if (portfolioSection) {
                portfolioObserver.observe(portfolioSection);
            }
        });

        // Enhanced smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Enhanced form submission with better UX
        // document.querySelector('.contact-form').addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const submitBtn = document.querySelector('.submit-btn');
        //     const originalText = submitBtn.textContent;
            
            // Add loading state
            // submitBtn.textContent = 'Sending...';
            // submitBtn.disabled = true;
            // submitBtn.style.background = 'linear-gradient(135deg, #94a3b8, #64748b)';
            
            // Simulate form submission with better feedback
            // setTimeout(() => {
            //     submitBtn.textContent = 'Message Sent! ✓';
            //     submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Show success animation
        //         submitBtn.style.transform = 'scale(1.05)';
        //         setTimeout(() => {
        //             submitBtn.style.transform = 'scale(1)';
        //         }, 200);
                
        //         setTimeout(() => {
        //             submitBtn.textContent = originalText;
        //             submitBtn.disabled = false;
        //             submitBtn.style.background = '';
        //             document.querySelector('.contact-form').reset();
        //         }, 3000);
        //     }, 2000);
        // });

        // Enhanced parallax effect for hero background
        // let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
            ticking = false;
        }

        // window.addEventListener('scroll', () => {
        //     if (!ticking) {
        //         requestAnimationFrame(updateParallax);
        //         ticking = true;
        //     }
        // });



        

        // Add subtle hover effects to skill tags
        document.querySelectorAll('.education-tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
        });

// =========================
// INTERNSHIP MODAL LOGIC
// =========================
const serviceCards = document.querySelectorAll(".Internship-card");

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    serviceCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

const internshipModal = document.getElementById("internshipModal");
const internshipTitle = document.getElementById("internship-title");
const internshipCompany = document.getElementById("internship-company");
const internshipDuration = document.getElementById("internship-duration");
const internshipDescription = document.getElementById("internship-description");
const internshipTech = document.getElementById("internship-tech");
const internshipImage = document.getElementById("internship-image");
const closeInternshipBtn = internshipModal?.querySelector(".close");

// Open internship modal
document.querySelectorAll(".open-internship-modal").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    internshipTitle.textContent = this.dataset.title;
    internshipCompany.textContent = this.dataset.company;
    internshipDuration.textContent = this.dataset.duration;
    internshipDescription.textContent = this.dataset.description;
    internshipTech.textContent = this.dataset.tech;

    if (this.dataset.image) {
      internshipImage.src = this.dataset.image;
      internshipImage.style.display = "block";
    } else {
      internshipImage.style.display = "none";
    }

    internshipModal.style.display = "block";
  });
});

// =========================
// Close Modal (X button)
// =========================
if (closeInternshipBtn) {
  closeInternshipBtn.addEventListener("click", () => {
    internshipModal.style.display = "none";
  });
}

// =========================
// Close when clicking outside modal content
// =========================
window.addEventListener("click", (event) => {
  if (event.target === internshipModal) {
    internshipModal.style.display = "none";
  }
});

// =========================
// Keyboard accessibility (Escape key)
// =========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && internshipModal.style.display === "block") {
    internshipModal.style.display = "none";
  }
});


// =========================
// PROJECT MODAL LOGIC
// =========================
const modal = document.getElementById("projectModal");
const closeBtn = modal?.querySelector(".close-btn");
const slides = document.querySelectorAll("#modal-image-wrapper .project-slide");

const modalGithub = document.getElementById("modal-github");

// Project data
const projects = {
  ecommerce: {
    title: "Exploratory Data Analysis on Pizza Sales Dataset",
    description:
      "The Pizza Sales Analysis project is designed to analyse transactional sales data from a pizza store. The goal is to identify key business insights, trends, and KPIs that will help management make informed decisions related to sales, marketing, and operations.",
    goal: "To analyze pizza store sales data and uncover key insights, trends, and performance indicators that support data-driven decisions in sales, marketing, and operations..",
    steps: [
      "Imported and cleaned the pizza sales dataset (pizza_sales.csv).",
"Performed Exploratory Data Analysis (EDA) to understand sales patterns.",
"Calculated key KPIs — Total Revenue, Total Orders, Total Pizzas Sold, AOV, and Average Pizzas per Order.",
"Created visualizations for daily, hourly, and monthly sales trends.",
"Identified top and bottom performing pizzas by revenue and quantity.",
"Derived insights and recommendations for business improvement."
    ],
    tech: "Python (Pandas, NumPy, Matplotlib, Seaborn), Jupyter Notebook, Kaggle (Dataset)",
    github: "https://github.com/Shubhakaaranegurumoorthy/Exploratory-Data-Analysis-on-Pizza-Sales-Dataset",
    images: [
      "images/project1/pic1.jpeg","images/project1/pic2.jpeg","images/project1/pic3.jpeg","images/project1/pic4.jpeg","images/project1/pic5.jpeg","images/project1/pic6.jpeg","images/project1/pic7.jpeg",
      "images/project1/pic8.jpeg","images/project1/pic9.jpeg","images/project1/pic10.jpeg","images/project1/pic11.jpeg","images/project1/pic12.jpeg","images/project1/pic13.jpeg"
    ]
  },
  brand: {
    title: "Blinkit Sales & Customer Insights Dashboard (PowerBI)",
    description:
      "The Blinkit Sales Insights Dashboard is designed to analyze sales performance, customer satisfaction, and inventory distribution using Power BI. The project delivers meaningful insights through KPIs and interactive visualizations to help understand how item attributes, outlet characteristics, and customer behavior influence overall business outcomes.",
    goal: "To examine Blinkit's sales, customer ratings, and inventory-related metrics in detail, and generate actionable insights by visualizing KPIs such as Total Sales, Average Sales, Number of Items, and Average Rating using Power BI dashboards.",
    steps: [
      "Imported and transformed Blinkit datasets using Power Query for cleaning and preparation.",
"Modeled the data and created relationships between item, outlet, and sales tables.",
"Calculated essential KPIs including Total Sales, Average Sales, Number of Items, and Average Rating using DAX.",
"Built visualizations for:",
"Total Sales by Fat Content",
"Total Sales by Item Type",
"Fat Content Contribution by Outlet",
"Sales by Outlet Establishment Year/Type",
"Percentage of Sales by Outlet Size",
"Sales Distribution by Location",
"Outlet Type Comparison across all metrics",
"Performed detailed analysis to uncover patterns in sales, customer preferences, and outlet performance.",
"Derived key insights and recommendations for improving marketing strategy, inventory planning, and store-level performance."
    ],
    tech: "Power BI, Power Query, DAX, Data Modeling, Excel (Dataset), Power BI Desktop",
    github: "https://github.com/Shubhakaaranegurumoorthy/Blinkit-Sales-Customer-Insights-Dashboard-Power-BI-",
    images:["images/project2/pic1.png"]
  },
  mobile: {
    title: "AI-powered Image converter and Generator",
    description:
      "Developed a full-stack web application integrating AI APIs to perform image colorization, decolorization, image-to-caption generation, and text-to-image synthesis. Designed with a responsive, user-friendly interface to ensure seamless interaction and real-time results",
    goal: "Build a unified AI-driven platform that allows users to generate, modify, and interpret images intelligently using multiple machine learning models and APIs.",
    steps: [
      "Designed a responsive frontend using HTML, CSS, and JavaScript for smooth user experience.",
"Built backend logic using Flask to manage image uploads, API requests, and response handling.",
"Integrated OpenAI and Hugging Face APIs for text-to-image generation, image captioning, and transformation tasks.",
"Implemented real-time result display with progress indicators for better usability.",
"Deployed the application ensuring fast processing and scalable architecture."
    ],
    tech: "HTML, CSS, JavaScript, Python (Flask), OpenAI API, Hugging Face API, Image Processing Models",
    github: "https://github.com/Shubhakaaranegurumoorthy/Image-Processing-and-Generation-using-AI-APIs",
    images:["images/project3/pic1.png","images/project3/pic2.png","images/project3/pic3.png","images/project3/pic4.png","images/project3/pic5.png",
      "images/project3/pic6.png","images/project3/pic7.png","images/project3/pic8.png","images/project3/pic9.png","images/project3/pic10.png"
    ]
  },
  dashboard: {
    title: "Tableau Dashboard: Electric Vehicle Sales Insights",
    description:
      "This Tableau dashboard provides a comprehensive analysis of electric vehicle (EV) sales, range efficiency, and adoption trends. It explores the growth of BEVs and PHEVs, geographic distribution, manufacturer dominance, model popularity, and eligibility for clean-fuel incentives.",
    goal: "To visualize and analyze EV adoption patterns, technological progress, and market distribution using interactive Tableau dashboards that support data-driven insights into the electric vehicle landscape.",
    steps: [
      "Cleaned and prepared the EV dataset for analysis.",
"Calculated key KPIs including Total Vehicles, Average Electric Range, Total BEVs, Total PHEVs, and their percentage shares.",
"Created interactive visualizations:",
"Line chart for EV growth by model year",
"Map chart for EV distribution across states",
"Bar chart for top 10 manufacturers",
"Pie/Donut chart for CAFV eligibility",
"Treemap for top 10 EV models",
"Compared BEV vs PHEV trends to understand market preference.",
"Identified regional adoption patterns and popular brands/models."
    ],
    tech: "Tableau, Data Cleaning, Data Visualization, KPI Analysis, Dataset(Kaggle)",
    github: "https://github.com/Shubhakaaranegurumoorthy/Tableau-Dashboard-Electric-Vehicle-Sales-Insights",
    images:["images/project4/pic1.png"]
  },
  marketing: {
    title: "Marketing Website",
    description:
      "SEO-optimized marketing website with interactive visuals and smooth animations.",
    goal: "Improve brand visibility and conversion rate.",
    steps: [
      "Designed responsive landing page structure.",
      "Implemented animations and CTA tracking.",
      "Integrated analytics tools."
    ],
    tech: "HTML, CSS, JavaScript, GSAP, SEO Tools",
    github: "https://github.com/YourUsername/marketing-website"
  },
  creative: {
    title: "Creative Portfolio",
    description:
      "Artistic portfolio with immersive galleries and storytelling transitions.",
    goal: "Showcase visual work with minimal distractions.",
    steps: [
      "Built gallery layout with lightbox effect.",
      "Added smooth scroll and transitions.",
      "Optimized image loading and responsiveness."
    ],
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/YourUsername/creative-portfolio"
  }
};



// =========================
// Open Modal
// =========================
document.querySelectorAll(".learn-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    const project = projects[key];
    if (!project) return;

    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-description").textContent = project.description;
    document.getElementById("modal-goal").textContent = project.goal;
    document.getElementById("modal-tech").textContent = project.tech;

    const stepsList = document.getElementById("modal-steps");
    stepsList.innerHTML = "";
    project.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    // ✅ Load images dynamically inside modal
    const imageWrapper = document.getElementById("modal-image-wrapper");
    imageWrapper.innerHTML = ""; // clear previous images

    if (project.images && project.images.length > 0) {
      project.images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${project.title} Image ${index + 1}`;
        img.classList.add("project-slide");
        if (index === 0) img.classList.add("active");
        imageWrapper.appendChild(img);
      });
    }

    // ✅ Reinitialize slider
    let slideIndex = 0;
    const slides = imageWrapper.querySelectorAll(".project-slide");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prevBtn.onclick = () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    };

    nextBtn.onclick = () => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    };

    showSlide(slideIndex);

    // ✅ GitHub link
    modalGithub.setAttribute("href", project.github);
    modalGithub.onclick = (e) => {
      e.stopPropagation();
      window.open(project.github, "_blank");
    };

    // ✅ Show modal
    modal.style.display = "flex";
  });
});


// =========================
// Close Modal (X Button)
// =========================
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// =========================
// Close Modal when clicking outside
// =========================
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// =========================
// Keyboard accessibility (Escape)
// =========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});
