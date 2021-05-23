/**
 * Handles API requests to the proxy server for contact form + subscriptions
 */

export const subscribe = (email) => {

  fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({
      email: email
    })
  }).then(res => {
    console.log("Request complete! response:", res);
  });

};

export const contactMessage = (name, email, message) => {

  /**
   * TODO: Don't even let them submit the form if they don't have a name, email, and message
   */

  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  }).then(res => {
    console.log("Request complete! response:", res);
  });

};
