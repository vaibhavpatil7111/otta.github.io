function slidnav(action) {
            const menuIcon = document.getElementById('menu');
            const closeIcon = document.getElementById('close');
            const mobileFunctions = document.getElementById('mobile-functions');

            if (action === 'menu') {
                mobileFunctions.style.display = 'flex';
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                mobileFunctions.style.display = 'none';
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }

        document.querySelector('.burger').addEventListener('click', function () {
            document.querySelector('.nav-links').classList.toggle('nav-active');
            this.classList.toggle('toggle');
        });
        