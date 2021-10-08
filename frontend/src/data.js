const arr = [
    { id: 0, name: "2020 Hyundai AURA", km: "1441 km", owner: "1st owner", fuel: "Petrol", model: "D1-12", emi: 13364, price: 600799, img: "data:image/jpeg;base64,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", location: "Bangalore" },
    { id: 1, name: "2020 Maruti IGNIS", km: "2206 km", owner: "2nd owner", fuel: "Petrol", model: "HR-15", emi: 11022, price: 495499, img: "https://fastly-production.24c.in/inspection-car/appointments/1104943044/spincar/1627679335-cu-2.jpg?w=375&auto=format", location: "Bangalore" },
    { id: 2, name: "2020 Maruti New Wagon-R", km: "1694 km", owner: "1st owner", fuel: "Petrol", model: "DL-8C", emi: 11176, price: 502399, img: "https://fastly-production.24c.in/inspection-car/appointments/1001091107/spincar/1632172282-cu-2.jpg?w=375&auto=format", location: "Bangalore" },
    { id: 3, name: "2019 Maruti Swift", km: "3362 km", owner: "1st owner", fuel: "Diesel", model: "UP-14", emi: 13807, price: 620699, img: "https://fastly-production.24c.in/inspection-car/appointments/1123551302/spincar/1631999633-cu-2.jpg?w=375&auto=format", location: "Bangalore" },
    { id: 4, name: "2020 Hyundai GRAND I10 NIOS", km: "4955 km", owner: "3rd owner", fuel: "Petrol", model: "HR-03", emi: 12997, price: 584299, img: "https://fastly-production.24c.in/inspection-car/appointments/1488790147/spincar/1630962497-cu-2.jpg?w=375&auto=format", location: "New Delhi" },
    { id: 5, name: "2020 Maruti New Wagon-R", km: "7242 km", owner: "1st owner", fuel: "Petrol", model: "DL-12", emi: 11202, price: 503599, img: "https://fastly-production.24c.in/inspection-car/appointments/1001646140/spincar/1629838565-cu-2.jpg?w=375&auto=format", location: "New Delhi" },
    { id: 6, name: "2020 Maruti Baleno", km: "17812 km", owner: "1st owner", fuel: "Petrol", model: "DL-2C", emi: 12401, price: 557499, img: "https://fastly-production.24c.in/inspection-car/appointments/1100081602/spincar/1631739398-cu-2.jpg?w=375&auto=format", location: "New Delhi" }
]

export default arr;