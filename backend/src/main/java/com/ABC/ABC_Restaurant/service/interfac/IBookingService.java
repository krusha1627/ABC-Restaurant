package com.ABC.ABC_Restaurant.service.interfac;

import com.ABC.ABC_Restaurant.dto.Response;
import com.ABC.ABC_Restaurant.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
