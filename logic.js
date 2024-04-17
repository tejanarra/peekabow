// Define pricing data
const pricingData = {
    large: [
        { service: 'Bath', price: 'INR 800.00' },
        { service: 'Ear Cleaning', price: 'INR 100.00' },
        { service: 'Full Body Trimming', price: 'INR 1400.00' },
        { service: 'Minor Trimming', price: 'INR 300.00' },
        { service: 'Nail Trimming', price: 'INR 100.00' },
        { service: 'Oral Care', price: 'INR 100.00' },
        { service: 'PawsTrimming', price: 'INR 100.00' },
        { service: 'Sanitary Trimming', price: 'INR 100.00' },
        { service: 'Tick Bath', price: 'INR 1000.00' }
    ],
    medium: [
        { service: 'Bath', price: 'INR 700.00' },
        { service: 'Ear Cleaning', price: 'INR 100.00' },
        { service: 'Full Body Trimming', price: 'INR 1200.00' },
        { service: 'Minor Trimming', price: 'INR 300.00' },
        { service: 'Nail Trimming', price: 'INR 100.00' },
        { service: 'Oral Care', price: 'INR 100.00' },
        { service: 'PawsTrimming', price: 'INR 100.00' },
        { service: 'Sanitary Trimming', price: 'INR 100.00' },
        { service: 'Tick Bath', price: 'INR 1000.00' }
    ],
    small: [
        { service: 'Bath', price: 'INR 600.00' },
        { service: 'Ear Cleaning', price: 'INR 100.00' },
        { service: 'Full Body Trimming', price: 'INR 1000.00' },
        { service: 'Minor Trimming', price: 'INR 300.00' },
        { service: 'Nail Trimming', price: 'INR 100.00' },
        { service: 'Oral Care', price: 'INR 100.00' },
        { service: 'PawsTrimming', price: 'INR 100.00' },
        { service: 'Sanitary Trimming', price: 'INR 100.00' },
        { service: 'Tick Bath', price: 'INR 800.00' }
    ]
};


// Function to populate pricing details based on selected breed size
function populatePricingDetails() {
    const selectedBreeds = document.querySelectorAll('input[name="breed"]:checked');
    const pricingDetailsContainer = document.getElementById('pricing-details');

    pricingDetailsContainer.innerHTML = ''; // Clear previous content

    selectedBreeds.forEach(breed => {
        const breedSize = breed.value;
        const services = pricingData[breedSize];

        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('card', 'mb-3');
            serviceCard.style.width = '18rem';

            serviceCard.innerHTML = `
                <div class="card-header">
                    ${service.service}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${service.price}</li>
                </ul>
            `;

            pricingDetailsContainer.appendChild(serviceCard);
        });
    });
}


// Attach event listener to checkboxes
const breedCheckboxes = document.querySelectorAll('input[name="breed"]');
breedCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', populatePricingDetails);
});
