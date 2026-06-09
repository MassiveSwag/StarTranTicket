		function toggleView() {
			const one = document.getElementById('section-one');
			const two = document.getElementById('section-two');
			
			if (one.style.display === 'none') {
				one.style.display = 'block';
				two.style.display = 'none';
			} else {
				one.style.display = 'none';
				two.style.display = 'block';
			}
		}

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});