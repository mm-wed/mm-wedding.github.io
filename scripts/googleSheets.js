    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBaHl6N8xc89FTrk_GowMCgd9nVB-97zYAUPtOFhMBSMB4yEHmU5pKoJqtwXWl9bgiJw/exec';
    const form = document.forms['RSVP'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                // Clear the form
                form.reset();
                // Show alert
                alert('Thank you for your response! We truly appreciate your RSVP. Whether you can join us or not, your presence means a lot to us!');
            })
            .catch(error => console.error('Error!', error.message));
    });
