// Funcionalidades JavaScript para Electricista en Junín

document.addEventListener('DOMContentLoaded', function() {
    // Botón de WhatsApp
    const createWhatsAppButton = () => {
        // Crear el botón
        const whatsappButton = document.createElement('a');
        whatsappButton.href = 'https://wa.me/5492364579486?text=Hola,%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios%20el%C3%A9ctricos';
        whatsappButton.target = '_blank';
        whatsappButton.rel = 'noopener noreferrer';
        whatsappButton.classList.add('whatsapp-button');
        whatsappButton.setAttribute('aria-label', 'Contactar por WhatsApp');
        whatsappButton.setAttribute('title', 'Chat en vivo - Respuesta inmediata');
        whatsappButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
        `;
        
        // Crear el texto de chat en vivo (tooltip)
        const chatText = document.createElement('div');
        chatText.textContent = 'Chat en vivo';
        chatText.style.position = 'fixed';
        chatText.style.bottom = '90px';
        chatText.style.right = '85px';
        chatText.style.backgroundColor = '#25D366';
        chatText.style.color = 'white';
        chatText.style.padding = '5px 10px';
        chatText.style.borderRadius = '5px';
        chatText.style.fontSize = '12px';
        chatText.style.fontWeight = 'bold';
        chatText.style.opacity = '0';
        chatText.style.transition = 'opacity 0.3s ease';
        chatText.style.whiteSpace = 'nowrap';
        chatText.style.zIndex = '49';
        
        // Agregar al documento
        document.body.appendChild(whatsappButton);
        document.body.appendChild(chatText);
        
        // Mostrar tooltip al pasar el mouse
        whatsappButton.addEventListener('mouseenter', () => {
            chatText.style.opacity = '1';
        });
        
        whatsappButton.addEventListener('mouseleave', () => {
            chatText.style.opacity = '0';
        });
        
        // Efecto de clic
        whatsappButton.addEventListener('click', () => {
            whatsappButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                whatsappButton.style.transform = '';
            }, 100);
        });
    };
    
    createWhatsAppButton();
    // Menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botón de volver arriba
    const createScrollToTopButton = () => {
        const button = document.createElement('div');
        button.classList.add('scroll-to-top');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
        `;
        document.body.appendChild(button);
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });
    };
    
    createScrollToTopButton();
    
    // Lazy loading para imágenes
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;
                        image.classList.add('loaded');
                        observer.unobserve(image);
                    }
                });
            });
            
            lazyImages.forEach(image => {
                image.classList.add('lazy-image');
                imageObserver.observe(image);
            });
        } else {
            // Fallback para navegadores que no soportan IntersectionObserver
            lazyImages.forEach(image => {
                image.classList.add('loaded');
            });
        }
    };
    
    lazyLoadImages();
    
    // Validación de formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validar nombre
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Por favor ingrese su nombre');
                isValid = false;
            } else {
                clearError(nameInput);
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
                showError(emailInput, 'Por favor ingrese un email válido');
                isValid = false;
            } else {
                clearError(emailInput);
            }
            
            // Validar mensaje
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Por favor ingrese su mensaje');
                isValid = false;
            } else {
                clearError(messageInput);
            }
            
            if (isValid) {
                // Aquí iría la lógica para enviar el formulario
                // Por ahora solo mostraremos un mensaje de éxito
                const successMessage = document.createElement('div');
                successMessage.classList.add('bg-green-100', 'text-green-700', 'p-4', 'rounded', 'mb-4');
                successMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
                
                contactForm.parentNode.insertBefore(successMessage, contactForm);
                contactForm.reset();
                
                // Eliminar el mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    function showError(input, message) {
        input.classList.add('error');
        
        // Eliminar mensaje de error anterior si existe
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Crear y añadir nuevo mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
    
    function clearError(input) {
        input.classList.remove('error');
        
        // Eliminar mensaje de error si existe
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Animación para números de estadísticas (contador)
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        if (counters.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // 2 segundos
                    const step = Math.ceil(target / (duration / 16)); // 60fps
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += step;
                        if (current > target) {
                            current = target;
                        }
                        counter.textContent = current;
                        
                        if (current < target) {
                            requestAnimationFrame(updateCounter);
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    };
    
    // Llamar a la función cuando se agreguen los contadores al DOM
    // animateCounters();
});
