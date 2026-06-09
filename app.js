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

async function loadContent() {
			try {
				const [response1, response2] = await Promise.all([
					fetch('indexPass.html'),
					fetch('indexTicket.html')
			    ]);
				
				const html1 = await response1.text();
				const html2 = await response2.text();
				
				document.getElementById('section-one').innerHTML = html1;
				document.getElementById('section-two').innerHTML = html2;
			} catch (error) {
				console.error('Error loading pages:', error);
			}
		}
		
		
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});