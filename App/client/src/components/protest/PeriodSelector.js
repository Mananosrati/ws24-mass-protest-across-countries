function PeriodSelector({ selectedPeriod, setSelectedPeriod }) {
    const nextWeek = '2024-02-01T00:00:00.000Z';
    const nextMonth = '2023-12-31T23:59:59.999Z';

    return (
        <div>
            <label>
                <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                    <option value="">Upcoming protests</option>
                    <option value={nextWeek}>Next week</option> 
                    <option value={nextMonth}>Next month</option>             
                </select>
            </label>
        </div>
    );
}

export default PeriodSelector;