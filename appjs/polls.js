document.addEventListener('DOMContentLoaded', () => {
    const totalVotesElement = document.getElementById('total-votes');
    const registeredVotersElement = document.getElementById('registered-voters');
    const pollingUnitsElement = document.getElementById('polling-units');
    const pollingUnitsList = document.getElementById('polling-units-list');
    const voteForm = document.getElementById('vote-form');
    const voteMessage = document.getElementById('vote-message');

    // Sample data
    const totalVotes = 100000;
    const registeredVoters = 200000;
    const pollingUnits = 1000;

    totalVotesElement.textContent = totalVotes.toLocaleString();
    registeredVotersElement.textContent = registeredVoters.toLocaleString();
    pollingUnitsElement.textContent = pollingUnits.toLocaleString();

    const pollingUnitData = [
        { location: 'Abuja', unit: 'Polling Unit 1' },
        { location: 'Lagos', unit: 'Polling Unit 2' },
        { location: 'Kano', unit: 'Polling Unit 3' },
        // Add more polling units as needed
    ];

    function displayPollingUnits(units) {
        pollingUnitsList.innerHTML = '';
        units.forEach(unit => {
            const unitElement = document.createElement('div');
            unitElement.className = 'polling-unit';
            unitElement.textContent = `${unit.unit} - ${unit.location}`;
            pollingUnitsList.appendChild(unitElement);
        });
    }

    displayPollingUnits(pollingUnitData);

    document.getElementById('search-button').addEventListener('click', () => {
        const searchTerm = document.getElementById('polling-unit-search').value.toLowerCase();
        const filteredUnits = pollingUnitData.filter(unit => unit.location.toLowerCase().includes(searchTerm));
        displayPollingUnits(filteredUnits);
    });

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const voterId = document.getElementById('voter-id').value;
        const candidate = document.getElementById('candidate').value;

        // Simulate vote submission (In a real application, you would send this data to the server)
        console.log(`Voter ID: ${voterId}, Candidate: ${candidate}`);
        
        voteMessage.textContent = 'Your vote has been successfully submitted!';
        voteForm.reset();
    });
});
