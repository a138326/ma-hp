
	
let fakeSelects = Array.from(document.querySelectorAll('.js-fake-select'));

fakeSelects.forEach((select, i) => {
		let parent = select.parentNode;
		let fake = parent.querySelector('.styled-form__input--fake');

		select.addEventListener('change',function(elem){

			let targetSelect = elem.target;
			let value = targetSelect.options[targetSelect.selectedIndex].text;
			fake.textContent = value;
		});
	});
	
	
