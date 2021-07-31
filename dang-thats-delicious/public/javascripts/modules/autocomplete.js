function autocomplete(address, lat, lng) {
    if(!address) return // skip this function from running if no input on the page
    const dropdown = new google.maps.places.Autocomplete(address)

    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace()
        lat.value = place.geometry.location.lat()
        lng.value = place.geometry.location.lng()
    })
    // if someone hits enter on the address field, don't submit the form
    address.on('keydown', (e) => {
        if(e.keyCode === 13) e.preventDefault()
    })
}

export default autocomplete