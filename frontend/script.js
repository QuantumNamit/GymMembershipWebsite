function signIn(userType) {
    switch (userType) {
        case 'owner':
            window.location.href = 'ownerSignIn.html';
            break;
        case 'employee':
            window.location.href = 'employeeSignIn.html';
            break;
        case 'member':
            window.location.href = 'memberSignIn.html';
            break;

        case 'newmember':
            window.location.href = 'newMember.html';
            break;
        case 'memberPlans':
            window.location.href = 'membershipPlans.html';
            break;
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const employeeSignInForm = document.getElementById('employeeSignInForm');

    if (employeeSignInForm) {
        employeeSignInForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const empUsername = document.getElementById('empUsername').value;
            const empPassword = document.getElementById('empPassword').value;

            try {
                const response = await fetch('/employeeSignIn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ empUsername, empPassword })
                });

                const result = await response.json();

                if (result.success) {
                    window.location.href = 'employeeDashboard.html'; // Redirect upon successful login
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Employee sign-in form not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ownerSignInForm = document.getElementById('ownerSignInForm');

    if (ownerSignInForm) {
        ownerSignInForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/ownerSignin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();

                if (result.success) {
                    window.location.href = 'ownerDashboard.html'; // Redirect upon successful login
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Owner sign-in form not found.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const memberSignInForm = document.getElementById('memberSignInForm');

    if (memberSignInForm) {
        memberSignInForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const memberUsername = document.getElementById('memberUsername').value;
            const memberPassword = document.getElementById('memberPassword').value;

            try {
                const response = await fetch('/memberSignIn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ memberUsername, memberPassword })
                });

                const result = await response.json();

                if (result.success) {
                    localStorage.setItem('username',memberUsername);
                    window.location.href = 'memberDashboard.html'; // Redirect upon successful login
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Member sign-in form not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const newMember = document.getElementById('newMember');

    if (newMember) {
        newMember.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevents the default form submission

            var username = document.getElementById('usernameInput').value;
            var password = document.getElementById('passwordInput').value;
            var membershipPlan = document.getElementById('membershipPlanSelect').value;
            var locker = document.getElementById('lockerSelect').value;

            var paymentOption;
            if (document.getElementById('paymentCardRadio').checked) {
                paymentOption = document.getElementById('paymentCardRadio').value;
            } else if (document.getElementById('paymentCashRadio').checked) {
                paymentOption = document.getElementById('paymentCashRadio').value;
            }

            try {
                const response = await fetch('/newMember', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password, membershipPlan, locker, paymentOption })
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Registration Successful")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Member sign-in form not found.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const editInfoForm = document.getElementById('editInfoForm');

    if (editInfoForm) {
        editInfoForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent form submission (for demonstration purposes)

            // Get values from the form
            const username = document.getElementById('username').value;
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;

            // // Reset the form after submission (optional)
            // document.getElementById('editInfoForm').reset();
            try {
                const response = await fetch('/memberDashboard', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, currentPassword, newPassword })
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Credentials Changed Successfully")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Member dashboard form not found.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const selectSessionForm = document.getElementById('selectSessionForm');

    if (selectSessionForm) {
        selectSessionForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 
            // Get selected session value
            const selectedSession = document.getElementById('session').value;
            const member_name=localStorage.getItem('username');

            try {
                const response = await fetch('/selectedSession', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({member_name,selectedSession})
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Session Picked Successfully")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Member dashboard form not found.');
    }
    localStorage.removeItem('username');
});


document.addEventListener('DOMContentLoaded', () => {
    const edit_user_settings_form = document.getElementById('edit_user_settings_form');

    if (edit_user_settings_form) {
        edit_user_settings_form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent form submission (for demonstration purposes)

            // Get values from input fields
            const username = document.getElementById('edit_username').value;
            const currentPassword = document.getElementById('current_password').value;
            const newPassword = document.getElementById('new_password').value;
        
            // // Reset the form after submission (optional)
            // document.getElementById('editInfoForm').reset();
            try {
                const response = await fetch('/editOwnerInfo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, currentPassword, newPassword })
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Credentials Changed Successfully")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Owner dashboard form not found.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const add_trainer_form = document.getElementById('add_trainer_form');

    if (add_trainer_form) {
        add_trainer_form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get values from input fields
            const trainerUsername = document.getElementById('trainer_username').value;
            const trainerPassword = document.getElementById('trainer_password').value;
        
            // // Reset the form after submission (optional)
            // document.getElementById('editInfoForm').reset();
            try {
                const response = await fetch('/addTrainer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ trainerUsername, trainerPassword})
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Trainer Added Successfully")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Owner dashboard form not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const remove_trainer_form = document.getElementById('remove_trainer_form');

    if (remove_trainer_form) {
        remove_trainer_form.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get value from the input field
            const removeTrainerUsername = document.getElementById('remove_trainer_username').value;
        
            // // Reset the form after submission (optional)
            // document.getElementById('editInfoForm').reset();
            try {
                const response = await fetch('/removeTrainer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ removeTrainerUsername})
                });

                const result = await response.json();

                if (result.success) {
                    window.alert("Trainer Removed Successfully")
                } else {
                    // Handle unsuccessful login, show error message, etc.
                    console.log('Unsuccessful');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.log('Owner dashboard form not found.');
    }
});

