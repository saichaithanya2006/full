// Global variables
let currentLanguage = 'en';
const API_BASE_URL = '/api';

// Language translations
const translations = {
    en: {
        title: "Your Complete Train Booking Solution",
        subtitle: "Check train availability, PNR status, live running status, and more - all in one place",
        startSearching: "Start Searching",
        watchDemo: "Watch Demo",
        ourServices: "Our Services",
        trainSearch: "Train Search",
        trainSearchDesc: "Find trains between stations with real-time availability",
        searchTrains: "Search Trains",
        pnrStatus: "PNR Status",
        pnrStatusDesc: "Check your ticket confirmation status instantly",
        checkPNR: "Check PNR",
        liveStatus: "Live Train Status",
        liveStatusDesc: "Track your train's current location and delays",
        trackTrain: "Track Train",
        seatAvailability: "Seat Availability",
        seatAvailabilityDesc: "Check available seats for your journey",
        checkSeats: "Check Seats",
        whyChoose: "Why Choose fulltkt?",
        lightningFast: "Lightning Fast",
        lightningFastDesc: "Get instant results with our optimized search algorithms",
        secureReliable: "Secure & Reliable",
        secureReliableDesc: "Your data is safe with our enterprise-grade security",
        mobileFriendly: "Mobile Friendly",
        mobileFriendlyDesc: "Access all features seamlessly on any device",
        multiLanguage: "Multi-Language",
        multiLanguageDesc: "Available in multiple Indian languages"
    },
    hi: {
        title: "आपका संपूर्ण ट्रेन बुकिंग समाधान",
        subtitle: "ट्रेन उपलब्धता, PNR स्थिति, लाइव रनिंग स्थिति और बहुत कुछ जांचें - सब एक ही जगह",
        startSearching: "खोज शुरू करें",
        watchDemo: "डेमो देखें",
        ourServices: "हमारी सेवाएं",
        trainSearch: "ट्रेन खोज",
        trainSearchDesc: "रियल-टाइम उपलब्धता के साथ स्टेशनों के बीच ट्रेन खोजें",
        searchTrains: "ट्रेन खोजें",
        pnrStatus: "PNR स्थिति",
        pnrStatusDesc: "अपनी टिकट पुष्टि स्थिति तुरंत जांचें",
        checkPNR: "PNR जांचें",
        liveStatus: "लाइव ट्रेन स्थिति",
        liveStatusDesc: "अपनी ट्रेन की वर्तमान स्थिति और देरी को ट्रैक करें",
        trackTrain: "ट्रेन ट्रैक करें",
        seatAvailability: "सीट उपलब्धता",
        seatAvailabilityDesc: "अपनी यात्रा के लिए उपलब्ध सीटें जांचें",
        checkSeats: "सीट जांचें",
        whyChoose: "fulltkt क्यों चुनें?",
        lightningFast: "बिजली की तेजी",
        lightningFastDesc: "हमारे अनुकूलित खोज एल्गोरिदम के साथ तत्काल परिणाम प्राप्त करें",
        secureReliable: "सुरक्षित और विश्वसनीय",
        secureReliableDesc: "हमारी एंटरप्राइज़-ग्रेड सुरक्षा के साथ आपका डेटा सुरक्षित है",
        mobileFriendly: "मोबाइल फ्रेंडली",
        mobileFriendlyDesc: "किसी भी डिवाइस पर सभी सुविधाओं तक निर्बाध पहुंच",
        multiLanguage: "बहु-भाषा",
        multiLanguageDesc: "कई भारतीय भाषाओं में उपलब्ध"
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setTodayDate();
});

// Initialize the application
function initializeApp() {
    // Set default language
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Update translations
    updateLanguage(currentLanguage);
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguage(currentLanguage);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Set today's date as default for date inputs
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            input.value = today;
        }
    });
}

// Update language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show specific service form
function showService(serviceType) {
    // Hide all service forms
    const allForms = document.querySelectorAll('.service-form');
    allForms.forEach(form => {
        form.classList.remove('active');
    });
    
    // Show selected form
    const selectedForm = document.getElementById(serviceType);
    if (selectedForm) {
        selectedForm.classList.add('active');
        
        // Scroll to the form
        setTimeout(() => {
            selectedForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
    
    // Update service card active state
    const allCards = document.querySelectorAll('.service-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.getElementById(serviceType + 'Card');
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

// Show loading spinner
function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.add('show');
    }
}

// Hide loading spinner
function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.remove('show');
    }
}

// Display results in container
function displayResults(containerId, data, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.classList.add('show');
    
    if (data.success) {
        if (type === 'train-search') {
            displayTrainSearchResults(container, data.data);
        } else if (type === 'pnr-status') {
            displayPNRResults(container, data);
        } else if (type === 'live-status') {
            displayLiveStatusResults(container, data.data);
        } else if (type === 'seat-availability') {
            displaySeatAvailabilityResults(container, data);
        }
    } else {
        container.innerHTML = `<div class="error-message">${data.error || 'An error occurred'}</div>`;
    }
}

// Display train search results
function displayTrainSearchResults(container, data) {
    if (!data || Object.keys(data).length === 0) {
        container.innerHTML = '<div class="error-message">No train information found</div>';
        return;
    }
    
    const resultHTML = `
        <div class="result-item">
            <div class="result-header">Train Information</div>
            <div class="result-details">
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    `;
    container.innerHTML = resultHTML;
}

// Display PNR results
function displayPNRResults(container, data) {
    const resultHTML = `
        <div class="result-item">
            <div class="result-header">PNR Status</div>
            <div class="result-details">
                ${data.message || 'PNR status information will be displayed here'}
            </div>
        </div>
    `;
    container.innerHTML = resultHTML;
}

// Display live status results
function displayLiveStatusResults(container, data) {
    if (!data || Object.keys(data).length === 0) {
        container.innerHTML = '<div class="error-message">No live status information found</div>';
        return;
    }
    
    const resultHTML = `
        <div class="result-item">
            <div class="result-header">Live Train Status</div>
            <div class="result-details">
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    `;
    container.innerHTML = resultHTML;
}

// Display seat availability results
function displaySeatAvailabilityResults(container, data) {
    const resultHTML = `
        <div class="result-item">
            <div class="result-header">Seat Availability</div>
            <div class="result-details">
                ${data.message || 'Seat availability information will be displayed here'}
            </div>
        </div>
    `;
    container.innerHTML = resultHTML;
}

// API Functions

// Search train
async function searchTrain() {
    const trainNumber = document.getElementById('trainNumber').value.trim();
    
    if (!trainNumber) {
        alert('Please enter a train number or name');
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}/train-search/${trainNumber}`);
        const data = await response.json();
        displayResults('trainSearchResults', data, 'train-search');
    } catch (error) {
        console.error('Error searching train:', error);
        displayResults('trainSearchResults', {
            success: false,
            error: 'Failed to search train. Please try again.'
        }, 'train-search');
    } finally {
        hideLoading();
    }
}

// Check PNR status
async function checkPNR() {
    const pnrNumber = document.getElementById('pnrNumber').value.trim();
    
    if (!pnrNumber) {
        alert('Please enter a PNR number');
        return;
    }
    
    if (pnrNumber.length !== 10) {
        alert('PNR number must be 10 digits');
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}/pnr-status/${pnrNumber}`);
        const data = await response.json();
        displayResults('pnrResults', data, 'pnr-status');
    } catch (error) {
        console.error('Error checking PNR:', error);
        displayResults('pnrResults', {
            success: false,
            error: 'Failed to check PNR status. Please try again.'
        }, 'pnr-status');
    } finally {
        hideLoading();
    }
}

// Check live train status
async function checkLiveStatus() {
    const trainNumber = document.getElementById('liveTrainNumber').value.trim();
    const departureDate = document.getElementById('departureDate').value;
    
    if (!trainNumber) {
        alert('Please enter a train number');
        return;
    }
    
    if (!departureDate) {
        alert('Please select a departure date');
        return;
    }
    
    // Convert date to YYYYMMDD format
    const formattedDate = departureDate.replace(/-/g, '');
    
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}/train-status?train_number=${trainNumber}&departure_date=${formattedDate}`);
        const data = await response.json();
        displayResults('liveStatusResults', data, 'live-status');
    } catch (error) {
        console.error('Error checking live status:', error);
        displayResults('liveStatusResults', {
            success: false,
            error: 'Failed to check live status. Please try again.'
        }, 'live-status');
    } finally {
        hideLoading();
    }
}

// Check seat availability
async function checkSeatAvailability() {
    const trainNumber = document.getElementById('seatTrainNumber').value.trim();
    const fromStation = document.getElementById('fromStation').value.trim();
    const toStation = document.getElementById('toStation').value.trim();
    const journeyDate = document.getElementById('journeyDate').value;
    const classCode = document.getElementById('classCode').value;
    
    if (!trainNumber || !fromStation || !toStation || !journeyDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    showLoading();
    
    try {
        const params = new URLSearchParams({
            train_number: trainNumber,
            from_station: fromStation,
            to_station: toStation,
            date: journeyDate,
            class_code: classCode
        });
        
        const response = await fetch(`${API_BASE_URL}/seat-availability?${params}`);
        const data = await response.json();
        displayResults('seatAvailabilityResults', data, 'seat-availability');
    } catch (error) {
        console.error('Error checking seat availability:', error);
        displayResults('seatAvailabilityResults', {
            success: false,
            error: 'Failed to check seat availability. Please try again.'
        }, 'seat-availability');
    } finally {
        hideLoading();
    }
}

// Utility functions

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format time for display
function formatTime(timeString) {
    return timeString.replace(/(\d{2})(\d{2})/, '$1:$2');
}

// Validate PNR number
function validatePNR(pnr) {
    return /^\d{10}$/.test(pnr);
}

// Validate train number
function validateTrainNumber(trainNumber) {
    return /^\d{4,5}$/.test(trainNumber);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'warning':
            notification.style.backgroundColor = '#f59e0b';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Handle keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]:not([style*="display: none"])');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals or clear focus
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Handle form submissions with Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('.service-form');
        if (form) {
            const submitButton = form.querySelector('.btn-primary');
            if (submitButton) {
                submitButton.click();
            }
        }
    }
});

// Add loading states to buttons
function addButtonLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    button.disabled = true;
    
    return function removeLoading() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// Handle offline/online status
window.addEventListener('online', function() {
    showNotification('Connection restored', 'success');
});

window.addEventListener('offline', function() {
    showNotification('You are offline. Some features may not work.', 'warning');
});

