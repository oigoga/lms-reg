const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      email,
      password,
      dateOfBirth,
     
      securityQuestion,
      secondaryEmailAddress,
    } = event.target.elements;

    const newUser = {
      firstName: firstName.value,
      email: email.value,
      password: password.value,
      dateOfBirth: dateOfBirth.value,
     
      securityQuestion: securityQuestion.value,
      secondaryEmailAddress: secondaryEmailAddress.value
    };

    try {
      const response = await axios.post("/api/learning-mgt/v1/user/sign-up", newUser);
      console.log(response.data);
      // handle success
    } catch (error) {
      console.error(error);
      // handle error
    }
    // handle form submission
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      email,
      password,
      dateOfBirth,
      adminVerificationCode,
      organization,
      role,
      securityQuestion,
      secondaryEmailAddress,
    } = event.target.elements;

    const newUser = {
      firstName: firstName.value,
      email: email.value,
      password: password.value,
      dateOfBirth: dateOfBirth.value,
      adminVerificationCode: adminVerificationCode.value,
      organization: organization.value,
      role: role.value,
      securityQuestion: securityQuestion.value,
      secondaryEmailAddress: secondaryEmailAddress.value
    };

    try {
      const response = await axios.post("/api/learning-mgt/v1/user/sign-up", newUser);
      console.log(response.data);
      
      const verificationResponse = await axios('/api/learning-mgt/v1/auth/verify-email/{token}', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      console.log(verificationResponse.data);
      window.location.href = '/verify-email';
    } catch (error) {
      console.error(error);
    }
  

   
    
  };
