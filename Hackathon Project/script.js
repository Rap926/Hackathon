document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');

    yesBtn.addEventListener('click', function() {
        // Handle action for "Yes" button (like showing a match)
        console.log('Liked!');
    });

    noBtn.addEventListener('click', function() {
        // Handle action for "No" button (like showing the next profile)
        console.log('Disliked!');
    });
});
