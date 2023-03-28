const signUp = async (event) => {
  let data = {
    firstName,
    lastName,
    phone,
    email,
    password,
    confirmPassword,
    dateOfBirth,
    adminVerificationCode,
    organization,
    role,
    securityQuestion,
    secondaryEmailAddress,
  };

  console.warn(data);

  let result = await fetch(
    "https://learningmanagement-staging.up.railway.app/api/learning-mgt/v1/user/sign-up",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  result = await result.json();
  console.warn("result", result);
};

const handleSubmit = (event) => {
  event.preventDefault();

  fetch("/api/sign-up", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        // Redirect to verification page
        window.location.href = "/verification";
      } else {
        setErrorMessage("Failed to sign up.");
      }
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage("Failed to sign up.");
    });
};
