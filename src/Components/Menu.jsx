import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/menu.css'; // Import the CSS file for styling
import { port } from '../port/portno';
import { FaTruckField } from 'react-icons/fa6';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import Calender from './Cal'; // Ensure the path is correct
import 'react-datepicker/dist/react-datepicker.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Menu() {

  const navigate = useNavigate();

  
  const [menuData, setMenuData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Veg');
  const [error, setError] = useState(null);
  const [bookingDay, setBookingDay] = useState('');
  const [otp, setOtp] = useState(null);
  const [isSunday, setIsSunday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false); 
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [orderResponse, setOrderResponse] = useState('');
  const [orderDetails, setOrderDetails] = useState([]);
  const [setresponse, setResponse] = useState([]);
  const [otpTokenId, setOtpTokenId] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [tokenUses, setTokenUses] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [tokenn, setTokenn] = useState(null);
  const [datee, setDate] = useState(null);
  const [isOrderDetailsLoading, setIsOrderDetailsLoading] = useState(false);
  const [quantity, setQuantity] = useState(); 
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [selectedDate, setSelectedDate] = useState(null); 
  const [quantityMap, setQuantityMap] = useState({}); 
  const [isWithinAllowedTime, setIsWithinAllowedTime] = useState(false); 

  const jwtToken = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email); 
  const dispatch = useDispatch();


  let decode;
  let userId;

  if (jwtToken) {
    try {
      decode = jwtDecode(jwtToken);
      userId = decode.userId;
    } catch (error) {
      console.error('Error decoding JWT:', error);
      setError('Invalid authentication token.');
    }
  } else {
    console.warn('JWT token is missing.');
    setError('Authentication token is missing.');
  }


  const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };


  const determineBookingDay = () => {
    const today = new Date();
    const currentDay = today.getDay(); 
    let bookedDayDate;

    if (currentDay >= 1 && currentDay <= 4) {
     
      bookedDayDate = new Date(today);
      bookedDayDate.setDate(today.getDate() + 1);
    } else if (currentDay === 5 || currentDay === 6) {
      
      const daysToAdd = 8 - currentDay; 
      bookedDayDate = new Date(today);
      bookedDayDate.setDate(today.getDate() + daysToAdd);
    } else {
    
      bookedDayDate = new Date(today);
      bookedDayDate.setDate(today.getDate() + 1);
    }

    const options = { weekday: 'long' };
    const bookedDayName = bookedDayDate.toLocaleDateString('en-US', options);

    return bookedDayName;
  };

 
  const menuDataMap = {
    Monday: {
      veg: 1,
    },
    Tuesday: {
      veg: 2,
    },
    Wednesday: {
      veg: 3,
      nonVeg: 4,
      egg: 5,
    },
    Thursday: {
      veg: 6,
    },
    Friday: {
      veg: 7,
    },
  
  };

  // Helper function to format date to 'YYYY-MM-DD'
  const formatDateToYYYYMMDD = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return null;
    const year = date.getFullYear();
    const month = (`0${(date.getMonth() + 1)}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // Function to map menuId to menuType
  const getMenuTypeFromMenuId = (menuId) => {
    for (const day in menuDataMap) {
      for (const type in menuDataMap[day]) {
        if (menuDataMap[day][type] === menuId) {
          return type;
        }
      }
    }
    return null;
  };

  // Fetch the latest order ID
  const fetchLatestOrderId = async () => {
    try {
      const response = await axios.get(`${port}/api/orders/latest/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const fetchedOrderId = response.data?.orderId;
      if (fetchedOrderId) {
        setOrderId(fetchedOrderId);
        setError(null); 
        return fetchedOrderId;
      } else {
        console.warn('No order ID found in the response.');
        setError('No order ID found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
      if (error.response && error.response.status === 403) {
        setError('You need to login again.');
      } else {
        setError('Failed to fetch order data. Please try again.');
      }
      return null;
    }
  };

  const fetchOrderDetails = async (fetchedOrderId) => {
    try {
      setIsOrderDetailsLoading(true); 
      const response = await axios.get(`${port}/api/order-details/user/future?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

   
      const fetchedOrderDetails = response.data;

      const tempQuantityMap = {};

      fetchedOrderDetails.forEach((orderDetail) => {
        const deliveryDate = formatDateToYYYYMMDD(orderDetail.deliveryDate);
        if (deliveryDate) {
          if (!tempQuantityMap[deliveryDate]) {
            tempQuantityMap[deliveryDate] = 0;
          }
       
          if (orderDetail.isActive === 1) {
            tempQuantityMap[deliveryDate] += orderDetail.quantity;
          }
        }
      });

      setQuantityMap(tempQuantityMap);
      setOrderDetails(fetchedOrderDetails);
      setResponse(fetchedOrderDetails.map((item) => ({
        token: item.token,
        quantity: item.orderQtyCount,
        deliveryDate: formatDateToYYYYMMDD(item.deliveryDate),
      })));
      setError(null); 
    } catch (error) {
      console.error('Error fetching order details:', error);
      if (error.response && error.response.status === 403) {
        setError('You need to login again.');
      } else {
        setError('Failed to fetch order details. Please try again.');
      }
    } finally {
      setIsOrderDetailsLoading(false); 
    }
  };


  useEffect(() => {
    const initializeOrder = async () => {
      if (jwtToken && userId) {
        const fetchedOrderId = await fetchLatestOrderId();
        if (fetchedOrderId) {
          await fetchOrderDetails(fetchedOrderId);
        }
      }
    };
    initializeOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtToken, userId]);

  // Helper function to filter menu items based on category
  const filterItems = (category, data = menuData) => {
    setActiveFilter(category);
    if (data.length === 0) return;

    let filtered = [];
    let menuId = null;

    if (category === 'Veg') {
      const vegMenu = data.find((menu) => menu.isVeg === 1);
      filtered = vegMenu?.menuItems || [];
      menuId = vegMenu?.menuId || null;
    } else if (category === 'Non-Veg') {
      const nonVegMenu = data.find((menu) => menu.isVeg === 0);
      filtered = nonVegMenu?.menuItems || [];
      menuId = nonVegMenu?.menuId || null;
    } else if (category === 'Egg') {
      const eggMenu = data.find((menu) => menu.isVeg === 2);
      filtered = eggMenu?.menuItems || [];
      menuId = eggMenu?.menuId || null;
    }

    setSelectedMenuId(menuId);
    setFilteredItems(filtered);
  };

  // Handle Date Selection from Calendar
  const handleClick = (selectedDateFromCal) => {
    // Convert the selected date to 'YYYY-MM-DD' format
    const formattedSelectedDate = formatDateToYYYYMMDD(selectedDateFromCal);
    setSelectedDate(formattedSelectedDate);

    // Determine the day name from the selected date
    const dateObject = new Date(selectedDateFromCal);
    const dayName = getDayName(dateObject.getDay());
    setBookingDay(dayName);

    // Update isSunday and isWednesday based on the selected date
    setIsSunday(dateObject.getDay() === 0);
    setIsWednesday(dateObject.getDay() === 3); // 3 corresponds to Wednesday
  };

  // useEffect to determine initial booking day and fetch menu data
  useEffect(() => {
    // Determine initial booking day using the updated logic
    const initialBookingDay = determineBookingDay();

    setBookingDay(initialBookingDay);
    const today = new Date();
    setIsSunday(today.getDay() === 0);
    setIsWednesday(today.getDay() === 3); // 3 corresponds to Wednesday

    if (jwtToken && initialBookingDay) {
      axios
        .get(`${port}/api/menus/menu/${initialBookingDay}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          setMenuData(response.data);
          filterItems('Veg', response.data);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching menu data:', error);
          if (error.response && error.response.status === 403) {
            setError('You need to login again.');
          } else {
            setError('Please Login Again');
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtToken]);

  // useEffect to fetch menu data whenever bookingDay changes (including initial load and date selection)
  useEffect(() => {
    if (jwtToken && bookingDay) {
      axios
        .get(`${port}/api/menus/menu/${bookingDay}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          setMenuData(response.data);
          filterItems('Veg', response.data);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching menu data:', error);
          if (error.response && error.response.status === 403) {
            setError('You need to login again.');
          } else {
            setError('Please Login Again');
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingDay, jwtToken]);

  /**
   * Checks if the current time is between 12 PM and 8 PM.
   * @returns {boolean} - True if within allowed time, else false.
   */
  const checkIfWithinAllowedTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 12 && hours < 20; // 12 PM to 8 PM
  };

  // useEffect to set and update the isWithinAllowedTime state
  useEffect(() => {
    setIsWithinAllowedTime(checkIfWithinAllowedTime());

    const interval = setInterval(() => {
      setIsWithinAllowedTime(checkIfWithinAllowedTime());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Handle OTP (Token) Generation
  const handleOtp = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      setError('Please select a delivery date.');
      return;
    }

    // Check if quantity for the selected date is less than 1
    const currentQuantity = quantityMap[selectedDate] || 0;
    if (currentQuantity >= 1) {
      setError('You have already generated a token for the selected date.');
      return;
    }

    // Check if within allowed time
    if (!isWithinAllowedTime) {
      setError('Token generation is only allowed between 12 PM to 8 PM.');
      return;
    }

    const quantities = 1;
    const url = `${port}/api/orders/submit?menuIds=${selectedMenuId}&quantities=${quantities}&deliveryDate=${selectedDate}`;
    try {
      const respon = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      console.log('OTP Generation Response:', respon.data); // Inspect response
      const responseData = respon.data;

      // Adjust the regex based on your actual API response format
      const tokenIdMatch = responseData.match(/Your tokens are:\s*(\d+)/);
      const usesMatch = responseData.match(/It can be used (\d+) times/);

      console.log(tokenIdMatch, "11111111111");

      setOrderResponse('Order submitted successfully.');
      setOtpTokenId(tokenIdMatch ? tokenIdMatch[1] : '');
      setTokenUses(usesMatch ? usesMatch[1] : '');

      // Update the quantityMap
      setQuantityMap(prevMap => ({
        ...prevMap,
        [selectedDate]: (prevMap[selectedDate] || 0) + quantities,
      }));

      // Fetch the latest order details to update the UI
      if (orderId) {
        await fetchOrderDetails(orderId);
      } else {
        const fetchedOrderId = await fetchLatestOrderId();
        if (fetchedOrderId) {
          await fetchOrderDetails(fetchedOrderId);
        }
      }

    } catch (error) {
      console.error('Error generating OTP:', error);
      setError('Failed to generate Token. Please try again.');
    }
  };

  // Handle Opening the Cancel Dialog
  const handleClickOpen = (e, val, deliveryDate) => {
    e.preventDefault();
    setOpen(true);
    setTokenn(val);
    setSelectedDate(deliveryDate); // Set the date of the token to be cancelled
  };

  // Handle Closing the Dialog
  const handleClose = () => {
    setOpen(false);
    setOpenSnackbar(false);
  };

  // Handle Confirming the Cancellation
  const handleYes = async (e, val, deliveryDate) => {
    e.preventDefault();

    // Check if within allowed time before proceeding
    if (!isWithinAllowedTime) {
      setError('Token cancellation is only allowed between 12 PM to 8 PM.');
      setOpen(false);
      return;
    }

    try {
      // Prepare the request data
      let data = JSON.stringify({
        token: val, // Pass token
      });

      // API request configuration
      let config = {
        method: 'put',
        maxBodyLength: Infinity, // Allow large request body
        url: `${port}/api/order-details/cancel`, // Correct API URL
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        data: data,
      };

      // Make API request to cancel the token
      const response = await axios.request(config);

      if (response.status === 200) {
        // If successful, display popup and navigate to login page
        setError(''); // Clear any previous error messages

        // Remove the delivery date from quantityMap
        setQuantityMap(prevMap => ({
          ...prevMap,
          [deliveryDate]: (prevMap[deliveryDate] || 1) - 1,
        }));

        // Remove the token from setresponse
        setResponse(prev => prev.filter(item => item.token !== val));

        // Show popup message
        setOpen(false);

        // Show toast notification
        toast.success("Your order has been cancelled successfully.");

        // Refresh the page after the toast duration
        setTimeout(() => {
          window.location.reload();
        }, 5000); 
      } else {
        setError('Failed to cancel order. Please try again.');
      }
    } catch (error) {
      // Log error for debugging
      console.error('Error cancelling order:', error);

      if (error.response?.status === 500) {
        setError('Invalid cancellation request.');
      } else {
        setError('An error occurred while cancelling the order. Please try again.');
      }
    }
  };

  return (
    <>
      {/* Scrolling Text */}
      <div className="ddd">


      <div className="scrolling-text-container">
        <div className="scrolling-text">
          Check the menu after 7.30 PM | Booking Time: 12PM to 8PM (Mon. - Sat.)| Prior token must be utilized for renewal | Book only on non-holiday dates (Based on Local Holidays)
        </div>
      </div>

      {/* Order Details Carousel */}
      <Carousel showThumbs={false} infiniteLoop={true}>
        {setresponse.filter((row) => row.quantity >= 1).map((row, index) => (
          <div className="otp-card" key={index}>
            <div className="otp-details">
              <div className="otp-item">
                <p className="otp-label">Token ID</p>
                <p className="otp-value" id='vv'>{row.token}</p>
              </div>
              <div className="otp-item">
                <p className="otp-label">Valid For </p>
                <p className="otp-value">{formatDateToYYYYMMDD(row.deliveryDate)}</p> {/* Formatted Date */}
              </div>
            </div>

            <div>
              <div className='del-icon'>
                <Button 
                  variant="outlined" 
                  onClick={(event) => handleClickOpen(event, row.token, row.deliveryDate)}
                  disabled={!isWithinAllowedTime} // Disable based on time
                  title={
                    !isWithinAllowedTime 
                      ? 'Token deletion is only allowed between 12 PM to 8 PM.'
                      : 'Delete Token'
                  }
                >
                  <RiDeleteBin5Fill />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Your order has been cancelled successfully."
      />

      {/* Toast Container */}
      <ToastContainer />

      {/* Cancellation Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to cancel the order?"}
        </DialogTitle>
        <DialogActions>
          <Button 
            onClick={(event) => handleYes(event, tokenn, selectedDate)} 
            disabled={!isWithinAllowedTime} // Disable based on time
            title={
              !isWithinAllowedTime 
                ? 'Token cancellation is only allowed between 12 PM to 8 PM.'
                : 'Yes'
            }
          >
            Yes
          </Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>

      {/* Menu Container */}
      <div className="menu-container">
        {/* Calendar Component */}
        <Calender passdata={handleClick} />

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            onClick={() => filterItems('Veg')}
            className={`filter-btn veg-btn ${activeFilter === 'Veg' ? 'active-veg' : ''}`}
            disabled={
              isSunday ||
              (menuDataMap[bookingDay] &&
                Object.keys(menuDataMap[bookingDay]).length === 1 &&
                !menuDataMap[bookingDay].veg) ||
              !isWithinAllowedTime // Disable based on time
            }
            title={
              !isWithinAllowedTime
                ? 'Token actions are only allowed between 12 PM to 8 PM.'
                : (menuDataMap[bookingDay] &&
                    Object.keys(menuDataMap[bookingDay]).length === 1
                  ? 'Only Vegetarian menu is available.'
                  : 'Vegetarian Menu')
            }
          >
            Vegetarian
          </button>

          <button
            onClick={() => filterItems('Egg')}
            className={`filter-btn egg-btn ${activeFilter === 'Egg' ? 'active-egg' : ''}`}
            disabled={
              !isWednesday || // Disable if not Wednesday
              (menuDataMap[bookingDay] && !menuDataMap[bookingDay].egg) ||
              !isWithinAllowedTime // Disable based on time
            }
            title={
              !isWithinAllowedTime
                ? 'Token actions are only allowed between 12 PM to 8 PM.'
                : (!isWednesday || (menuDataMap[bookingDay] && !menuDataMap[bookingDay].egg)
                  ? 'Egg Menu is not available.'
                  : 'Egg Menu')
            }
          >
            Eggetarian
          </button>

          <button
            onClick={() => filterItems('Non-Veg')}
            className={`filter-btn nonveg-btn ${activeFilter === 'Non-Veg' ? 'active-nonveg' : ''}`}
            disabled={
              !isWednesday || // Disable if not Wednesday
              (menuDataMap[bookingDay] && !menuDataMap[bookingDay].nonVeg) ||
              !isWithinAllowedTime // Disable based on time
            }
            title={
              !isWithinAllowedTime
                ? 'Token actions are only allowed between 12 PM to 8 PM.'
                : (!isWednesday || (menuDataMap[bookingDay] && !menuDataMap[bookingDay].nonVeg)
                  ? 'Non-Vegetarian Menu is not available.'
                  : 'Non-Vegetarian Menu')
            }
          >
            Non-Vegetarian
          </button>
        </div>

        {/* Menu List */}
        <div className="menu-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((menuItem, index) => (
              <div
                key={index}
                className={`menu-item-card`} // Add a disabled class on Sunday if needed
              >
                <h2 className="item-name">{menuItem.item.itemName}</h2>
                <p className="item-category">
                  {/* Category: {menuItem.item.category.categoryName} */}
                </p>
              </div>
            ))
          ) : (
            <>
              <p className="no-items-found">No items found for {activeFilter}</p>
              <p className="no-items-found">{error}</p>
            </>
          )}
        </div>

        {/* Generate OTP (Token) Button */}
        <div className="generate-otp-section">
          <button
            onClick={handleOtp}
            className="generate-otp-btn"
            disabled={!selectedDate || (quantityMap[selectedDate] >= 1) || isSunday || !isWithinAllowedTime}
            style={{
              backgroundColor: (!selectedDate || (quantityMap[selectedDate] >= 1) || isSunday || !isWithinAllowedTime) ? '#ccc' : '#3498DB',
              cursor: (!selectedDate || (quantityMap[selectedDate] >= 1) || isSunday || !isWithinAllowedTime) ? 'not-allowed' : 'pointer', // Change cursor
              color: (!selectedDate || (quantityMap[selectedDate] >= 1) || isSunday || !isWithinAllowedTime) ? '#000' : '#ffffff',
            }}
            title={
              !selectedDate
                ? 'Please select a delivery date.'
                : (quantityMap[selectedDate] >= 1)
                  ? 'You have already generated a token for the selected date.'
                  : isSunday
                    ? 'Booking is not allowed today.'
                    : !isWithinAllowedTime
                      ? 'Token actions are only allowed between 12 PM to 8 PM.'
                      : 'Click to generate Token'
            } // Tooltip for better UX
          >
            {(quantityMap[selectedDate] >= 1)
              ? 'Token Already Generated'
              : isSunday
                ? 'Booking Not Allowed Today'
                : !isWithinAllowedTime
                  ? 'Generate Token (Unavailable)'
                  : 'Generate Token'}
          </button>

          {/* Display order submission details */}
          {orderResponse && (
            <div className="order-response">
              <p>{orderResponse}</p>
              <p>Token Id: {otpTokenId}</p>
              <p>Valid For: {selectedDate}</p>
            </div>
          )}
        </div>

        {/* Display Error Message if any */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default Menu;







