const services = document.querySelector('#service-selector');
const countries = document.querySelector('#country-selector');
const phone = document.querySelector('#phone');
let countryData = [];

async function popuateServicesDropDown() {
	const jsonURL = 'https://aliice.space/api/services';

	try {
		const response = await fetch(jsonURL);
		const jsonData = await response.json();

		jsonData.data.forEach(item => {
			const option = document.createElement('option');
			option.value = item.id;
			option.textContent = item.name;
			services.appendChild(option);
		});

	} catch (error) {
		console.log("Error fetching data: ", error);
	}
}

async function populateCountriesDropDown() {
	const jsonURL = 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json';

	try {
		const response = await fetch(jsonURL);
		countryData = await response.json();

		countryData.forEach(item => {
			const option = document.createElement('option');
			option.value = item.code;
			option.textContent = item.name;

			if (item.code === 'AE') {
				option.selected = true;
			}

			countries.appendChild(option);
		});

		updatePhoneDialCode();

	} catch (error) {
		console.log("Error fetching data: ", error);
	}
}

function updatePhoneDialCode() {
	const selectedCountryCode = countries.value;
	const selectedCountry = countryData.find(country => country.code === selectedCountryCode);

	if (selectedCountry) {
		phone.value = selectedCountry.dial_code;
	}
}

countries.addEventListener('change', updatePhoneDialCode);

popuateServicesDropDown();
populateCountriesDropDown();

