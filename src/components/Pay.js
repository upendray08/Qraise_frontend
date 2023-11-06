// import React, { useState, useEffect } from 'react';
// const RazorpayForm = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     campaign: '',
//     date: '',
//     email: '',
//     phone: '',
//     amount: ''
//   });

//   const handleChange = (e) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const amountInPaise = parseInt(formState.amount);
//     try {
//       const orderResponse = await fetch('/create_order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `amount=${amountInPaise}`
//       });

//       const orderData = await orderResponse.json();
//       if (orderData.order_id) {
//         const options = {
//           "key": "rzp_test_aZfDkycbpZZrus",
//           "amount": amountInPaise.toString(),
//           "currency": "INR",
//           "name": formState.campaign,
//           "description": "Donation for Campaign",
//           "image": "https://media.istockphoto.com/id/903516772/vector/gold-coin-and-donate-button-on-smartphone-screen-hand-holds-smartphone-finger-touches-screen.jpg?s=612x612&w=0&k=20&c=4liYdGng0VpCF9JkG1h2VK95UjkxDAa5CMEdYHNk0Uk=",
//           "order_id": orderData.order_id,
//           "handler": async (response) => {
//             const paymentDetails = {
//               ...formState,
//               payment_id: response.razorpay_payment_id
//             };
//             const paymentResponse = await fetch('/success', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(paymentDetails),
//             });

//             const paymentData = await paymentResponse.json();
//             if (paymentData.success) {
//               console.log('Payment was successful. Payment ID: ' + response.razorpay_payment_id);
//               window.location.href = '/profile';
//             } else {
//               console.error('Payment verification failed');
//               window.location.href = '/profile';
//             }
//           },
//           "prefill": {
//             "name": formState.name,
//             "email": formState.email,
//             "contact": formState.phone
//           },
//           "theme": {
//             "color": "#5cffab"
//           }
//         };
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       } else {
//         console.error('Order creation failed:', orderData.error);
//         alert('Error creating order. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (<div className="container" style={{
//     maxWidth: '500px',
//     margin: '50px auto',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#ffffff'
//   }}>
//     <h1 style={{
//       textAlign: 'center',
//       marginBottom: '20px',
//       color: '#333',
//       fontSize: '24px'
//     }}>Donor Details</h1>
//     <form id="paymentForm" onSubmit={handleSubmit} style={{
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px'
//     }}>
//       <label htmlFor="name" style={{ marginBottom: '5px' }}>Name</label>
//       <input type="text" name="name" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <label htmlFor="name" style={{ marginBottom: '5px' }}>Campaign Type</label>
//       <input type="text" name="name" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <label htmlFor="date" style={{ marginBottom: '5px' }}>Date</label>
//       <input type="date" name="date" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <label htmlFor="email" style={{ marginBottom: '5px' }}>Email</label>
//       <input type="email" name="email" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <label htmlFor="phone" style={{ marginBottom: '5px' }}>Phone</label>
//       <input type="tel" name="phone" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <label htmlFor="amount" style={{ marginBottom: '5px' }}>Amount (INR):</label>
//       <input type="number" name="amount" placeholder="Enter amount" onChange={handleChange} required style={{
//         padding: '10px',
//         marginBottom: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '4px'
//       }} />

//       <button type="submit" style={{
//         padding: '10px',
//         border: 'none',
//         borderRadius: '4px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         cursor: 'pointer',
//         fontSize: '16px',
//         transition: 'background-color 0.3s',
//       }}
//       onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
//       onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}>
//         Pay Now
//       </button>
//     </form>
//   </div>
//   );
// };
// export default RazorpayForm;

import React, { useState, useEffect } from "react";

const RazorpayForm = () => {
  // Helper function to get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Initialize formState with the current date
  const [formState, setFormState] = useState({
    name: "",
    campaign: "",
    date: getCurrentDate(), // Set the current date here
    email: "",
    phone: "",
    amount: "",
  });

  // ... (rest of your component)

  // When rendering the input for the date, use the date from formState:

  // State for the campaign names
  const [campaignNames, setCampaignNames] = useState([]);

  // ... (existing handleChange and handleSubmit functions)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const amountInPaise = parseInt(formState.amount);
    try {
      const orderResponse = await fetch("/create_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `amount=${amountInPaise}`,
      });
      const orderData = await orderResponse.json();
      if (orderData.order_id) {
        const options = {
          key: "rzp_test_aZfDkycbpZZrus",
          amount: amountInPaise.toString(),
          currency: "INR",
          name: formState.campaign,
          description: "Donation for Campaign",
          image:
            "https://media.istockphoto.com/id/903516772/vector/gold-coin-and-donate-button-on-smartphone-screen-hand-holds-smartphone-finger-touches-screen.jpg?s=612x612&w=0&k=20&c=4liYdGng0VpCF9JkG1h2VK95UjkxDAa5CMEdYHNk0Uk=",
          order_id: orderData.order_id,
          handler: async (response) => {
            const paymentDetails = {
              ...formState,
              payment_id: response.razorpay_payment_id,
            };
            const paymentResponse = await fetch("/success", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(paymentDetails),
            });

            const paymentData = await paymentResponse.json();
            if (paymentData.success) {
              console.log(
                "Payment was successful. Payment ID: " +
                  response.razorpay_payment_id
              );
              window.location.href = "/profile";
            } else {
              console.error("Payment verification failed");
              window.location.href = "/profile";
            }
          },
          prefill: {
            name: formState.name,
            email: formState.email,
            contact: formState.phone,
          },
          theme: {
            color: "#5cffab",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Order creation failed:", orderData.error);
        alert("Error creating order. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Fetch campaign names from the Flask API
  useEffect(() => {
    fetch("/camp") // Replace with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCampaignNames(data); // Assuming the API returns an array of campaign names
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  }, []); // The empty array ensures this effect runs only once after the initial render

  // ... (existing useEffect for loading the Razorpay script)

  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
          fontSize: "24px",
        }}
      >
        Donor Details
      </h1>
      <form
        id="paymentForm"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="name" style={{ marginBottom: "5px" }}>
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        {/* <label htmlFor="name" style={{ marginBottom: '5px' }}>Campaign Type</label>
        <input type="text" name="name" onChange={handleChange} required style={{
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }} /> */}

        <label htmlFor="campaign" style={{ marginBottom: "5px" }}>
          Campaign
        </label>
        <select
          name="campaign"
          value={formState.campaign}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">Select a campaign</option>
          {campaignNames.map((campaign, index) => (
            <option key={index} value={campaign}>
              {campaign}
            </option>
          ))}
        </select>
        <label htmlFor="date" style={{ marginBottom: "5px" }}>
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formState.date}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        {/* <label htmlFor="date" style={{ marginBottom: '5px' }}>Date</label>
        <input type="date" name="date" onChange={handleChange} required style={{
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }} /> */}

        <label htmlFor="email" style={{ marginBottom: "5px" }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <label htmlFor="phone" style={{ marginBottom: "5px" }}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <label htmlFor="amount" style={{ marginBottom: "5px" }}>
          Amount (INR):
        </label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          }
        >
          Pay Now
        </button>
      </form>
    </div>
    // ... (rest of your JSX)

    // ... (rest of your JSX)
  );
};

export default RazorpayForm;
