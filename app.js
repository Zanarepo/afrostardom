document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
    const navProgressBar = document.getElementById('nav-progress-bar');
    const navProgressText = document.getElementById('nav-progress-text');

    // Load saved state from localStorage
    const loadState = () => {
        const savedData = JSON.parse(localStorage.getItem('afrostardom_roadmap_full')) || {};
        checkboxes.forEach(cb => {
            const id = cb.getAttribute('data-id');
            if (savedData[id]) {
                cb.checked = true;
                // Add strikethrough styling class to parent label text
                cb.parentElement.style.textDecoration = 'line-through';
                cb.parentElement.style.opacity = '0.4';
            }
        });
        updateProgress();
    };

    // Save state to localStorage
    const saveState = () => {
        const data = {};
        checkboxes.forEach(cb => {
            const id = cb.getAttribute('data-id');
            data[id] = cb.checked;
        });
        localStorage.setItem('afrostardom_roadmap_full', JSON.stringify(data));
    };

    // Update progress bar in Navbar
    const updateProgress = () => {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.task input[type="checkbox"]:checked').length;
        const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);
        
        navProgressBar.style.width = `${percentage}%`;
        navProgressText.textContent = `${percentage}%`;
    };

    // Event listeners
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            if (isChecked) {
                e.target.parentElement.style.textDecoration = 'line-through';
                e.target.parentElement.style.opacity = '0.4';
            } else {
                e.target.parentElement.style.textDecoration = 'none';
                e.target.parentElement.style.opacity = '1';
            }
            saveState();
            updateProgress();
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize
    loadState();
});
