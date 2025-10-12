// DOM Elements
        const hamburger = document.getElementById('hamburger');
        const sideNav = document.getElementById('sideNav');
        const closeBtn = document.getElementById('closeBtn');
        const backToTop = document.getElementById('backToTop');
        const themeToggle = document.getElementById('themeToggle');
        const sideThemeToggle = document.getElementById('sideThemeToggle');
        const viewProjectButtons = document.querySelectorAll('.view-project');
        const modalCloseButtons = document.querySelectorAll('.modal-close');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const workCards = document.querySelectorAll('.work-card');
        
        // Toggle Side Navigation
        hamburger.addEventListener('click', () => {
            sideNav.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            sideNav.classList.remove('active');
        });
        
        // Back to Top Button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Theme Toggle
        themeToggle.addEventListener('click', toggleTheme);
        if (sideThemeToggle) {
            sideThemeToggle.addEventListener('click', toggleTheme);
        }
        
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            
            // Update icon based on current theme
            const isLight = document.body.classList.contains('light-theme');
            themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            
            // Close side nav if open
            sideNav.classList.remove('active');
        }
        
        // Project Modals
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = button.getAttribute('data-project');
                const modal = document.getElementById(`projectModal${projectId}`);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        modalCloseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });
        
        // Work Filter
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                workCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Animate elements on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Animate skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width;
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            // Store the width in a data attribute
            bar.setAttribute('data-width', bar.style.width);
            // Reset width for animation
            bar.style.width = '0';
            skillsObserver.observe(bar);
        });
        
        // Initialize animated background
        const animatedBg = document.querySelector('.animated-bg');
        const spans = animatedBg.querySelectorAll('span');
        
        spans.forEach((span, index) => {
            // Randomize animation delay and duration
            const delay = Math.random() * 5;
            const duration = 15 + Math.random() * 10;
            const size = 10 + Math.random() * 30;
            
            span.style.left = `${Math.random() * 100}%`;
            span.style.animationDelay = `${delay}s`;
            span.style.animationDuration = `${duration}s`;
            span.style.width = `${size}px`;
            span.style.height = `${size}px`;
        });